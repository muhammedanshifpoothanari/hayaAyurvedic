'use client'

import { use, useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { useLanguage } from '@/hooks/useLanguage'
import { getCategoryBySlug } from '@/data/categories'
import { getProductsByCategoryId } from '@/data/products'

export default function CollectionPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = use(params)
  const { language } = useLanguage()

  const staticCategory = getCategoryBySlug(resolvedParams.category)
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data && data.data.length > 0) {
          const catId = staticCategory ? staticCategory.id : `CAT-${resolvedParams.category}`
          const filtered = data.data.filter((p: any) => p.categoryId === catId || p.slug?.includes(resolvedParams.category))
          if (filtered.length > 0) {
            setProducts(filtered)
            return
          }
        }
        // Fallback to static
        if (staticCategory) {
          setProducts(getProductsByCategoryId(staticCategory.id))
        }
      })
      .catch(() => {
        if (staticCategory) {
          setProducts(getProductsByCategoryId(staticCategory.id))
        }
      })
      .finally(() => setLoading(false))
  }, [resolvedParams.category, staticCategory])

  const categoryName = staticCategory ? (staticCategory.name[language as 'en' | 'ar'] || staticCategory.name.en) : resolvedParams.category
  const categoryDesc = staticCategory ? (staticCategory.description[language as 'en' | 'ar'] || staticCategory.description.en) : 'Explore our collection'

  return (
    <div className="w-full bg-white min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="px-4 md:px-8 lg:px-[76px] py-4 border-b border-gray-200">
        <div className="text-sm text-gray-600">
          <a href="/" className="hover:text-gray-800">Home</a>
          <span className="mx-2">/</span>
          <a href="/collections" className="hover:text-gray-800">Collections</a>
          <span className="mx-2">/</span>
          <span>{categoryName}</span>
        </div>
      </div>

      {/* Collection Header */}
      <div className="px-4 md:px-8 lg:px-[76px] py-12 md:py-16 border-b border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3d2e1e] mb-3 capitalize">{categoryName}</h1>
        <p className="text-gray-600 text-lg">{categoryDesc}</p>
      </div>

      {/* Products Grid */}
      <div className="px-4 md:px-8 lg:px-[76px] py-16 md:py-20">
        {loading ? (
          <div className="text-center py-12 text-gray-400">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No products found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard
                key={product._id || product.id}
                id={product._id || product.id}
                name={product.name?.[language as 'en' | 'ar'] || product.name?.en || product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                offer={product.offer}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
