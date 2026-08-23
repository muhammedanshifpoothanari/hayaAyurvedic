'use client'

import { Mail, Phone, MapPin, Award, Shield, CheckCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#122b14] text-[#fdfbf7] border-t border-[#1e4620]/60 pt-16 pb-24 lg:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 text-left">
          
          {/* Brand Info */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#c59b27] flex items-center justify-center text-[#122b14] font-bold">
                HA
              </div>
              <span className="text-lg font-bold font-serif tracking-wide text-white">
                HAYA AYURVEDICS
              </span>
            </div>
            <p className="text-sm text-gray-300 font-medium leading-relaxed max-w-xs mb-6">
              Nestled in the lush hills of Wayanad, Kerala, we provide authentic Ayurvedic healthcare programs. Dedicated to restoring natural vitality and cellular health through holistic Panchakarma therapies and custom physician consultations at Haya Ayurvedics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-[#c59b27]/30 pb-2 inline-block font-serif">
              Healing Programs
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#treatments" className="hover:text-[#c59b27] transition">Panchakarma Detox</a></li>
              <li><a href="#treatments" className="hover:text-[#c59b27] transition">Postnatal Care</a></li>
              <li><a href="#treatments" className="hover:text-[#c59b27] transition">Psoriasis Treatment</a></li>
              <li><a href="#treatments" className="hover:text-[#c59b27] transition">Varicose Vein Treatment</a></li>
              <li><a href="#treatments" className="hover:text-[#c59b27] transition">Post-Stroke Care</a></li>
            </ul>
          </div>

          {/* Hospital Hours */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-[#c59b27]/30 pb-2 inline-block font-serif">
              Consultation Hours
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Saturday:</span>
                <span className="font-semibold text-[#c59b27]">8:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday (Emergency Only):</span>
                <span className="font-semibold text-gray-400">9:00 AM - 1:00 PM</span>
              </li>
              <li className="pt-2 border-t border-gray-700/50">
                <span className="block text-xs text-gray-400">Residential In-Patient services available 24/7.</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-[#c59b27]/30 pb-2 inline-block font-serif">
              Reach Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="text-[#c59b27] shrink-0 mt-0.5" />
                <span>
                  Haya Hills, P.O. Kalpetta,<br />
                  Wayanad, Kerala - 673121, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#c59b27] shrink-0" />
                <a href="tel:+919961400633" className="hover:text-[#c59b27] transition">+91 9961400633</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#c59b27] shrink-0" />
                <a href="mailto:info@hayaayurvedics.com" className="hover:text-[#c59b27] transition">info@hayaayurvedics.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Accreditations */}
        <div className="border-t border-gray-800/80 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Award size={16} className="text-[#c59b27]" />
              <span>Ayush Shield Certification</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} Haya Ayurvedic Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
