import React from 'react'
import { Activity, Droplets, ThermometerSnowflake } from 'lucide-react'

const services = [
  {
    icon: <ThermometerSnowflake size={24} />,
    title: 'Installation',
    desc: 'Professional installation ensuring optimum cooling performance.',
  },
  {
    icon: <Activity size={24} />,
    title: 'Repair',
    desc: 'Fast and reliable repairs by certified technicians.',
  },
  {
    icon: <Droplets size={24} />,
    title: 'Gas Refill',
    desc: 'Safe refrigerant top-ups for restoring maximum cooling.',
  },
]

export function Services() {
  return (
    <section className="px-m py-xxxl bg-primaryDark text-white">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-xxl items-center">
        <div className="w-full lg:w-1/3">
          <h2 className="text-h2 font-semibold mb-m">Expert Services</h2>
          <p className="text-bodyMedium text-border mb-xl">
            Keep your AC running smoothly with our range of maintenance and repair services. We
            offer quick turnaround and guaranteed satisfaction.
          </p>
          <button className="bg-white text-primaryDark px-lg py-s rounded-m font-semibold hover:bg-lightGrey transition-colors w-fit">
            Book Service
          </button>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col gap-lg">
          {services.map((svc, i) => (
            <div
              key={i}
              className="bg-primaryDarkAlt p-lg rounded-xl flex items-start sm:items-center gap-m border border-primaryDark hover:border-borderDark transition-colors"
            >
              <div className="bg-primary p-m rounded-m text-white flex-shrink-0">{svc.icon}</div>
              <div className="flex flex-col">
                <h4 className="text-h4 font-semibold mb-xs">{svc.title}</h4>
                <p className="text-bodyMedium text-border">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
