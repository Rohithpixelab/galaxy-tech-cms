import type { CollectionConfig } from 'payload'
import { formatSlug } from '../slug'

export const Categories: CollectionConfig = {
  slug: 'categories',

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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Category Image',
      admin: {
        description: 'Upload category image or icon',
      },
    },

    {
      name: 'slug',
      type: 'text',
      unique: true,
      hooks: {
        beforeValidate: [({ data }) => formatSlug(data?.name, 'category')],
      },
    },
  ],
}
