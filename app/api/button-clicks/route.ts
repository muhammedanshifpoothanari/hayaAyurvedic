import { NextRequest, NextResponse } from 'next/server'
import { getCollection } from '@/lib/mongodb'

// POST /api/button-clicks
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, productId, categoryId, metadata, sessionId, phone } = body

    if (!action) {
      return NextResponse.json({ success: false, error: 'Action is required' }, { status: 400 })
    }

    const event = {
      action,
      productId,
      categoryId,
      metadata,
      sessionId,
      phone: phone || null,
      userAgent: request.headers.get('user-agent'),
      timestamp: new Date()
    }

    const collection = await getCollection('button_clicks')
    await collection.insertOne(event)

    return NextResponse.json({ success: true, queued: false })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message || 'Failed to record event' }, { status: 500 })
  }
}

// GET /api/button-clicks (Admin Analytics)
export async function GET(request: NextRequest) {
  try {
    const collection = await getCollection('button_clicks')
    const events = await collection
      .find({})
      .sort({ timestamp: -1 })
      .limit(100)
      .toArray()
    return NextResponse.json({ success: true, data: events })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch events' }, { status: 500 })
  }
}
