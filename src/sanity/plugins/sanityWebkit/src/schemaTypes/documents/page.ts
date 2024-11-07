import { isUniqueAcrossSameLangue } from '../../utils'
import { IoDesktopOutline } from 'react-icons/io5'

import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'page',
    title: 'Pages',
    type: 'document',
    icon: IoDesktopOutline,
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
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
            group: 'info',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'info',
            options: {
                source: 'title',
                maxLength: 96,
                isUnique: isUniqueAcrossSameLangue,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            // should match 'languageField' plugin configuration setting, if customized
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: false,
            group: 'info',
        }),
        defineField({
            name: 'sections',
            type: 'pagecontent',
            title: 'Sections',
            group: 'content',
        }),
        defineField({
            title: 'Seo',
            name: 'seo',
            group: 'seo',
            type: 'seoMetaFields',
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
                subtitle: language.toUpperCase() ?? 'Undefined',
                media,
            }
        },
    },
})
