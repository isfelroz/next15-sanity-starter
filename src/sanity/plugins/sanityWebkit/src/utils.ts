import { apiVersion } from '@/sanity/env'
import { SlugValidationContext } from 'sanity'

export async function isUniqueAcrossSameLangue(slug: string, context: SlugValidationContext) {
    const { document, getClient } = context
    const client = getClient({ apiVersion: apiVersion })
    const id = document!._id.replace(/^drafts\./, '')
    const params = {
        draft: `drafts.${id}`,
        published: id,
        slug,
        language: document!.language,
        type: document!._type,
    }
    const query = `!defined(*[_type == $type && !(_id in [$draft, $published]) && slug.current == $slug && language == $language][0]._id)`
    const result = await client.fetch(query, params)
    return result
}
