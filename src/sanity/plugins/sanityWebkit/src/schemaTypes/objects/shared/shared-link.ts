import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'shared.link',
    type: 'object',
    fields: [
        defineField({
            name: 'external',
            type: 'boolean',
            title: 'Is external link',
            initialValue: false,
        }),
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
        }),
        defineField({
            title: 'Reference',
            name: 'reference',
            type: 'reference',
            to: [
                {
                    type: 'page',
                },
                {
                    type: 'blog',
                },
            ],
            options: {
                filter: ({ document }) => {
                    return {
                        filter: 'language == $language',
                        params: { language: document.language },
                    }
                },
            },
            hidden: ({ parent }) => parent?.external,
        }),
        defineField({
            title: 'Link',
            name: 'link',
            type: 'url',
            hidden: ({ parent }) => !parent?.external,
        }),
    ],
})
