import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'shared.text',
    type: 'object',
    fields: [
        defineField({
            title: 'Subtitle',
            name: 'subtitle',
            type: 'string',
        }),
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
        }),
        defineField({
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            title: 'Links',
            name: 'links',
            type: 'array',
            of: [
                defineField({
                    name: 'link',
                    type: 'shared.link',
                    title: 'Link',
                }),
            ],
        }),
    ],
})
