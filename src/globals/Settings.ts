import type { GlobalConfig } from 'payload/types'
import link from '../fields/link'

export const Settings: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
        type: "tabs",
        tabs: [
          {
            label: "Branding",
            fields: [
                {
                    name: "logo",
                    type: "upload",
                    relationTo: 'media',
                    label: {
                      en: 'Logo',
                      nl: 'Logo',
                    },
                },
                {
                    name: "favicon",
                    type: "upload",
                    relationTo: 'media',
                    label: {
                      en: 'Icon',
                      nl: 'Icon',
                    },
                },
            ],
        },
        {
            label: "Navigation",
            fields: [
                {
                    name: 'nav',
                    fields: [
                      link({
                        appearances: false,
                      }),
                    ],
                    maxRows: 6,
                    type: 'array',
                },
            ],
        },
        {
            label: "Contact",
            fields: [
                {
                    name: "email",
                    type: "text",
                    required: true,
                    localized: true,
                    label: {
                      en: 'Email',
                      nl: 'Email',
                    },
                },
                {
                    name: "phone",
                    type: "text",
                    required: true,
                    localized: true,
                    label: {
                      en: 'Phone',
                      nl: 'Telefoonnummer',
                    },
                },
                {
                    name: "address",
                    type: "textarea",
                    required: true,
                    localized: true,
                    label: {
                      en: 'Address',
                      nl: 'Adres',
                    },
                },
                {
                    name: "kvk",
                    type: "text",
                    required: true,
                    localized: true,
                    label: {
                      en: 'Kvk',
                      nl: 'Kvk',
                    },
                },
                {
                    name: "btw_id",
                    type: "text",
                    required: true,
                    localized: true,
                    label: {
                      en: 'Btw-id',
                      nl: 'Btw-id',
                    },
                },
            ],
        },
        ],
    },
  ],
  graphQL: {
    name: 'Settings',
  },
  slug: 'settings',
  typescript: {
    interface: 'Settings',
  },
}