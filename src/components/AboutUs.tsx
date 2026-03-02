import React from 'react'

export function AboutUs() {
  return (
    <section className="px-m py-xxl bg-lightGrey">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-xxl">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full aspect-square bg-white rounded-xl flex items-center justify-center border border-border shadow-sm">
            <span className="text-textAlt text-bodyMedium font-semibold">
              [Premium Image Placeholder]
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-h2 font-semibold text-text mb-s">About Galaxy Technologies</h2>
          <p className="text-bodyMedium text-textAlt mb-lg">
            We are dedicated to providing state-of-the-art cooling solutions tailored to your unique
            needs. With years of expertise in the industry, our team ensures you get the most
            efficient, reliable, and premium products available. We focus on enhancing your comfort
            while ensuring peak energy efficiency.
          </p>
          <div className="grid grid-cols-2 gap-m bg-white p-lg rounded-xl border border-border">
            <div>
              <h4 className="text-h1 font-semibold text-primary mb-xs">10+</h4>
              <p className="text-bodySmall text-text font-semibold">Years Experience</p>
            </div>
            <div>
              <h4 className="text-h1 font-semibold text-primary mb-xs">5k+</h4>
              <p className="text-bodySmall text-text font-semibold">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
