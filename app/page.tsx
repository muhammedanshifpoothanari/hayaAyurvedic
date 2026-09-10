'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Slider from '@/components/Slider'
import Footer from '@/components/Footer'
import BookingModal from '@/components/BookingModal'
import PhysicianSection from '@/components/PhysicianSection'
import { treatments, packages, doctors } from '@/data/ayurvedaData'
import { Check, Calendar, ArrowRight, ShieldCheck, Heart, User, Clock, Compass } from 'lucide-react'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedTreatmentId, setSelectedTreatmentId] = useState('')
  const [selectedPackageId, setSelectedPackageId] = useState('')

  const openBookingForTreatment = (id: string) => {
    setSelectedTreatmentId(id)
    setSelectedPackageId('')
    setIsBookingOpen(true)
  }

  const openBookingForPackage = (id: string) => {
    setSelectedPackageId(id)
    setSelectedTreatmentId('')
    setIsBookingOpen(true)
  }

  return (
    <div className="w-full bg-[#fdfbf7] min-h-screen text-gray-800 selection:bg-[#c59b27]/30 selection:text-[#1e4620]">
      <Header />
      <Slider />

      {/* Physician Section — matching provided design */}
      <PhysicianSection imageSrc="/doctors/dr-nimmy.png" />

      {/* Intro section */}
      <section className="py-14 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome to HAYA AYURVEDICS heading matching reference */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xl sm:text-2xl font-serif italic text-[#c59b27]">Welcome to</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wider text-[#c59b27] mt-1">
            HAYA AYURVEDICS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-[#1e4620] leading-tight">
              Restore Balance, Vitality, and Serenity to Your Life
            </h3>
            <div className="w-20 h-1 bg-[#c59b27] rounded"></div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
              Located in the scenic hills of Kollam, Kerala, Haya Ayurvedics is a premier Ayurvedic hospital specializing in restorative, detoxifying, and therapeutic treatments. We combine authentic Vedic scriptures with modern diagnostics to treat the root causes of chronic ailments.
            </p>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">
              Our residential facility provides guests with organic vegetarian diets prepared according to their body constitution (Prakruti), personalized herbal medicines, daily yoga sessions, and traditional therapies administered by certified therapists under expert medical guidance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 bg-[#f4efe6]/50 p-3 rounded-xl border border-[#e2dacb]/40">
                <Compass className="text-[#1e4620]" size={24} />
                <span className="text-sm font-bold text-gray-700">Traditional Kerala Lineage</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#e2dacb]/40">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
                alt="Ayurvedic Wellness Kerala"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Absolute badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#1e4620] text-[#fdfbf7] p-6 rounded-2xl shadow-xl border border-[#c59b27]/30 max-w-[200px] hidden sm:block">
              <p className="text-3xl font-bold font-serif text-[#c59b27]">25+</p>
              <p className="text-xs uppercase tracking-wider font-extrabold mt-1">Years of Healing Legacy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-20 bg-[#f4efe6]/40 border-t border-b border-[#e2dacb]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#c59b27]">
              Time-Tested Therapies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#1e4620]">
              Our Signature Ayurvedic Treatments
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-medium">
              We offer bespoke treatments customized for each patient after a thorough diagnosis of your physical and mental constitution (Doshas).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment) => (
              <div
                key={treatment.id}
                onClick={() => openBookingForTreatment(treatment.id)}
                className="bg-[#fdfbf7] rounded-3xl overflow-hidden shadow-md border border-[#e2dacb]/50 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row group cursor-pointer hover:border-[#c59b27]/40"
              >
                {/* Image */}
                <div className="md:w-2/5 relative h-48 md:h-auto min-h-[200px]">
                  <img
                    src={treatment.image}
                    alt={treatment.name.en}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback image URL if generated image is loading or missing
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=400&q=80"
                    }}
                  />
                </div>

                {/* Info */}
                <div className="p-6 md:w-3/5 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-serif text-[#1e4620] group-hover:text-[#c59b27] transition-colors">
                      {treatment.name.en}
                    </h3>
                    <p className="text-xs text-gray-400 font-semibold italic">{treatment.name.ml}</p>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      {treatment.description.en}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <p className="text-xs uppercase font-extrabold tracking-wider text-gray-500">Key Benefits:</p>
                    <ul className="grid grid-cols-1 gap-1.5 text-xs text-gray-600">
                      {treatment.benefits.en.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27] shrink-0"></span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-[#e2dacb]/40">
                    <button
                      onClick={() => openBookingForTreatment(treatment.id)}
                      className="text-[#1e4620] hover:text-[#c59b27] text-sm font-bold flex items-center gap-1.5 transition-colors group/btn"
                    >
                      Book Session
                      <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#c59b27]">
              Guest Experiences
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#1e4620]">
              Real Stories of Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f4efe6]/30 p-8 rounded-3xl border border-[#e2dacb]/40 relative space-y-4">
              <span className="text-5xl text-[#c59b27] font-serif absolute top-3 left-4 opacity-30">“</span>
              <p className="text-sm text-gray-600 leading-relaxed font-medium pt-4">
                "The 14-day spine care treatment at Haya Ayurvedics completely cured my chronic slip disc pain. The doctor was extremely knowledgeable and the daily Kizhi therapy worked wonders."
              </p>
              <div className="border-t border-[#e2dacb]/60 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1e4620] flex items-center justify-center text-[#fdfbf7] font-bold text-xs uppercase">
                  RS
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1e4620]">Rohan Sharma</h4>
                  <p className="text-[11px] text-gray-400 font-semibold">New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="bg-[#f4efe6]/30 p-8 rounded-3xl border border-[#e2dacb]/40 relative space-y-4">
              <span className="text-5xl text-[#c59b27] font-serif absolute top-3 left-4 opacity-30">“</span>
              <p className="text-sm text-gray-600 leading-relaxed font-medium pt-4">
                "Amazing experience! The location in Kollam is pristine and quiet. The Panchakarma detox program restored my energy, and the organic vegetarian cuisine was delicious."
              </p>
              <div className="border-t border-[#e2dacb]/60 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1e4620] flex items-center justify-center text-[#fdfbf7] font-bold text-xs uppercase">
                  SM
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1e4620]">Sarah Mueller</h4>
                  <p className="text-[11px] text-gray-400 font-semibold">Munich, Germany</p>
                </div>
              </div>
            </div>

            <div className="bg-[#f4efe6]/30 p-8 rounded-3xl border border-[#e2dacb]/40 relative space-y-4">
              <span className="text-5xl text-[#c59b27] font-serif absolute top-3 left-4 opacity-30">“</span>
              <p className="text-sm text-gray-600 leading-relaxed font-medium pt-4">
                "Consulted Dr. Madhavan for migraine issues. The customized Shirodhara plan along with herbs cured my 5-year-old migraine problem. Highly recommend Haya Ayurvedics."
              </p>
              <div className="border-t border-[#e2dacb]/60 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1e4620] flex items-center justify-center text-[#fdfbf7] font-bold text-xs uppercase">
                  AA
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1e4620]">Ali Al-Mansoori</h4>
                  <p className="text-[11px] text-gray-400 font-semibold">Abu Dhabi, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-20 bg-[#1e4620] text-[#fdfbf7] text-center border-t border-[#c59b27]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#c59b27_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <Heart size={44} className="text-[#c59b27] mx-auto animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-bold font-serif">Start Your Healing Journey Today</h2>
          <p className="text-base md:text-lg text-gray-200 font-medium max-w-xl mx-auto">
            Book an online video consultation or reserve a residential treatment plan at our sanctuary in Kerala.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-[#c59b27] hover:bg-[#c59b27]/90 text-black px-8 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 active:scale-95 text-base"
            >
              <Calendar size={18} />
              Schedule Appointment
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTreatmentId={selectedTreatmentId}
        initialPackageId={selectedPackageId}
      />
    </div>
  )
}
