'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Award, Globe, Users, ShieldCheck, Heart, MapPin, Calendar } from 'lucide-react'
import { useState } from 'react'
import BookingModal from '@/components/BookingModal'

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const values = [
    {
      icon: Award,
      title: 'NABH Accreditation',
      description: 'Maintaining the highest Indian standards of clinical safety, cleanliness, and therapeutic effectiveness.',
    },
    {
      icon: Globe,
      title: 'Global Healing Destination',
      description: 'Welcoming domestic and international guests seeking restorative Panchakarma and healing programs.',
    },
    {
      icon: Users,
      title: 'Expert Vaidyas & Therapists',
      description: 'Consultations by expert physicians and daily therapies administered by traditional certified massage therapists.',
    },
    {
      icon: Heart,
      title: '100% Natural Herbal Medicines',
      description: 'Using authentic organic oils, leaves, and decocations sourced locally from Kerala forests.',
    },
  ]

  const stats = [
    { number: '25+', label: 'Years of Healing Tradition' },
    { number: '15k+', label: 'Happy Recovered Patients' },
    { number: '15+', label: 'Expert Doctors & Therapists' },
    { number: '100%', label: 'Organic Custom Medicines' },
  ]

  return (
    <div className="w-full bg-[#fdfbf7] flex flex-col min-h-screen text-gray-800">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#1e4620]/10 to-transparent py-14 px-4 text-left border-b border-[#e2dacb]/40">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#c59b27] mb-2 block">
            OUR HERITAGE
          </span>
          <h1 className="text-3xl font-bold text-[#1e4620] mb-4 tracking-tight">
            About Haya Ayurvedics
          </h1>
          <p className="text-base text-gray-600 font-medium leading-relaxed">
            Pioneering premium traditional Ayurvedic clinical care and residential detoxification programs in Kollam, Kerala.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="px-4 py-20 max-w-4xl mx-auto text-left">
        <h2 className="text-3xl font-bold font-serif text-[#1e4620] mb-6 border-b pb-4 border-[#e2dacb] inline-block">
          Who We Are
        </h2>
        <div className="space-y-6 text-sm md:text-base text-gray-600 leading-relaxed font-medium">
          <p>
            <strong>Haya Ayurvedics</strong> is a state-of-the-art Ayurvedic Hospital and Wellness Retreat nestled in the serene, oxygen-rich hills of Kollam, Kerala, India. Rooted in the traditional Ashtavaidya wisdom of Kerala, we specialize in Panchakarma (deep cleansing), spine care, rejuvenation, and lifestyle illness management.
          </p>
          <p>
            Our sanctuary is designed for individuals seeking relief from modern day stressors, chronic joint/musculoskeletal pains, and metabolic disorders. Under the guidance of our Chief Physician, <strong>Dr. Madhavan Namboothiri</strong>, we curate bespoke treatment modules that include therapeutic massages, herbal steam baths, internal purification procedures, custom diet logs, and daily yoga classes.
          </p>
          <p>
            We are proud to be certified by the government of Kerala (Green Leaf approval) and NABH, assuring our patients of top-tier hygienic facilities, standardized traditional medicines, and professional clinical staff.
          </p>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="bg-[#1e4620] text-[#fdfbf7] py-16 px-4 border-t border-b border-[#c59b27]/30">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <p className="text-3xl md:text-5xl font-bold font-serif text-[#c59b27]">{stat.number}</p>
              <p className="text-xs uppercase tracking-wider font-semibold text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#c59b27]">Our Pillars</span>
          <h2 className="text-3xl font-bold font-serif text-[#1e4620]">Why Choose Haya Ayurvedics?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon
            return (
              <div key={idx} className="bg-[#f4efe6]/35 border border-[#e2dacb]/60 p-8 rounded-3xl space-y-4 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-[#1e4620]/10 rounded-2xl flex items-center justify-center text-[#1e4620]">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold font-serif text-[#1e4620]">{val.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">{val.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Booking CTA banner */}
      <div className="bg-[#f4efe6]/50 border-t border-[#e2dacb]/40 py-16 text-center">
        <h3 className="text-2xl font-bold font-serif text-[#1e4620] mb-3">Interested in visiting our sanctuary?</h3>
        <p className="text-sm text-gray-600 mb-6 font-medium max-w-md mx-auto">Contact us for free medical document review and package recommendations from our doctors.</p>
        <button
          onClick={() => setIsBookingOpen(true)}
          className="bg-[#1e4620] hover:bg-[#1e4620]/90 text-white px-6 py-3 rounded-xl font-bold shadow-md transition flex items-center gap-2 mx-auto active:scale-95 text-sm"
        >
          <Calendar size={16} />
          Book Initial Consultation
        </button>
      </div>

      <Footer />

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}
