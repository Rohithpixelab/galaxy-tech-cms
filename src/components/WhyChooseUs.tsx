import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const reasons = [
  'Certified & Experienced Technicians',
  'Premium Quality AC Units',
  '24/7 Dedicated Customer Support',
  'Transparent & Fixed Pricing',
  'Fast & Reliable Response Time',
  '100% Satisfaction Guarantee',
]

export function WhyChooseUs() {
  return (
    <section className="px-m py-xxxl bg-white border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-h2 font-semibold text-text mb-xl">Why Choose Galaxy Technologies?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg text-left">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center gap-m bg-lightGrey p-lg rounded-xl border border-border"
            >
              <CheckCircle2 className="text-primary flex-shrink-0" size={28} />
              <span className="text-bodyMedium text-text font-semibold">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
