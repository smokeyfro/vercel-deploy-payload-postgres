import {  CollectionConfig } from "payload/types";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { slugField } from '../fields/slug'

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
        name: "subtitle",
        type: "text",
        required: true,
        localized: true,
        label: {
          en: 'Subtitle',
          nl: 'Subtitel',
        },
      },
      slugField(),
    {
        name: "summary",
        type: "textarea",
        required: true,
        localized: true,
        label: {
          en: 'Summary',
          nl: 'Summary',
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
        name: "icon",
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
