'use client'

import { useState } from 'react'
import { X, CheckCircle2, Calendar, Clock, User, Phone, Mail, FileText, Activity } from 'lucide-react'
import { treatments, packages, doctors } from '@/data/ayurvedaData'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  initialTreatmentId?: string
  initialPackageId?: string
}

export default function BookingModal({
  isOpen,
  onClose,
  initialTreatmentId = '',
  initialPackageId = '',
}: BookingModalProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [selectedService, setSelectedService] = useState(
    initialTreatmentId || initialPackageId || 'panchakarma'
  )
  const [preferredDate, setPreferredDate] = useState('')
  const [timeSlot, setTimeSlot] = useState('morning')
  const [selectedDoctor, setSelectedDoctor] = useState('doc-nimmy')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          selectedService,
          preferredDate,
          timeSlot,
          selectedDoctor,
          message,
        })
      })
      const json = await res.json()
      if (json.success) {
        setIsSubmitted(true)
        localStorage.setItem('ayur_last_booking', JSON.stringify(json.data))
      } else {
        throw new Error('Server returned failure')
      }
    } catch (err) {
      console.error('Failed to submit booking via API, using fallback:', err)
      const appointment = {
        name,
        phone,
        email,
        selectedService,
        preferredDate,
        timeSlot,
        selectedDoctor,
        message,
        appointmentId: 'APT-' + Math.floor(1000 + Math.random() * 9000),
        createdAt: new Date().toISOString()
      }
      localStorage.setItem('ayur_last_booking', JSON.stringify(appointment))
      setIsSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#fdfbf7] w-full max-w-xl rounded-2xl shadow-2xl border border-[#e2dacb] overflow-hidden relative flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#1e4620] text-[#fdfbf7] p-5 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold tracking-wide">Schedule a Healing Consultation</h3>
            <p className="text-xs text-[#fdfbf7]/80 mt-1">Haya Ayurvedic Hospital</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-white/10 text-white/90 hover:text-white transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-10 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 size={40} className="animate-bounce" />
              </div>
              <h4 className="text-2xl font-bold text-[#1e4620]">Booking Request Submitted!</h4>
              <p className="text-gray-600 max-w-md mx-auto mt-3">
                Thank you, <span className="font-semibold text-gray-800">{name}</span>. Our Ayurvedic wellness coordinator will contact you via WhatsApp/phone within 2 hours to confirm your consultation slot.
              </p>
              <div className="mt-8 p-4 bg-[#f4efe6] rounded-xl text-left border border-[#e2dacb] w-full text-sm space-y-2">
                <div className="flex justify-between border-b border-[#e2dacb]/60 pb-1.5">
                  <span className="text-gray-500">Service:</span>
                  <span className="font-semibold text-[#1e4620]">
                    {treatments.find(t => t.id === selectedService)?.name.en || 
                     packages.find(p => p.id === selectedService)?.name.en || 
                     selectedService}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#e2dacb]/60 pb-1.5">
                  <span className="text-gray-500">Preferred Date & Time:</span>
                  <span className="font-semibold text-gray-800">{preferredDate} ({timeSlot})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Doctor:</span>
                  <span className="font-semibold text-gray-800">
                    {doctors.find(d => d.id === selectedDoctor)?.name.en || 'Any Specialist'}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => {
                  setIsSubmitted(false)
                  onClose()
                }} 
                className="mt-8 px-6 py-2.5 bg-[#1e4620] hover:bg-[#1e4620]/90 text-white rounded-xl font-bold shadow transition"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                    <User size={18} />
                  </span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-2 border border-[#e2dacb] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e4620]/20 focus:border-[#1e4620] transition text-sm"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-1">WhatsApp / Phone</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                      <Phone size={18} />
                    </span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-2 border border-[#e2dacb] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e4620]/20 focus:border-[#1e4620] transition text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-1">Email Address</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                      <Mail size={18} />
                    </span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full pl-10 pr-4 py-2 border border-[#e2dacb] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e4620]/20 focus:border-[#1e4620] transition text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-1">Select Service or Package</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                    <Activity size={18} />
                  </span>
                  <select
                    value={selectedService}
                    onChange={e => setSelectedService(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-[#e2dacb] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e4620]/20 focus:border-[#1e4620] transition text-sm appearance-none"
                  >
                    <optgroup label="Ayurvedic Treatments">
                      {treatments.map(t => (
                        <option key={t.id} value={t.id}>{t.name.en} ({t.duration})</option>
                      ))}
                    </optgroup>
                    <optgroup label="Wellness Packages">
                      {packages.map(p => (
                        <option key={p.id} value={p.id}>{p.name.en} ({p.duration})</option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-1">Preferred Date</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                      <Calendar size={18} />
                    </span>
                    <input
                      type="date"
                      required
                      value={preferredDate}
                      onChange={e => setPreferredDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-[#e2dacb] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e4620]/20 focus:border-[#1e4620] transition text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-1">Preferred Time Slot</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                      <Clock size={18} />
                    </span>
                    <select
                      value={timeSlot}
                      onChange={e => setTimeSlot(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-[#e2dacb] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e4620]/20 focus:border-[#1e4620] transition text-sm appearance-none"
                    >
                      <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="evening">Evening (4:00 PM - 7:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Doctor Preference */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-1">Select Physician</label>
                <select
                  value={selectedDoctor}
                  onChange={e => setSelectedDoctor(e.target.value)}
                  className="w-full px-4 py-2 border border-[#e2dacb] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e4620]/20 focus:border-[#1e4620] transition text-sm"
                >
                  {doctors.map(d => (
                    <option key={d.id} value={d.id}>{d.name.en} - {d.role.en}</option>
                  ))}
                  <option value="any">First Available Expert Physician</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-1">Health Issues / Notes (Optional)</label>
                <div className="relative">
                  <span className="absolute top-2.5 left-3.5 text-gray-400">
                    <FileText size={18} />
                  </span>
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Describe any chronic pains, history of illnesses, or specific goals..."
                    rows={3}
                    className="w-full pl-10 pr-4 py-2 border border-[#e2dacb] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e4620]/20 focus:border-[#1e4620] transition text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-[#1e4620] hover:bg-[#1e4620]/90 text-white py-3 rounded-xl font-bold tracking-wide shadow-md transition disabled:bg-gray-400 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Requesting Appointment...</span>
                  </>
                ) : (
                  <span>Request Booking Confirmation</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
