import React from 'react'
import Image from 'next/image'

export interface ProductCardProps {
  name: string
  priceRange: string
  rating: string
  description: string
  imageUrl?: string
  className?: string
}

export function ProductCard({
  name,
  priceRange,
  rating,
  description,
  imageUrl,
  className = '',
}: ProductCardProps) {
  return (
    <div
      className={`flex flex-col w-[290px] justify-center items-start gap-s p-xs pb-s rounded-lg border-[0.5px] border-grey bg-white shrink-0 ${className}`}
    >
      <div className="w-full aspect-[4/3] bg-[#A9A9A9] rounded-m overflow-hidden shrink-0 relative flex justify-center items-center">
        {imageUrl ? (
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        ) : (
          <span className="text-white/60 text-sm font-medium">No Image</span>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col items-start w-full px-xs">
        <h3 className="text-h5 font-semibold text-primaryDarkAlt mb-1">{name}</h3>
        <p className="text-h5 font-semibold text-primaryDarkAlt mb-s">{priceRange}</p>

        <p className="text-h5 font-semibold text-textAlt mb-xs">{rating}</p>

        <p className="text-bodySmall text-textAlt leading-snug line-clamp-3">{description}</p>
      </div>
    </div>
  )
}
