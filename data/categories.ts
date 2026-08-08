// =============================================================================
// KISWA - Static Category Catalog
// =============================================================================
// Categories are managed in code for ZERO delay loading.
// Each category has a unique ID referenced by products and MongoDB orders.
// =============================================================================

export interface Category {
  id: string            // Unique category ID (e.g., "CAT-prayer-mat")
  slug: string          // URL-friendly slug (used in /collections/[slug])
  name: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  image: string         // Badge/icon image path
  parentCategory?: string  // For subcategory support
  sortOrder: number     // Display order
}

// ---------------------------------------------------------------------------
// All Categories
// ---------------------------------------------------------------------------
export const categories: Category[] = [
  {
    id: 'CAT-gifts',
    slug: 'gifts',
    name: { en: 'Gift Sets', ar: 'أطقم هدايا' },
    description: {
      en: 'Premium Islamic gift sets for every occasion.',
      ar: 'أطقم هدايا إسلامية فاخرة لكل مناسبة.',
    },
    image: '/categories/prayer-mats-badge.png',
    sortOrder: 1,
  },
  {
    id: 'CAT-prayer-mat',
    slug: 'prayer-mat',
    name: { en: 'Prayer Mats', ar: 'سجاد صلاة' },
    description: {
      en: 'Premium prayer mats for your daily worship.',
      ar: 'سجادات صلاة فاخرة لعبادتك اليومية.',
    },
    image: '/categories/prayer-mats-badge.png',
    sortOrder: 2,
  },
  {
    id: 'CAT-comfort-mats',
    slug: 'comfort-mats',
    name: { en: 'Comfort Mats', ar: 'سجاد مريح' },
    description: {
      en: 'Extra comfortable prayer mats with backrest support.',
      ar: 'سجادات صلاة مريحة مع مسند ظهر.',
    },
    image: '/categories/prayer-wear-badge.png',
    sortOrder: 3,
  },
  {
    id: 'CAT-ihrams',
    slug: 'ihrams',
    name: { en: 'Ihrams', ar: 'إحرامات' },
    description: {
      en: 'Premium quality Ihram clothing for Hajj and Umrah.',
      ar: 'ملابس إحرام عالية الجودة للحج والعمرة.',
    },
    image: '/categories/prayer-mats-badge.png',
    sortOrder: 4,
  },
  {
    id: 'CAT-prayer-wear',
    slug: 'prayer-wear',
    name: { en: 'Prayer Dresses', ar: 'شراشف صلاة' },
    description: {
      en: 'Islamic prayer clothing and accessories.',
      ar: 'ملابس وإكسسوارات صلاة إسلامية.',
    },
    image: '/categories/prayer-wear-badge.png',
    sortOrder: 5,
  },
  {
    id: 'CAT-incense',
    slug: 'incense',
    name: { en: 'Incense & Burners', ar: 'بخور ومبخرات' },
    description: {
      en: 'Premium oud incense and handcrafted burners.',
      ar: 'بخور عود فاخر ومبخرات يدوية الصنع.',
    },
    image: '/categories/tents-badge.png',
    sortOrder: 6,
  },
  {
    id: 'CAT-perfumes',
    slug: 'perfumes',
    name: { en: 'Perfumes', ar: 'عطور' },
    description: {
      en: 'Exclusive Islamic perfumes and attars.',
      ar: 'عطور وعطارات إسلامية حصرية.',
    },
    image: '/categories/tents-badge.png',
    sortOrder: 7,
  },
  {
    id: 'CAT-tents',
    slug: 'tents',
    name: { en: 'Travel/Camping', ar: 'رحلات' },
    description: {
      en: 'Premium camping equipment for outdoor adventures.',
      ar: 'معدات تخييم فاخرة للمغامرات الخارجية.',
    },
    image: '/categories/tents-badge.png',
    sortOrder: 8,
  },
  {
    id: 'CAT-furnishings',
    slug: 'furnishings',
    name: { en: 'Home Furnishings', ar: 'مفروشات منزلية' },
    description: {
      en: 'Home accessories and furnishings.',
      ar: 'إكسسوارات ومفروشات منزلية.',
    },
    image: '/categories/prayer-wear-badge.png',
    sortOrder: 9,
  },
]

// =============================================================================
// Lookup Helpers
// =============================================================================

/** Look up a category by its unique ID */
export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id)
}

/** Look up a category by its URL slug */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

/** Get all categories sorted by sortOrder */
export function getSortedCategories(): Category[] {
  return [...categories].sort((a, b) => a.sortOrder - b.sortOrder)
}

/** Get subcategories of a parent category */
export function getSubcategories(parentId: string): Category[] {
  return categories.filter((c) => c.parentCategory === parentId)
}
