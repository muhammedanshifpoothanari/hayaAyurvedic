'use client'

import { useLanguage } from '@/hooks/useLanguage'

export default function InstaStoryBar() {
  const { isArabic } = useLanguage()

  const stories = [
    {
      id: 'wear',
      title: isArabic ? 'لباسي' : 'Prayer Wear',
      image: '/stories/story-wear.jpg',
      href: '/collections/prayer-wear',
    },
    {
      id: 'rug',
      title: isArabic ? 'سجاد صلاة' : 'Prayer Rugs',
      image: '/stories/story-rug.jpg',
      href: '/collections/prayer-mat',
    },
    {
      id: 'family',
      title: isArabic ? 'العائلة' : 'Family Sets',
      image: '/stories/story-family.jpg',
      href: '/collections/gifts',
    },
    {
      id: 'store',
      title: isArabic ? 'المتاجر' : 'Our Stores',
      image: '/stories/story-store.jpg',
      href: '/about',
    },
    {
      id: 'tents',
      title: isArabic ? 'رحلات' : 'Camping Gear',
      image: '/products/tent-1.png',
      href: '/collections/tents',
    },
    {
      id: 'incense',
      title: isArabic ? 'بخور' : 'Fragrances',
      image: '/products/incense-1.png',
      href: '/collections/incense',
    }
  ]

  return (
    <section className="py-6 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 overflow-x-auto hide-scrollbar justify-start md:justify-center py-2">
          {stories.map((story) => (
            <a
              key={story.id}
              href={story.href}
              className="flex flex-col items-center gap-2 shrink-0 group cursor-pointer"
            >
              {/* Instagram Story Gradient Ring */}
              <div className="relative p-[2.5px] rounded-full bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <div className="w-18 h-18 md:w-22 md:h-22 rounded-full overflow-hidden bg-white p-0.5 border border-white">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <span className="text-xs font-extrabold text-gray-800 text-center group-hover:text-[#3d2e1e] transition">
                {story.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
