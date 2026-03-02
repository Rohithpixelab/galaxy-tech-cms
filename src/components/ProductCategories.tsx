import React from 'react'
import Image from 'next/image'

const categories = [
  {
    title: 'Split AC',
    description: 'Quiet, energy-efficient AC for homes and offices.',
    image: '/media/split-ac.png',
  },
  {
    title: 'Cassette AC',
    description: 'Uniform cooling for commercial spaces.',
    image: '/media/cassette-ac.png',
  },
  {
    title: 'Ductable Systems',
    description: 'Seamless centralised comfort.',
    image: '/media/ductable-ac.png',
  },
  {
    title: 'VRV / VRF',
    description: 'Smart cooling for large buildings.',
    image: '/media/vrv-vrf.png',
  },
  {
    title: 'Tower AC',
    description: 'Powerful cooling for large areas.',
    image: '/media/tower-ac.png',
  },
]

export function ProductCategories() {
  return (
    <section id="products" className="bg-white py-xxl px-s md:px-xxxl">
      <div className="max-w-container mx-auto flex flex-col items-center gap-xl text-center">
        {/* Header */}
        <div className="max-w-[830px] flex flex-col gap-xs">
          <h2 className="text-h3 md:text-h2 font-semibold text-primaryDarkAlt">
            Explore Our Range of Daikin Air Conditioning Solutions
          </h2>
          <p className="text-bodySmall md:text-bodyMedium text-textAlt">
            We offer a complete selection of Daikin air conditioners in Kochi, designed for comfort,
            efficiency, and long-term reliability across residential and commercial environments.
          </p>
        </div>

        {/* Categories Grid - Adjusted to 5 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-xl w-full">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-start text-left gap-s group">
              {/* Image Box */}
              <div className="relative aspect-square w-full bg-white rounded-lg overflow-hidden border border-border group-hover:border-grey transition-colors">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-xs">
                <h3 className="text-h5 font-semibold text-primaryDarkAlt leading-tight">
                  {category.title}
                </h3>
                <p className="text-bodySmall text-textAlt leading-snug">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
