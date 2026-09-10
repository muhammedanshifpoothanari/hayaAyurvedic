'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react'
import BookingModal from './BookingModal'

const slides = [
  {
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    title: "Rejuvenate Your Soul in God's Own Country",
    subtitle: "AUTHENTIC KERALA AYURVEDA",
    desc: "Experience ancient wellness traditions in our serene sanctuary in Kollam, Kerala. Restore your body's natural state of balance.",
    cta: "Book Healing Stays"
  },
  {
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1600&q=80",
    title: "Deep Detoxification with Panchakarma",
    subtitle: "HOLISTIC PURIFICATION",
    desc: "Eliminate accumulated environmental toxins, boost metabolism, and strengthen your immune system under doctor supervision.",
    cta: "Explore Treatments"
  },
  {
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1600&q=80",
    title: "Calm the Storm in Your Mind",
    subtitle: "THERAPEUTIC SHIRODHARA",
    desc: "A continuous flow of warm herbal oils on the forehead to relieve stress, anxiety, migraines, and chronic insomnia.",
    cta: "Schedule a Session"
  }
]

export default function Slider() {
  const [current, setCurrent] = useState(0)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative w-full h-[320px] md:h-[420px] overflow-hidden bg-[#122b14]">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          {/* Background Image with Dark & Green Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out scale-105"
            style={{ 
              backgroundImage: `url('${slide.image}')`,
              transform: idx === current ? 'scale(1)' : 'scale(1.05)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#122b14]/90 via-[#122b14]/65 to-black/35" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl text-left space-y-4 md:space-y-6">
                <span className="inline-block text-[#c59b27] text-xs md:text-sm font-extrabold uppercase tracking-widest bg-[#c59b27]/10 px-3 py-1 rounded-full border border-[#c59b27]/30 backdrop-blur-sm">
                  {slide.subtitle}
                </span>
                <h1 className="text-3xl font-bold text-[#fdfbf7] leading-tight" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700 }}>
                  {slide.title}
                </h1>
                <p className="text-sm md:text-lg text-gray-200 font-medium max-w-xl leading-relaxed">
                  {slide.desc}
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="bg-[#c59b27] hover:bg-[#c59b27]/90 text-black px-6 py-3 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition flex items-center gap-2 active:scale-95"
                  >
                    <Calendar size={16} />
                    {slide.cta}
                  </button>
                  <a
                    href="#treatments"
                    className="border border-[#fdfbf7]/40 hover:bg-[#fdfbf7]/10 text-[#fdfbf7] px-6 py-3 rounded-xl text-sm font-bold transition"
                  >
                    View Treatments
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 w-10 md:w-12 md:h-12 rounded-full bg-[#fdfbf7]/10 hover:bg-[#fdfbf7]/20 text-[#fdfbf7] flex items-center justify-center border border-[#fdfbf7]/20 backdrop-blur-sm transition-all active:scale-90"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 w-10 md:w-12 md:h-12 rounded-full bg-[#fdfbf7]/10 hover:bg-[#fdfbf7]/20 text-[#fdfbf7] flex items-center justify-center border border-[#fdfbf7]/20 backdrop-blur-sm transition-all active:scale-90"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === current ? 'bg-[#c59b27] w-8' : 'bg-[#fdfbf7]/30 hover:bg-[#fdfbf7]/50'}`}
          />
        ))}
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  )
}
