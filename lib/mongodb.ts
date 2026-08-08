// =============================================================================
// HAYA AYURVEDICS - MongoDB Atlas Connection Singleton (with Fast Failover)
// =============================================================================
// Uses the official MongoDB Node.js driver with a global connection cache.
// If the connection to MongoDB Atlas hangs or is blocked (e.g. during local
// dev, paused cluster, or IP whitelist issues), it falls back immediately (1.5s)
// to an in-memory mock database to keep the development server responsive.
// =============================================================================

import { MongoClient, Db } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI || ''
const DB_NAME = process.env.MONGODB_DB || 'haya_ayurvedic'

interface MongoConnection {
  client: any
  db: any
  isMock?: boolean
}

// Cache the connection in global scope to survive Next.js dev server hot-reloads
let globalWithMongo = global as typeof globalThis & {
  _mongoConnectionPromise?: Promise<MongoConnection>
  _mongoConnection?: MongoConnection
}

// Simple in-memory mock store for local development when Atlas is slow/unreachable
class MockCollection {
  name: string
  static store: Record<string, any[]> = {}

  constructor(name: string) {
    this.name = name
    if (!MockCollection.store[name]) {
      MockCollection.store[name] = []
    }
  }

  find(query: any = {}) {
    let items = [...(MockCollection.store[this.name] || [])]
    
    const chain = {
      items,
      sort(sortObj: any) {
        // Simple mock sort
        return this
      },
      limit(n: number) {
        this.items = this.items.slice(0, n)
        return this
      },
      toArray: async () => {
        return chain.items
      }
    }
    return chain
  }

  async findOne(query: any) {
    const items = MockCollection.store[this.name] || []
    if (query && query.sessionId) {
      return items.find(i => i.sessionId === query.sessionId) || null
    }
    if (query && query._id) {
      return items.find(i => i._id === query._id) || null
    }
    return items[0] || null
  }

  async updateOne(query: any, update: any, options: any = {}) {
    const items = MockCollection.store[this.name] || []
    const setFields = update.$set || {}
    let item = items.find(i => i.sessionId === query.sessionId)
    
    if (!item && options.upsert) {
      item = { _id: `mock-${Math.random().toString(36).substr(2, 9)}`, sessionId: query.sessionId }
      items.push(item)
    }
    
    if (item) {
      Object.assign(item, setFields)
    }
    return { acknowledged: true, modifiedCount: 1 }
  }

  async insertOne(doc: any) {
    const items = MockCollection.store[this.name] || []
    const newDoc = { _id: `mock-${Math.random().toString(36).substr(2, 9)}`, ...doc }
    items.push(newDoc)
    return { acknowledged: true, insertedId: newDoc._id }
  }

  async deleteOne(query: any) {
    return { acknowledged: true, deletedCount: 1 }
  }
}

class MockDb {
  collection(name: string) {
    return new MockCollection(name)
  }
}

/**
 * Connect to MongoDB Atlas and return a cached client + db instance.
 * Falls back to mock database if remote server connection times out (1.5s).
 */
export async function connectToDatabase(): Promise<MongoConnection> {
  if (globalWithMongo._mongoConnection) {
    return globalWithMongo._mongoConnection
  }

  if (!globalWithMongo._mongoConnectionPromise) {
    if (!MONGODB_URI) {
      console.warn('⚠️ MONGODB_URI is not set. Using in-memory mock database.')
      const mockConn = { client: {}, db: new MockDb(), isMock: true }
      globalWithMongo._mongoConnection = mockConn
      return mockConn
    }

    // Set short timeouts to fail-fast if Atlas is unresponsive (e.g. IP whitelist / paused cluster)
    const client = new MongoClient(MONGODB_URI, {
      maxPoolSize: 5,
      minPoolSize: 1,
      maxIdleTimeMS: 15000,
      connectTimeoutMS: 1500,
      serverSelectionTimeoutMS: 1500,
    })

    globalWithMongo._mongoConnectionPromise = client.connect()
      .then((clientInstance) => {
        console.log('✅ Connected successfully to MongoDB Atlas.')
        const db = clientInstance.db(DB_NAME)
        const conn = { client: clientInstance, db }
        globalWithMongo._mongoConnection = conn
        return conn
      })
      .catch((err) => {
        console.warn('⚠️ MongoDB Atlas connection timed out/failed. Falling back to responsive in-memory Mock Database for development.', err.message)
        const mockConn = { client: {}, db: new MockDb(), isMock: true }
        globalWithMongo._mongoConnection = mockConn
        return mockConn
      })
  }

  try {
    const conn = await globalWithMongo._mongoConnectionPromise
    return conn
  } catch (e) {
    globalWithMongo._mongoConnectionPromise = undefined
    const mockConn = { client: {}, db: new MockDb(), isMock: true }
    globalWithMongo._mongoConnection = mockConn
    return mockConn
  }
}

/**
 * Get a specific collection from the database (either real or mock).
 */
export async function getCollection(name: string) {
  const { db } = await connectToDatabase()
  return db.collection(name)
}
