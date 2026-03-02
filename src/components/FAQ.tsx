import React from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How often should I service my AC?',
    a: 'We recommend servicing your AC at least twice a year to maintain optimal performance, improve energy efficiency, and avoid unexpected breakdowns.',
  },
  {
    q: 'Do you offer installation services with a purchase?',
    a: 'Yes, we provide professional installation services with every AC purchase to ensure your system runs efficiently from day one.',
  },
  {
    q: 'What areas do you currently cover?',
    a: 'We cover the entire metropolitan area and selected suburbs. Please contact our support team to verify if your zip code is within our service radius.',
  },
  {
    q: 'Do your products come with a warranty?',
    a: 'Absolutely. All our premium AC units come with a comprehensive manufacturer warranty along with our own service guarantee.',
  },
]

export function FAQ() {
  return (
    <section className="px-m py-xxxl bg-lightGrey">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-h2 font-semibold text-text mb-xl text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-m">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-xl border border-border overflow-hidden group shadow-sm"
            >
              <summary className="flex items-center justify-between p-lg cursor-pointer list-none font-semibold text-bodyLarge text-text hover:text-primary transition-colors">
                {faq.q}
                <ChevronDown
                  className="text-textAlt group-open:rotate-180 transition-transform flex-shrink-0"
                  size={24}
                />
              </summary>
              <div className="px-lg pb-lg pt-0 text-textAlt text-bodyMedium">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
