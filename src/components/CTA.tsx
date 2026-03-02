import React from 'react'

export function CTA() {
  return (
    <section className="px-m py-xxxl bg-primarySurface">
      <div className="max-w-4xl mx-auto text-center bg-white p-xxxl rounded-xl shadow-lg border border-border">
        <h2 className="text-h2 font-semibold text-text mb-m">Ready to Upgrade Your Cooling?</h2>
        <p className="text-bodyMedium text-textAlt mb-xl max-w-2xl mx-auto leading-relaxed">
          Contact our sales team today for a free consultation and discover the perfect AC model
          that meets your requirements, space, and aesthetic preferences.
        </p>
        <button className="bg-primary text-white px-xl py-lg rounded-m font-semibold text-bodyLarge hover:bg-primaryDark transition-colors shadow-md hover:shadow-lg">
          Get a Free Consultation
        </button>
      </div>
    </section>
  )
}
