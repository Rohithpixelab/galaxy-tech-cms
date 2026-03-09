import React from 'react'
import Image from 'next/image'

export interface ProductCardProps {
  name: string
  priceRange: string
  imageUrl?: string
  tonnages?: string[]
  className?: string
}

export function ProductCard({
  name,
  priceRange,
  imageUrl,
  tonnages,
  className = '',
}: ProductCardProps) {
  // Handle tonnages display logic: max 4 items, else show 2 + "X more"
  const maxVisibleTonnages = 4
  let displayTonnages = tonnages || []
  let extraCount = 0

  if (displayTonnages.length > maxVisibleTonnages) {
    displayTonnages = displayTonnages.slice(0, 2)
    extraCount = (tonnages || []).length - 2
  }

  return (
    <div
      className={`group flex flex-col w-full max-w-[262px] mx-auto justify-center items-end rounded-[20px] border-[0.5px] border-border bg-white overflow-hidden transition-shadow duration-300 hover:shadow-md ${className}`}
    >
      <div className="w-full aspect-[4/3] bg-[#A9A9A9] rounded-t-lg overflow-hidden shrink-0 relative flex justify-center items-center">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="text-white/60 text-sm font-medium">No Image</span>
        )}
      </div>

      {/* Product Details (Text Box) */}
      <div className="flex flex-col flex-1 justify-center items-end self-stretch p-s gap-xs">
        {/* Heading */}
        <h3 className="text-primaryDarkAlt font-poppins text-h5 font-semibold text-left">{name}</h3>

        {/* Pricing */}
        <p className="text-textAlt font-poppins text-bodySmall font-regular text-left">
          {priceRange}
        </p>

        {/* Tonnage chips */}
        {tonnages && tonnages.length > 0 && (
          <div className="flex flex-row flex-wrap items-center gap-[6px] w-full pt-1">
            {displayTonnages.map((tonnage, index) => (
              <div
                key={index}
                className="flex py-[4px] px-xs justify-center items-center gap-[10px] rounded-xxl border-[0.25px] border-borderDark bg-primarySurface"
              >
                <span className="overflow-hidden text-ellipsis whitespace-nowrap text-primaryDark font-inter text-bodyExtraSmall font-regular">
                  {tonnage}
                </span>
              </div>
            ))}
            {extraCount > 0 && (
              <div className="flex py-[4px] px-xs justify-center items-center gap-[10px] rounded-xxl border-[0.25px] border-borderDark bg-primarySurface">
                <span className="overflow-hidden text-ellipsis whitespace-nowrap text-primaryDark font-inter text-bodyExtraSmall font-regular">
                  +{extraCount}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
