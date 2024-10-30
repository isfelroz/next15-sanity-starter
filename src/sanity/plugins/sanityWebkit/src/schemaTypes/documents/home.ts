import { FaHome } from 'react-icons/fa'
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'home',
    title: 'Home Page',
    type: 'document',
    icon: FaHome,
    // Uncomment below to have edits publish automatically as you type
    // liveEdit: true,
    initialValue: {
        title: 'Home Page',
    },
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
        }),
        defineField({
            // should match 'languageField' plugin configuration setting, if customized
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
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
                subtitle: `Home - ${language.toUpperCase()}`,
                media,
            }
        },
    },
})
