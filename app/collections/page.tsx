'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useRouter } from 'next/navigation'

const collections = [
  { id: 'tents', name: 'Camping Tents', description: 'Premium camping equipment' },
  { id: 'prayer-mat', name: 'Prayer Mats', description: 'Luxury prayer mats' },
  { id: 'prayer-wear', name: 'Prayer Wear', description: 'Islamic prayer clothing' },
  { id: 'furnishings', name: 'Home Furnishings', description: 'Home accessories' },
]

export default function CollectionsPage() {
  const router = useRouter()

  const handleCollectionClick = (collectionId: string) => {
    router.push(`/collections/${collectionId}`)
  }

  return (
    <div className="w-full bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="px-4 md:px-8 lg:px-[76px] py-4 border-b border-gray-200">
        <div className="text-sm text-gray-600">
          <a href="/" className="hover:text-gray-800">Home</a>
          <span className="mx-2">/</span>
          <span>Collections</span>
        </div>
      </div>

      {/* Collections Header */}
      <div className="px-4 md:px-8 lg:px-[76px] py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2d5f4f] mb-2">Collections</h1>
        <p className="text-gray-600">Browse our premium Islamic product collections</p>
      </div>

      {/* Collections Grid */}
      <div className="px-4 md:px-8 lg:px-[76px] pb-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <button
              key={collection.id}
              onClick={() => handleCollectionClick(collection.id)}
              className="group border border-gray-300 p-6 hover:border-[#2d5f4f] transition-all cursor-pointer text-center"
            >
              <div className="h-32 bg-gray-100 rounded mb-4 flex items-center justify-center">
                <span className="text-4xl">📦</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#2d5f4f]">
                {collection.name}
              </h3>
              <p className="text-sm text-gray-600">{collection.description}</p>
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
