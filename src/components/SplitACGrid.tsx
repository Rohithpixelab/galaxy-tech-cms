import React from 'react'
import Button from '@/components/ui/Button'
import { ProductCard } from '@/components/ui/ProductCard'

const products = [
  {
    name: 'JTKJ Waizu Series',
    priceRange: 'Rs 35000 - 45000',
    rating: '5 Star',
    description: 'Quiet, energy-efficient AC for homes and offices. Quiet, energy-efficient...',
  },
  {
    name: 'JTKJ Waizu Series',
    priceRange: 'Rs 35000 - 45000',
    rating: '5 Star',
    description: 'Quiet, energy-efficient AC for homes and offices. Quiet, energy-efficient...',
  },
  {
    name: 'JTKJ Waizu Series',
    priceRange: 'Rs 35000 - 45000',
    rating: '5 Star',
    description: 'Quiet, energy-efficient AC for homes and offices. Quiet, energy-efficient...',
  },
  {
    name: 'JTKJ Waizu Series',
    priceRange: 'Rs 35000 - 45000',
    rating: '5 Star',
    description: 'Quiet, energy-efficient AC for homes and offices. Quiet, energy-efficient...',
  },
]

export function SplitACGrid() {
  return (
    <section
      id="products"
      className="flex flex-col items-center justify-center py-xxl px-s md:px-xxxl gap-xl bg-lightGrey w-full"
    >
      <div className="flex flex-col items-start self-stretch w-full max-w-container mx-auto gap-4">
        <h2 className="text-h4 font-semibold text-primaryDarkAlt">
          Popular Daikin Split AC Models
        </h2>
        <p className="text-bodyMedium text-textAlt max-w-[800px] leading-relaxed">
          Discover energy-efficient Daikin split air conditioners designed to deliver powerful
          cooling while reducing electricity consumption — perfect for homes and offices in
          Kochi&apos;s climate.
        </p>
      </div>

      {/* Horizontal scrolling grid for products */}
      <div className="flex flex-row overflow-x-auto gap-[24px] w-full max-w-container mx-auto pb-4 snap-x hide-scrollbar">
        {products.map((product, index) => (
          <div key={index} className="snap-start shrink-0">
            <ProductCard
              name={product.name}
              priceRange={product.priceRange}
              rating={product.rating}
              description={product.description}
            />
          </div>
        ))}
      </div>

      <Button variant="outline" size="md">
        View all products
      </Button>
    </section>
  )
}
