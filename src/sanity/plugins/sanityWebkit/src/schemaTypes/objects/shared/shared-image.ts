import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'shared.image',
    type: 'object',
    fields: [
        defineField({
            name: 'aspect',
            title: 'Aspect ratio',
            type: 'string',
            initialValue: 'picture',
            options: {
                list: [
                    { title: 'Picutre (4/3)', value: 'picture' },
                    { title: 'Wide (16/9)', value: 'wide' },
                    { title: 'Portrait (3/4)', value: 'portrait' },
                    { title: 'Square (1/1)', value: 'square' },
                ],
            },
        }),
        defineField({ name: 'image', title: 'Image', type: 'image' }),
    ],
    initialValue: {
        aspect: 'picture',
    },
})
