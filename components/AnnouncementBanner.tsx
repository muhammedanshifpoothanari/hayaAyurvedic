'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/hooks/useLanguage'

const announcements = {
  en: [
    'Authentic Kerala Ayurvedic Healing in Kollam',
    'NABH Accredited & Certified Physicians',
    'Book online video consultations or residential stays',
    'Experience traditional Panchakarma & rejuvenation retreats',
  ],
  ar: [
    'العلاج الأيورفيدي الأصيل من كيرالا في واياناد',
    'مرفق معتمد من NABH وأطباء مؤهلين',
    'احجز استشارة عبر الفيديو أو إقامة علاجية',
    'جرب علاجات البانشاكارما التقليدية وتجديد النشاط',
  ],
}

export default function AnnouncementBanner() {
  const { isArabic } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const messages = isArabic ? announcements.ar : announcements.en

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [messages.length])

  return (
    <div className="bg-gray-100 text-gray-600 overflow-hidden border-b border-gray-200">
      <div className="px-4 py-2 flex items-center justify-center">
        {/* Announcement Text */}
        <div className="text-center text-[11px] md:text-xs font-medium tracking-wide h-4 flex items-center justify-center">
          <span className="transition-opacity duration-500 animate-fade-in">
            {messages[currentIndex]}
          </span>
        </div>
      </div>
    </div>
  )
}
