import { isUniqueAcrossSameLangue } from '../../utils'
import { IoDesktopOutline } from 'react-icons/io5'

import { defineType, defineField } from 'sanity'

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
                source: 'title',
                maxLength: 96,
                isUnique: isUniqueAcrossSameLangue,
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
                subtitle: language.toUpperCase() ?? 'Undefined',
                media,
            }
        },
    },
})
