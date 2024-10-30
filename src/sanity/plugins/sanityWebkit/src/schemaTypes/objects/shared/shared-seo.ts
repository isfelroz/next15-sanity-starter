import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'shared.seo',
    type: 'object',
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
        }),
        defineField({
            title: 'Description',
            name: 'text',
            type: 'text',
        }),
        defineField({
            title: 'Image OG',
            name: 'image',
            type: 'image',
        }),
    ],
})
