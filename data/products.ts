// =============================================================================
// KISWA - Static Product Catalog
// =============================================================================
// Products are managed in code for ZERO delay loading.
// To add/edit products: update this file and push to production.
// Each product has a unique ID for referencing in MongoDB orders.
// =============================================================================

export interface Product {
  id: string           // Unique product ID (e.g., "PM-001")
  slug: string         // URL-friendly slug
  name: {
    en: string
    ar: string
  }
  price: number        // Current price in SAR
  originalPrice?: number  // Original price (for discount display)
  offer?: string       // Discount label (e.g., "-18%", "22%")
  image: string        // Path to product image in /public
  categoryId: string   // Reference to category ID
  description?: {
    en: string
    ar: string
  }
  inStock: boolean
  featured?: boolean   // Show on homepage
  sortOrder?: number   // Display order within category
}

// ---------------------------------------------------------------------------
// Prayer Mats
// ---------------------------------------------------------------------------
export const prayerMats: Product[] = [
  {
    id: 'PM-001',
    slug: 'rawdat-al-haramain-prayer-rug-green',
    name: { en: 'Rawdat Al-Haramain Prayer Rug Green', ar: 'سجادة مسند لون أخضر داكن مطرزة' },
    price: 65.22,
    originalPrice: 80,
    offer: '-18%',
    image: '/products/prayer-mat-1.png',
    categoryId: 'CAT-prayer-mat',
    description: {
      en: 'Premium prayer rug with intricate green embroidery inspired by Rawdat Al-Haramain.',
      ar: 'سجادة صلاة فاخرة بتطريز أخضر مستوحى من روضة الحرمين.',
    },
    inStock: true,
    featured: true,
    sortOrder: 1,
  },
  {
    id: 'PM-002',
    slug: 'premium-silk-prayer-mat',
    name: { en: 'Premium Silk Prayer Mat', ar: 'سجادة ومسند ظهر بلون بيج ناعم' },
    price: 45.00,
    originalPrice: 60,
    offer: '-25%',
    image: '/products/prayer-mat-2.png',
    categoryId: 'CAT-prayer-mat',
    description: {
      en: 'Soft silk prayer mat with elegant beige tones and backrest support.',
      ar: 'سجادة صلاة حريرية ناعمة بألوان بيج أنيقة مع مسند ظهر.',
    },
    inStock: true,
    featured: true,
    sortOrder: 2,
  },
  {
    id: 'PM-003',
    slug: 'luxury-velvet-prayer-rug',
    name: { en: 'Luxury Velvet Prayer Rug', ar: 'سجادة مسند ظهر مع نقوش إسلامية' },
    price: 55.50,
    originalPrice: 75,
    offer: '-26%',
    image: '/products/prayer-mat-3.png',
    categoryId: 'CAT-prayer-mat',
    description: {
      en: 'Velvet prayer rug with Islamic calligraphy patterns and backrest.',
      ar: 'سجادة صلاة مخملية بنقوش خط إسلامي ومسند ظهر.',
    },
    inStock: true,
    featured: true,
    sortOrder: 3,
  },
  {
    id: 'PM-004',
    slug: 'traditional-prayer-mat',
    name: { en: 'Traditional Prayer Mat', ar: 'سجادة صلاة ومسند فاخر أزرق' },
    price: 35.00,
    image: '/products/prayer-mat-4.png',
    categoryId: 'CAT-prayer-mat',
    description: {
      en: 'Classic traditional prayer mat with timeless design.',
      ar: 'سجادة صلاة تقليدية بتصميم كلاسيكي.',
    },
    inStock: true,
    featured: true,
    sortOrder: 4,
  },
  {
    id: 'PM-005',
    slug: 'modern-prayer-rug',
    name: { en: 'Modern Prayer Rug', ar: 'سجادة صلاة عصرية' },
    price: 42.00,
    originalPrice: 56,
    offer: '-25%',
    image: '/products/prayer-mat-5.png',
    categoryId: 'CAT-prayer-mat',
    description: {
      en: 'Contemporary modern prayer rug with minimalist design.',
      ar: 'سجادة صلاة عصرية بتصميم بسيط وأنيق.',
    },
    inStock: true,
    sortOrder: 5,
  },
  {
    id: 'PM-006',
    slug: 'portable-prayer-mat',
    name: { en: 'Portable Prayer Mat', ar: 'سجادة صلاة محمولة' },
    price: 28.00,
    image: '/products/prayer-mat-6.png',
    categoryId: 'CAT-prayer-mat',
    description: {
      en: 'Lightweight, foldable prayer mat perfect for travel.',
      ar: 'سجادة صلاة خفيفة قابلة للطي مثالية للسفر.',
    },
    inStock: true,
    sortOrder: 6,
  },
]

// ---------------------------------------------------------------------------
// Prayer Wear
// ---------------------------------------------------------------------------
export const prayerWear: Product[] = [
  {
    id: 'PW-001',
    slug: 'premium-prayer-set-cotton',
    name: { en: 'Premium Prayer Set - Cotton', ar: 'طقم صلاة كامل للسيدات - قطن' },
    price: 180.00,
    image: '/products/prayer-wear-1.png',
    categoryId: 'CAT-prayer-wear',
    description: {
      en: 'Complete cotton prayer set for women with elegant design.',
      ar: 'طقم صلاة قطني كامل للسيدات بتصميم أنيق.',
    },
    inStock: true,
    featured: true,
    sortOrder: 1,
  },
  {
    id: 'PW-002',
    slug: 'luxury-prayer-set-white',
    name: { en: 'Luxury Prayer Set with Mat - White', ar: 'طقم صلاة فاخر مع سجادة - أبيض' },
    price: 250.00,
    originalPrice: 280.00,
    offer: '10%',
    image: '/products/prayer-wear-premium.png',
    categoryId: 'CAT-prayer-wear',
    description: {
      en: 'Premium white prayer set with included prayer mat.',
      ar: 'طقم صلاة أبيض فاخر مع سجادة صلاة.',
    },
    inStock: true,
    featured: true,
    sortOrder: 2,
  },
  {
    id: 'PW-003',
    slug: 'mens-prayer-set-tasbih-perfume',
    name: { en: 'Mens Prayer Set with Tasbih & Perfume', ar: 'طقم صلاة رجالي مع سبحة وعطر' },
    price: 210.00,
    image: '/products/prayer-wear-1.png',
    categoryId: 'CAT-prayer-wear',
    description: {
      en: 'Complete men\'s prayer set with tasbih beads and perfume.',
      ar: 'طقم صلاة رجالي كامل مع سبحة وعطر.',
    },
    inStock: true,
    featured: true,
    sortOrder: 3,
  },
  {
    id: 'PW-004',
    slug: 'luxury-gift-prayer-set',
    name: { en: 'Luxury Gift Prayer Set', ar: 'طقم صلاة هدية فاخرة' },
    price: 320.00,
    image: '/products/prayer-wear-premium.png',
    categoryId: 'CAT-prayer-wear',
    description: {
      en: 'Premium gift box prayer set, perfect for special occasions.',
      ar: 'طقم صلاة هدية فاخرة في صندوق مميز.',
    },
    inStock: true,
    featured: true,
    sortOrder: 4,
  },
  {
    id: 'PW-005',
    slug: 'premium-prayer-dress',
    name: { en: 'Premium Prayer Dress', ar: 'فستان صلاة فاخر' },
    price: 89.99,
    image: '/products/prayer-dress-1.png',
    categoryId: 'CAT-prayer-wear',
    description: {
      en: 'Elegant prayer dress with flowing design.',
      ar: 'فستان صلاة أنيق بتصميم انسيابي.',
    },
    inStock: true,
    sortOrder: 5,
  },
  {
    id: 'PW-006',
    slug: 'luxury-abaya',
    name: { en: 'Luxury Abaya', ar: 'عباية فاخرة' },
    price: 149.99,
    originalPrice: 200,
    offer: '-25%',
    image: '/products/prayer-dress-2.png',
    categoryId: 'CAT-prayer-wear',
    description: {
      en: 'Luxurious abaya crafted from premium materials.',
      ar: 'عباية فاخرة مصنوعة من أجود الخامات.',
    },
    inStock: true,
    sortOrder: 6,
  },
]

// ---------------------------------------------------------------------------
// Tents & Camping
// ---------------------------------------------------------------------------
export const tents: Product[] = [
  {
    id: 'TN-001',
    slug: 'premium-camping-tent',
    name: { en: 'Premium Camping Tent', ar: 'خيمة تخييم فاخرة' },
    price: 299.99,
    originalPrice: 450,
    offer: '-33%',
    image: '/products/tent-1.png',
    categoryId: 'CAT-tents',
    description: {
      en: 'High-quality camping tent with weather-resistant materials.',
      ar: 'خيمة تخييم عالية الجودة بمواد مقاومة للطقس.',
    },
    inStock: true,
    featured: true,
    sortOrder: 1,
  },
  {
    id: 'TN-002',
    slug: 'luxury-desert-tent',
    name: { en: 'Luxury Desert Tent', ar: 'خيمة صحراوية فاخرة' },
    price: 599.99,
    image: '/products/tent-2.png',
    categoryId: 'CAT-tents',
    description: {
      en: 'Spacious luxury desert tent for premium camping experiences.',
      ar: 'خيمة صحراوية فسيحة لتجارب تخييم فاخرة.',
    },
    inStock: true,
    featured: true,
    sortOrder: 2,
  },
  {
    id: 'TN-003',
    slug: 'standard-camping-tent',
    name: { en: 'Standard Camping Tent', ar: 'خيمة تخييم عادية' },
    price: 199.99,
    originalPrice: 300,
    offer: '-33%',
    image: '/products/tent-3.png',
    categoryId: 'CAT-tents',
    description: {
      en: 'Affordable yet durable standard camping tent.',
      ar: 'خيمة تخييم عادية بأسعار معقولة ومتينة.',
    },
    inStock: true,
    sortOrder: 3,
  },
]

// ---------------------------------------------------------------------------
// Incense & Burners
// ---------------------------------------------------------------------------
export const incense: Product[] = [
  {
    id: 'IN-001',
    slug: 'luxury-oud-incense-50g',
    name: { en: 'Luxury Oud Incense - 50g', ar: 'بخور عود فاخر - 50 جرام' },
    price: 150.00,
    originalPrice: 180.00,
    offer: '16%',
    image: '/products/furnishings-premium.png',
    categoryId: 'CAT-incense',
    description: {
      en: 'Premium oud incense with rich, lasting fragrance.',
      ar: 'بخور عود فاخر بعطر غني ومتواصل.',
    },
    inStock: true,
    featured: true,
    sortOrder: 1,
  },
  {
    id: 'IN-002',
    slug: 'andalusian-wooden-burner',
    name: { en: 'Andalusian Wooden Burner', ar: 'مبخرة خشبية بتصميم أندلسي' },
    price: 85.00,
    image: '/products/furnishings-premium.png',
    categoryId: 'CAT-incense',
    description: {
      en: 'Handcrafted wooden incense burner with Andalusian design.',
      ar: 'مبخرة خشبية يدوية الصنع بتصميم أندلسي.',
    },
    inStock: true,
    featured: true,
    sortOrder: 2,
  },
  {
    id: 'IN-003',
    slug: 'moroccan-double-super-incense',
    name: { en: 'Moroccan Double Super Incense', ar: 'بخور مروكي دبل سوبر' },
    price: 290.00,
    image: '/products/furnishings-premium.png',
    categoryId: 'CAT-incense',
    description: {
      en: 'Premium Moroccan double super grade incense.',
      ar: 'بخور مغربي درجة دبل سوبر فاخر.',
    },
    inStock: true,
    featured: true,
    sortOrder: 3,
  },
  {
    id: 'IN-004',
    slug: 'royal-incense-collection-with-burner',
    name: { en: 'Royal Incense Collection with Burner', ar: 'مجموعة البخور الملكية مع المبخرة' },
    price: 450.00,
    image: '/products/furnishings-premium.png',
    categoryId: 'CAT-incense',
    description: {
      en: 'Complete royal incense collection with premium burner.',
      ar: 'مجموعة بخور ملكية كاملة مع مبخرة فاخرة.',
    },
    inStock: true,
    featured: true,
    sortOrder: 4,
  },
]

// ---------------------------------------------------------------------------
// Home Furnishings
// ---------------------------------------------------------------------------
export const furnishings: Product[] = [
  {
    id: 'HF-001',
    slug: 'islamic-wall-art',
    name: { en: 'Islamic Wall Art', ar: 'لوحة جدارية إسلامية' },
    price: 59.99,
    image: '/products/furnishing-1.png',
    categoryId: 'CAT-furnishings',
    description: {
      en: 'Beautiful Islamic calligraphy wall art.',
      ar: 'لوحة جدارية جميلة بالخط الإسلامي.',
    },
    inStock: true,
    sortOrder: 1,
  },
  {
    id: 'HF-002',
    slug: 'prayer-rug-stand',
    name: { en: 'Prayer Rug Stand', ar: 'حامل سجادة صلاة' },
    price: 39.99,
    image: '/products/furnishing-2.png',
    categoryId: 'CAT-furnishings',
    description: {
      en: 'Elegant wooden stand to display your prayer rug.',
      ar: 'حامل خشبي أنيق لعرض سجادة الصلاة.',
    },
    inStock: true,
    sortOrder: 2,
  },
]

// =============================================================================
// ALL PRODUCTS (combined) & Lookup Helpers
// =============================================================================

export const allProducts: Product[] = [
  ...prayerMats,
  ...prayerWear,
  ...tents,
  ...incense,
  ...furnishings,
]

/** Look up a product by its unique ID */
export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id)
}

/** Look up a product by its slug */
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug)
}

/** Get all products for a given category ID */
export function getProductsByCategoryId(categoryId: string): Product[] {
  return allProducts.filter((p) => p.categoryId === categoryId)
}

/** Get featured products (for homepage display) */
export function getFeaturedProducts(categoryId?: string): Product[] {
  let products = allProducts.filter((p) => p.featured)
  if (categoryId) {
    products = products.filter((p) => p.categoryId === categoryId)
  }
  return products.sort((a, b) => (a.sortOrder ?? 99) - (b.sortOrder ?? 99))
}
