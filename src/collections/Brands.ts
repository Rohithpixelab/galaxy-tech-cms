import type { CollectionConfig } from 'payload'
import { formatSlug } from '../slug'

export const Brands: CollectionConfig = {
  slug: 'brands',

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
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Brand Logo',
      admin: {
        description: 'Upload brand logo',
      },
    },

    {
      name: 'slug',
      type: 'text',
      unique: true,
      hooks: {
        beforeValidate: [({ data }) => formatSlug(data?.name, 'brand')],
      },
    },
  ],
}
