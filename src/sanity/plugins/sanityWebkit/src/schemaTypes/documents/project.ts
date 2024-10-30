import { defineType, defineField } from 'sanity'
import { VscRocket } from 'react-icons/vsc'

export default defineType({
    name: 'project',
    title: 'Projects',
    type: 'document',
    icon: VscRocket,
    // Uncomment below to have edits publish automatically as you type
    // liveEdit: true,
    groups: [
        {
            name: 'info',
            title: 'Info',
        },
        {
            name: 'content',
            title: 'Content',
        },
        {
            name: 'seo',
            title: 'SEO',
        },
    ],
    fields: [
        defineField({
            // should match 'languageField' plugin configuration setting, if customized
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        }),
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
        defineField({
            name: 'sections',
            type: 'pagecontent',
            title: 'Sections',
            group: 'content',
        }),
        defineField({
            name: 'seo',
            type: 'shared.seo',
            title: 'SEO',
            group: 'seo',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            language: 'language',
            media: 'info.thumbnail',
        },
        prepare(select) {
            const { title, language, media } = select
            return {
                title,
                subtitle: language.toUpperCase(),
                media,
            }
        },
    },
})
