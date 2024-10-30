# Next.js Sanity Project

This is a [Next.js](https://nextjs.org) project integrated with [Sanity.io](https://www.sanity.io) for content management. The project is bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Sanity CLI

This project includes a Sanity CLI configuration. You can run Sanity commands in this folder. For more information, visit the [Sanity CLI documentation](https://www.sanity.io/docs/cli).

The CLI configuration is defined in [`sanity.cli.ts`](sanity.cli.ts):

```ts
import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({ api: { projectId, dataset } })
```

## Sanity Studio

The Sanity Studio is mounted on the `/studio` route. The configuration is defined in [`sanity.config.ts`](sanity.config.ts):

```ts
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    schema,
    plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
})
```

## Learn More

To learn more about Next.js and Sanity, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Sanity Documentation](https://www.sanity.io/docs) - learn about Sanity features and API.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
