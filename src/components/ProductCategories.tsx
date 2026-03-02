import React from 'react'
import { Wind, Wrench, ShieldCheck } from 'lucide-react'

const categories = [
  {
    title: 'Split ACs',
    description: 'Energy-efficient and silent cooling solutions for any room.',
    icon: <Wind size={32} className="text-primary" />,
  },
  {
    title: 'AC Maintenance',
    description: 'Expert servicing to keep your units running at peak performance.',
    icon: <Wrench size={32} className="text-primary" />,
  },
  {
    title: 'Annual Contracts',
    description: 'Comprehensive AMC plans for worry-free cooling year-round.',
    icon: <ShieldCheck size={32} className="text-primary" />,
  },
]

export function ProductCategories() {
  return (
    <section className="px-m py-xxl bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-xl">
          <h2 className="text-h3 md:text-h2 font-semibold text-text mb-xs">Our Offerings</h2>
          <p className="text-bodyMedium text-textAlt">
            Everything you need for perfect climate control.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-lightGrey p-xl rounded-lg border border-border hover:border-primary transition-colors flex flex-col items-center text-center group"
            >
              <div className="bg-white p-m rounded-m mb-m border border-border group-hover:border-primary transition-colors">
                {category.icon}
              </div>
              <h3 className="text-h4 font-semibold text-text mb-s">{category.title}</h3>
              <p className="text-bodySmall text-textAlt">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
