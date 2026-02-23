import type { CollectionConfig } from 'payload'
import { formatSlug } from '../slug'

export const ProductModels: CollectionConfig = {
  slug: 'product-models',
  labels: {
    singular: 'Product',
    plural: 'Products',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'brand',
      type: 'relationship',
      relationTo: 'brands',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'variants',
      type: 'array',
      fields: [
        {
          name: 'variantName',
          type: 'text',
        },
        {
          name: 'minPrice',
          type: 'number',
        },
        {
          name: 'maxPrice',
          type: 'number',
        },
      ],
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      hooks: {
        beforeValidate: [({ data }) => formatSlug(data?.name, 'model')],
      },
    },
  ],
}
