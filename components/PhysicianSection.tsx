'use client'

interface PhysicianSectionProps {
  imageSrc?: string
}

export default function PhysicianSection({ imageSrc = '/doctors/dr-nimmy.png' }: PhysicianSectionProps) {
  return (
    <section id="doctors" className="w-full bg-[#fdfbf7] relative">
      <div className="max-w-6xl mx-auto pl-0 pr-3 sm:pr-6 md:pr-8 pt-3 sm:pt-6 md:pt-8 flex items-end">
        {/* Left: Doctor Photo / Placeholder - flush to left edge, resting on bottom line */}
        <div className="w-[38%] sm:w-[35%] md:w-[32%] lg:w-[28%] shrink-0 flex items-end justify-start self-end">
          <div className="w-full flex items-end justify-start">
            <img
              src={imageSrc}
              alt="Dr. Nimmy. R. S - Chief physician & Managing Director"
              className="w-full h-auto max-h-[290px] sm:max-h-[380px] md:max-h-[460px] lg:max-h-[520px] object-contain object-bottom block select-none pointer-events-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/doctors/nimmy.jpg'
              }}
            />
          </div>
        </div>

        {/* Right: Doctor Bio Information */}
        <div className="flex-1 min-w-0 pl-2.5 sm:pl-5 md:pl-8 pb-3 sm:pb-5 md:pb-8 flex flex-col justify-center">
          <div>
            <h2 className="text-[17px] sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1e4620] tracking-tight leading-tight font-sans">
              Dr. Nimmy. R. S
            </h2>
            <p className="text-[11.5px] sm:text-xs md:text-sm lg:text-base font-semibold text-[#1e4620] mt-0.5 sm:mt-1">
              Cheif physician &amp; Managing Director
            </p>
          </div>

          <div className="space-y-1.5 sm:space-y-2.5 md:space-y-3.5 text-[9.5px] sm:text-[11px] md:text-xs lg:text-[13.5px] text-[#222222] leading-[1.32] sm:leading-[1.4] font-normal pt-1.5 sm:pt-2.5">
            <p>
              Dr. Nimmy R. S is an Ayurvedic practitioner with over 12 years of experience in clinical care, Panchakarma, telemedicine, and healthcare management. She graduated from Amrita Ayurveda Medical College, Vallikkavu, Kollam**, and has worked with reputed institutions including Dhathri Ayurveda, Kottakkal Arya Vaidya Sala, Valiyath Institute of Medical Sciences, and Al Arjoon Ayurveda &amp; Hijama Centre.
            </p>
            <p>
              She serves as the Chief Physician and Managing Director of Haya Ayurvedics, where she combines her clinical expertise and healthcare management experience to deliver personalized, authentic, and patient-focused Ayurvedic care
            </p>
            <p>
              Her approach focuses on understanding each patient&apos;s individual needs and integrating **traditional Ayurvedic principles with a practical, patient-centered approach to wellness
            </p>
          </div>
        </div>
      </div>

      {/* Solid dark green bottom border line exactly as in reference */}
      <div className="w-full h-[3px] bg-[#1e4620]" />
    </section>
  )
}
