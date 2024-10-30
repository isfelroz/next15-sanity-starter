'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/sanity/env'

import webkitPlugin from './src/sanity/plugins/sanityWebkit'

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    plugins: [webkitPlugin(), visionTool({ defaultApiVersion: apiVersion })],
})
