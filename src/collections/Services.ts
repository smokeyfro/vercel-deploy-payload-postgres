import {  CollectionConfig } from "payload/types";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Services: CollectionConfig = {
  slug: "services",
  labels: {
    singular: {
      en: 'Service',
      nl: 'Dienst',
    },
    plural: {
      en: 'Services',
      nl: 'Diensten',
    },
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
      label: {
        en: 'Title',
        nl: 'Titel',
      },
    },
    {
      name: "slug",
      type: "text",
      required: true,
      localized: true,
      label: {
        en: 'Slug',
        nl: 'Slak',
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: 'media',
      label: {
        en: 'Image',
        nl: 'Foto',
      },
    },
    {
        name: "price",
        type: "text",
        required: true,
        localized: true,
        label: {
          en: 'Price',
          nl: 'Prijs',
        },
      },
      {
        name: "length",
        type: "number",
        required: true,
        localized: true,
        label: {
          en: 'Length',
          nl: 'Lengte',
        },
      },
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({}),
              localized: true
            },
          ],
        },
        {
          label: "SEO",
          fields: [
            {
              name: "seo_title",
              type: "text",
              localized: true,
              label: {
                en: 'SEO Title',
                nl: 'SEO Titel',
              },
            },
            {
              name: "seo_description",
              type: "textarea",
              localized: true,
              label: {
                en: 'SEO Description',
                nl: 'SEO Beschrijving',
              },
            },
            {
              name: "seo_image",
              type: "upload",
              relationTo: 'media',
              label: {
                en: 'SEO Image',
                nl: 'SEO Foto',
              },
            },
          ],
        },
      ],
    },
  ],
};
