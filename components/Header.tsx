'use client'

import { Menu, X, Calendar, MapPin, Phone, Heart } from 'lucide-react'
import { useState, useEffect } from 'react'
import BookingModal from './BookingModal'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Wellness Packages', href: '#packages' },
  { label: 'Our Physicians', href: '#doctors' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`w-full z-50 transition-all duration-300 ${isScrolled ? 'sticky top-0 bg-[#fdfbf7]/90 backdrop-blur-md shadow-md border-b border-[#e2dacb]/40' : 'relative bg-[#fdfbf7]'}`}>
        
        {/* Top Info Bar */}
        <div className="bg-[#1e4620] text-[#fdfbf7] text-xs px-4 py-2 flex justify-between items-center max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1">
              <MapPin size={13} className="text-[#c59b27]" />
              Wayanad, Kerala, India
            </span>
            <span className="flex items-center gap-1">
              <Phone size={13} className="text-[#c59b27]" />
              +91 99614 00633
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#c59b27] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-black">
              NABH & AYUSH Approved
            </span>
          </div>
        </div>

        {/* Main Header Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#1e4620] flex items-center justify-center text-[#c59b27]">
                <Heart size={22} fill="currentColor" className="text-[#c59b27]" />
              </div>
              <div>
                <a href="/" className="flex flex-col">
                  <span className="text-lg md:text-xl font-bold tracking-wide text-[#1e4620] font-serif leading-none">
                    HAYA AYURVEDICS
                  </span>
                  <span className="text-[10px] tracking-widest text-[#c59b27] font-semibold uppercase mt-0.5">
                    Kerala Ayurvedic Hospital
                  </span>
                </a>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="text-sm font-semibold text-gray-700 hover:text-[#1e4620] transition-colors relative py-1 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c59b27] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-[#1e4620] hover:bg-[#1e4620]/90 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 active:scale-95"
              >
                <Calendar size={16} />
                Book Consultation
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#1e4620] rounded-lg hover:bg-[#f4efe6] transition"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className={`fixed top-0 bottom-0 right-0 w-80 bg-[#fdfbf7] max-w-[85vw] shadow-2xl transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex items-center justify-between p-5 border-b border-[#e2dacb]/60 bg-[#1e4620] text-[#fdfbf7]">
              <span className="font-bold text-lg font-serif">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-1 hover:bg-white/10 rounded-full">
                <X size={24} className="text-[#fdfbf7]" />
              </button>
            </div>
            <div className="p-5 flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 hover:bg-[#f4efe6] rounded-xl text-gray-800 font-bold transition text-base"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-[#e2dacb]/60 pt-6 mt-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setIsBookingOpen(true)
                  }}
                  className="w-full bg-[#1e4620] hover:bg-[#1e4620]/90 text-white py-3 rounded-xl font-bold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar size={18} />
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* App-like Mobile Bottom Booking Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#fdfbf7]/95 backdrop-blur-md border-t border-[#e2dacb]/60 shadow-lg lg:hidden flex justify-between items-center py-3 px-6 pb-safe-bottom">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Kerala's Healing Heritage</p>
          <p className="text-sm font-serif font-bold text-[#1e4620]">Haya Ayurvedics</p>
        </div>
        <button
          onClick={() => setIsBookingOpen(true)}
          className="bg-[#1e4620] hover:bg-[#1e4620]/90 text-[#fdfbf7] px-5 py-2 rounded-xl text-xs font-bold shadow transition flex items-center gap-1.5"
        >
          <Calendar size={14} />
          Book Consultation
        </button>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
