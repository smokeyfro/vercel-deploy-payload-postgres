import {  CollectionConfig } from "payload/types";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: {
      en: 'Page',
      nl: 'Pagina',
    },
    plural: {
      en: 'Pages',
      nl: 'Paginas',
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
