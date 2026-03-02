import React from 'react'
import { ArrowRight } from 'lucide-react'

const products = [
  { name: 'Galaxy Whisper 1.5T', price: '$499', efficiency: '5 Star' },
  { name: 'Galaxy Arctic 2.0T', price: '$649', efficiency: '4 Star' },
  { name: 'Galaxy Breeze 1.0T', price: '$399', efficiency: '5 Star' },
  { name: 'Galaxy Pro 1.5T', price: '$549', efficiency: '5 Star' },
]

export function SplitACGrid() {
  return (
    <section className="px-m py-xxxl bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-xl border-b border-border pb-m gap-s">
          <div>
            <h2 className="text-h2 font-semibold text-text mb-xs">Premium Split ACs</h2>
            <p className="text-bodyMedium text-textAlt">
              Discover our highest-rated cooling systems.
            </p>
          </div>
          <button className="text-primary font-semibold hover:text-primaryDark transition-colors flex items-center gap-xs">
            View All Models <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-lg p-lg border border-border rounded-xl hover:shadow-sm transition-all hover:border-primary group bg-white"
            >
              <div className="w-full sm:w-1/2 bg-lightGrey aspect-video sm:aspect-square rounded-m flex items-center justify-center border border-border group-hover:bg-primarySurface transition-colors">
                <span className="text-textAlt text-bodySmall font-semibold">[Product Image]</span>
              </div>
              <div className="w-full sm:w-1/2 flex flex-col justify-center">
                <span className="text-bodySmall text-primary font-semibold mb-xs uppercase tracking-widest">
                  {product.efficiency}
                </span>
                <h3 className="text-h3 font-semibold text-text mb-s">{product.name}</h3>
                <p className="text-h4 font-regular text-textAlt mb-lg">{product.price}</p>
                <button className="bg-white border text-primary border-primary px-lg py-s rounded-m hover:bg-primarySurface hover:border-primaryDark transition-colors text-bodySmall font-semibold w-fit">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
