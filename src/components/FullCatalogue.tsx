import React from 'react'
import Button from '@/components/ui/Button'
import { ProductCard } from '@/components/ui/ProductCard'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Media, ProductModel } from '@/payload-types'

function getPriceRange(variants: ProductModel['variants']) {
  if (!variants || variants.length === 0) return 'Price on request'
  const prices = variants.map((v) => v.price).filter((p): p is number => typeof p === 'number')
  if (prices.length === 0) return 'Price on request'
  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)
  if (minPrice === maxPrice) {
    return `Rs ${minPrice.toLocaleString('en-IN')}`
  }
  return `Rs ${minPrice.toLocaleString('en-IN')} - ${maxPrice.toLocaleString('en-IN')}`
}

function getTonnages(variants: ProductModel['variants']) {
  if (!variants || variants.length === 0) return []
  const capacities = variants
    .map((v) => v.capacity)
    .filter((c): c is number => typeof c === 'number')
  const uniqueCapacities = Array.from(new Set(capacities)).sort((a, b) => a - b)
  return uniqueCapacities.map((c) => `${c} Ton`)
}

export async function FullCatalogue() {
  const payload = await getPayload({ config: configPromise })

  // Fetch categories first to respect the order
  const { docs: fetchedCategories } = await payload.find({
    collection: 'categories',
    limit: 10,
    sort: 'createdAt',
  })

  // Define the required order
  const order = ['Split AC', 'Cassette AC', 'Ductable Systems', 'VRV / VRF', 'Tower AC']

  // Sort categories based on the defined order
  const categories = fetchedCategories.sort((a, b) => {
    const normalize = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '')
    const indexA = order.findIndex((o) => normalize(o) === normalize(a.name))
    const indexB = order.findIndex((o) => normalize(o) === normalize(b.name))

    if (indexA === -1) return 1
    if (indexB === -1) return -1
    return indexA - indexB
  })

  // Pre-fetch all products
  const { docs: allProducts } = await payload.find({
    collection: 'product-models',
    limit: 100, // adjust as needed
  })

  // Filter out categories that have no products
  const categoriesWithProducts = categories.map((cat) => {
    const categoryProducts = allProducts.filter((product) => {
      const productCat = product.category
      if (!productCat) return false
      if (typeof productCat === 'number') {
        return productCat === cat.id
      }
      return productCat.id === cat.id
    })

    return {
      ...cat,
      products: categoryProducts,
    }
  })

  return (
    <div className="flex flex-col w-full bg-white gap-m pb-xxxl">
      {categoriesWithProducts.map((category, catIndex) => (
        <React.Fragment key={category.id}>
          <section className="flex flex-col items-center justify-center pt-xl px-s md:px-xxxl gap-m w-full">
            <div className="flex flex-col items-start self-stretch w-full max-w-container mx-auto">
              <h2 className="text-h4 font-semibold text-primaryDarkAlt">
                {category.name.toLowerCase().includes('split')
                  ? 'Split AC Models'
                  : category.name.toLowerCase().includes('cassette')
                    ? 'Cassette AC Models'
                    : category.name.toLowerCase().includes('duct')
                      ? 'Ductable Systems'
                      : category.name.toLowerCase().includes('vrv') ||
                          category.name.toLowerCase().includes('vrf')
                        ? 'VRV / VRF Systems'
                        : category.name.toLowerCase().includes('tower')
                          ? 'Tower AC Models'
                          : category.name}
              </h2>
            </div>

            {/* Products Grid */}
            {category.products.length === 0 ? (
              <div className="w-full text-center py-lg bg-lightGrey rounded-lg max-w-container mx-auto">
                <p className="text-bodyMedium text-textAlt">This category is empty.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px] w-full max-w-container mx-auto">
                {category.products.map((product) => {
                  const priceRange = getPriceRange(product.variants)
                  const tonnages = getTonnages(product.variants)

                  let imageUrl: string | undefined
                  if (product.images && product.images.length > 0) {
                    const firstImage = product.images[0]
                    const media =
                      typeof firstImage === 'object' && firstImage !== null
                        ? (firstImage as Media)
                        : undefined
                    if (media?.filename) {
                      imageUrl = `https://hnoiauivogwlrupoxztc.supabase.co/storage/v1/object/public/media/${media.filename}`
                    }
                  }

                  return (
                    <ProductCard
                      key={product.id}
                      name={product.name || product.series}
                      priceRange={priceRange}
                      tonnages={tonnages}
                      imageUrl={imageUrl}
                    />
                  )
                })}
              </div>
            )}

            <Button
              variant="outline"
              size="sm"
              className="mt-s px-xl rounded-full border-primary text-primary hover:bg-primarySurface"
            >
              View All{' '}
              {category.name.toLowerCase().includes('split')
                ? 'Split AC Models'
                : category.name.toLowerCase().includes('cassette')
                  ? 'Cassette AC Models'
                  : category.name.toLowerCase().includes('duct')
                    ? 'Ductable Systems'
                    : category.name.toLowerCase().includes('vrv') ||
                        category.name.toLowerCase().includes('vrf')
                      ? 'VRV / VRF Systems'
                      : category.name.toLowerCase().includes('tower')
                        ? 'Tower AC Models'
                        : category.name}
            </Button>
          </section>

          {/* Divider between categories (except the last one) */}
          {catIndex < categoriesWithProducts.length - 1 && (
            <div className="w-full max-w-container mx-auto h-[1px] bg-border mt-xl"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
