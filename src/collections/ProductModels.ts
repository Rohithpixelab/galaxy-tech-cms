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
      name: 'series',
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
      name: 'technology',
      type: 'select',
      options: [
        { label: 'Inverter', value: 'inverter' },
        { label: 'Non-Inverter', value: 'non-inverter' },
      ],
    },

    {
      name: 'description',
      type: 'textarea',
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
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
    },

    {
      name: 'variants',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'capacity',
          label: 'Capacity (Ton)',
          type: 'select',
          options: [
            { label: '1 Ton', value: '1-ton' },
            { label: '1.5 Ton', value: '1.5-ton' },
            { label: '2 Ton', value: '2-ton' },
          ],
        },

        {
          name: 'modelNumber',
          type: 'text',
        },

        {
          name: 'price',
          type: 'number',
          required: true,
        },

        {
          name: 'energyRating',
          type: 'number',
          min: 1,
          max: 5,
        },

        {
          name: 'roomSize',
          type: 'text',
        },

        {
          name: 'coolingCapacityKW',
          type: 'number',
        },

        {
          name: 'indoorModel',
          type: 'text',
        },

        {
          name: 'outdoorModel',
          type: 'text',
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