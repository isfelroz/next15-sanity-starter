import { SlDocs } from 'react-icons/sl'
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'blog',
    title: 'Blog',
    type: 'document',
    icon: SlDocs,
    // Uncomment below to have edits publish automatically as you type
    // liveEdit: true,
    groups: [
        {
            name: 'info',
            title: 'Info',
        },
        {
            name: 'seo',
            title: 'SEO',
        },
        {
            name: 'content',
            title: 'Content',
        },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            group: 'info',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'info',
            options: {
                source: (doc, options) => {
                    const parent = options.parent as { title: string; lang: string }
                    return `${parent.title}${parent.lang ? `-${parent.lang}` : ''}`
                },
                maxLength: 96,
                isUnique: (value, context) => context.defaultIsUnique(value, context),
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'info',
            type: 'pageinfo',
            title: 'Global Information',
            group: 'info',
        }),
    ],
})
