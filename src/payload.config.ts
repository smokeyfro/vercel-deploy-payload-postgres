import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobAdapter } from '@payloadcms/plugin-cloud-storage/vercelBlob'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import path from 'path'
import sharp from 'sharp'
import { buildConfig } from 'payload/config'
import { fileURLToPath } from 'url'

import { Pages } from './collections/Pages'
import { Services } from './collections/Services'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Settings } from './globals/Settings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Pages, Services, Users, Media],
  globals: [Settings],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL,
    },
  }),

  sharp,

  plugins: [
    cloudStorage({
      collections: {
        [Media.slug]: {
          adapter: vercelBlobAdapter({
            token: process.env.BLOB_READ_WRITE_TOKEN || '',
          }),
          disableLocalStorage: true,
          disablePayloadAccessControl: true,
        },
      },
    }),
  ],
  localization: {
    locales: [
      {
        label: 'English',
        code: 'en',
      },
      {
        label: 'Dutch',
        code: 'nl',
      },
    ],
    defaultLocale: 'nl',
    fallback: true,
  },
})