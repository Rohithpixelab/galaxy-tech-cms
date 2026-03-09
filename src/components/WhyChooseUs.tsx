import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'

const reasons = [
  'Daikin authorised dealer with genuine products.',
  'Experienced and certified service technicians.',
  'Reliable AC service across Kochi.',
  'Transparent pricing and honest recommendations.',
  'Quick response and customer-focused support.',
  'Complete solutions from sales to maintenance.',
]

export function WhyChooseUs() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center py-xxl px-s md:px-xxxl gap-xxl self-stretch bg-white w-full">
      {/* Left side text and list */}
      <div className="flex flex-col items-start gap-xs w-full lg:w-1/2 max-w-lg">
        <h2 className="text-h3 md:text-h2 font-semibold text-primaryDarkAlt mb-s">
          Why Choose Galaxy Technologies
        </h2>
        <ul className="flex flex-col items-start gap-s w-full">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-start gap-xs w-full">
              <Check className="text-primary shrink-0 mt-1" size={24} />
              <span className="text-bodyMedium text-textAlt font-regular leading-relaxed">
                {reason}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div className="relative w-full aspect-[4/3] max-w-[600px] rounded-lg overflow-hidden shrink-0">
          <Image
            src="/media/modern_indian_living_room_ac.png"
            alt="Daikin AC in modern Indian living room"
            fill
            className="object-cover object-center rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
