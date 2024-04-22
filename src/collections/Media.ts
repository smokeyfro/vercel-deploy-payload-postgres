import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: {
      en: 'Image',
      nl: 'Foto',
    },
    plural: {
      en: 'Images',
      nl: 'Foto\'s',
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
