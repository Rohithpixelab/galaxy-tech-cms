import React from 'react'
import Button from '@/components/ui/Button'
import { ProductCard } from '@/components/ui/ProductCard'

const products = [
  {
    name: 'Daikin FTL 3-Star Non-Inverter Standard Split AC',
    priceRange: 'Rs 35000 - 45000',
    tonnages: ['1 Ton', '1.5 Ton', '2 Ton'],
  },
  {
    name: 'Daikin FTL 3-Star Non-Inverter Standard Split AC',
    priceRange: 'Rs 35000 - 45000',
    tonnages: ['1 Ton', '1.5 Ton', '2 Ton', '3 Ton'],
  },
  {
    name: 'Daikin FTL 3-Star Non-Inverter Standard Split AC',
    priceRange: 'Rs 35000 - 45000',
    tonnages: ['1 Ton', '1.5 Ton'],
  },
  {
    name: 'Daikin FTL 3-Star Non-Inverter Standard Split AC',
    priceRange: 'Rs 35000 - 45000',
    tonnages: ['1 Ton'],
  },
  {
    name: 'Daikin FTL 3-Star Non-Inverter Standard Split AC',
    priceRange: 'Rs 35000 - 45000',
    tonnages: ['1 Ton', '2 Ton', '3 Ton'],
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
              tonnages={product.tonnages}
            />
          </div>
        ))}
      </div>

      <Button variant="outline" size="sm">
        View all products
      </Button>
    </section>
  )
}
