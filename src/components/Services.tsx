import React from 'react'
import Image from 'next/image'

const services = [
  {
    icon: '/media/AC%20Installation%20icon.png',
    title: 'AC Installation',
    desc: 'Professional installation for optimal performance.',
  },
  {
    icon: '/media/AC%20Repair%20icon.png',
    title: 'AC Repair',
    desc: 'Quick troubleshooting and dependable repairs.',
  },
  {
    icon: '/media/Gas%20Refilling%20icon.png',
    title: 'Gas Refilling',
    desc: 'Accurate refrigerant charging for efficient cooling.',
  },
  {
    icon: '/media/Annual%20Maintenance%20Contracts%20icon.png',
    title: 'Annual Maintenance Contracts',
    desc: 'Regular maintenance to prevent issues.',
  },
]

export function Services() {
  return (
    <section className="flex flex-col items-center justify-center py-xxl px-s md:px-xxxl gap-xl border-t-[0.5px] border-grey bg-white w-full">
      {/* Heading Section */}
      <div className="flex flex-col items-center self-stretch w-full max-w-container mx-auto gap-4 text-center">
        <h2 className="text-h3 font-semibold text-primaryDarkAlt">
          AC Sales & Service in Kochi — Complete Support
        </h2>
        <p className="text-bodyMedium text-textAlt max-w-[800px] leading-relaxed">
          From installation to repairs and preventive maintenance, Galaxy Technologies provides
          reliable AC services to keep your cooling systems running efficiently year-round.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg w-full max-w-container mx-auto mt-m lg:mt-lg px-m">
        {services.map((svc, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            {/* Icon Circle */}
            <div className="w-[80px] h-[80px] bg-primarySurface rounded-full flex justify-center items-center mb-m shrink-0">
              <Image
                src={svc.icon}
                width={68}
                height={68}
                alt={svc.title}
                className="object-contain"
              />
            </div>
            {/* Text */}
            <h4 className="text-h5 font-semibold text-primaryDarkAlt mb-xs">{svc.title}</h4>
            <p className="text-bodySmall text-textAlt leading-relaxed">{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
