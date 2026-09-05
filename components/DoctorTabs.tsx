'use client'

import { doctors } from '@/data/ayurvedaData'

interface DoctorTabsProps {
  activeId: string
  onSelect: (id: string) => void
}

export default function DoctorTabs({ activeId, onSelect }: DoctorTabsProps) {
  return (
    <div className="flex gap-6 md:gap-10 overflow-x-auto scroll-smooth justify-start md:justify-center items-start pb-4 hide-scrollbar px-2">
      {doctors.map((doctor) => {
        const isActive = doctor.id === activeId
        return (
          <button
            key={doctor.id}
            onClick={() => onSelect(doctor.id)}
            className="flex flex-col items-center gap-2 shrink-0 group focus:outline-none"
          >
            {/* Circular image with gradient ring when active */}
            <div
              className={`p-[3px] rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-br from-[#c59b27] to-[#1e4620] shadow-lg scale-105'
                  : 'bg-[#e2dacb]/60 group-hover:bg-gradient-to-br group-hover:from-[#c59b27]/60 group-hover:to-[#1e4620]/60'
              }`}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-white">
                <img
                  src={doctor.image}
                  alt={doctor.name.en}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'
                  }}
                />
              </div>
            </div>

            {/* Name label */}
            <span
              className={`text-xs md:text-sm font-semibold text-center whitespace-nowrap transition-colors duration-200 ${
                isActive ? 'text-[#1e4620]' : 'text-gray-500 group-hover:text-[#1e4620]'
              }`}
            >
              {doctor.name.en}
            </span>
            {/* Qualification badge */}
            {doctor.qualification && (
              <span className="text-[10px] font-bold text-[#c59b27] uppercase tracking-wider">
                {doctor.qualification}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
