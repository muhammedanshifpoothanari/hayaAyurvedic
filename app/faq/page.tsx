'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Do you provide residential accommodation at the hospital?',
      a: 'Yes. Haya Ayurvedics offers serene private cottages (Standard, Deluxe, and Premium) with attached treatment rooms, modern amenities, high-speed Wi-Fi, and beautiful forest/valley views.',
    },
    {
      q: 'What is the recommended duration for Panchakarma detox?',
      a: 'A standard complete Panchakarma purification cycle takes 7, 14, or 21 days depending on your medical background and the recommendation of our physicians during the initial consultation.',
    },
    {
      q: 'Are meals included in the packages?',
      a: 'Yes, all wellness packages are fully inclusive of organic Ayurvedic vegetarian meals. The meals are prepared fresh in our kitchen using locally sourced ingredients, tailored to balance your specific body constitution (Vata, Pitta, Kapha).',
    },
    {
      q: 'Do you assist with airport pickups for international guests?',
      a: 'Yes! We arrange direct cab pickup and drop-off services for our guests from Calicut International Airport (CCJ) and Kannur International Airport (CNN), which are the closest airports to our Kollam centre.',
    },
    {
      q: 'Can I submit my medical reports before booking?',
      a: 'Absolutely. We encourage patients to send their medical records, spine scans, or test reports beforehand. Our panel of doctors will review them free of charge and recommend the best therapeutic module.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#fdfbf7] flex flex-col text-gray-800">
      <Header />

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-12 md:py-16">
        <div className="bg-[#fdfbf7] rounded-3xl border border-[#e2dacb] p-8 md:p-12 shadow-sm text-left">
          
          <div className="flex items-center gap-4 mb-8 border-b border-[#e2dacb] pb-6">
            <div className="w-12 h-12 bg-[#1e4620]/10 text-[#1e4620] rounded-xl flex items-center justify-center">
              <HelpCircle size={28} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold font-serif text-[#1e4620]">
                Frequently Asked Questions
              </h1>
              <p className="text-xs text-gray-500 mt-1">
                Everything you need to know about treatments, stays, and travel to our Kerala facility.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div key={idx} className="border border-[#e2dacb]/60 rounded-2xl overflow-hidden bg-[#f4efe6]/20 hover:bg-[#f4efe6]/40 transition">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-base font-bold text-[#1e4620] focus:outline-none text-left"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} className="text-[#c59b27]" /> : <ChevronDown size={18} className="text-[#c59b27]" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-gray-600 leading-relaxed font-medium border-t border-[#e2dacb]/45 bg-[#fdfbf7]">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
