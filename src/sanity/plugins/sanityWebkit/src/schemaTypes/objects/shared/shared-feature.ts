import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'shared.feature',
    type: 'object',
    fields: [
        defineField({
            title: 'Image',
            name: 'image',
            type: 'image',
        }),
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
        }),
        defineField({
            title: 'Text',
            name: 'text',
            type: 'text',
        }),
        defineField({
            title: 'Link',
            name: 'link',
            type: 'shared.link',
        }),
    ],
})
