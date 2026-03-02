import React from 'react'
import Image from 'next/image'

export function CTA() {
  return (
    <section className="relative flex flex-col items-center justify-center py-xxl px-s md:px-xxxl gap-m self-stretch min-h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/media/dark_green_living_room_ac.png"
        alt="Air Conditioner Service"
        fill
        className="object-cover z-0"
        quality={90}
      />

      {/* Black Opaque Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-[800px] gap-m mt-2">
        <h2 className="text-h3 md:text-h2 font-semibold text-white leading-tight">
          Need AC Installation or Service Today?
        </h2>
        <p className="text-bodyMedium font-regular text-white/90 leading-relaxed max-w-[700px]">
          Contact our team for expert assistance, free consultation, and fast service support.
        </p>

        {/* Buttons */}
        <div className="flex flex-row items-center gap-4 mt-2">
          <button className="px-6 py-3 rounded-full border border-white bg-transparent text-white font-semibold hover:bg-white/10 transition-colors">
            View models
          </button>
          <button className="px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-primarySurface transition-colors">
            Call us now
          </button>
        </div>
      </div>
    </section>
  )
}
