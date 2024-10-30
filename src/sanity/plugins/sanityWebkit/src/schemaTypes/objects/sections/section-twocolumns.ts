import { defineType, defineField } from 'sanity'
import { FaTableColumns } from 'react-icons/fa6'

export default defineType({
    name: 'section.twocolumns',
    type: 'object',
    icon: FaTableColumns,
    fields: [
        defineField({
            name: 'size',
            title: 'First column size',
            type: 'number',
            initialValue: 50,
            options: {
                list: [
                    { title: '30%', value: 30 },
                    { title: '40%', value: 40 },
                    { title: '50%', value: 50 },
                    { title: '60%', value: 60 },
                    { title: '70%', value: 70 },
                ], // <-- predefined values
                layout: 'radio', // <-- defaults to 'dropdown'
            },
        }),
        defineField({
            name: 'items',
            type: 'array',
            of: [
                defineField({ name: 'twocolumns_text', title: 'Content', type: 'shared.text' }),
                defineField({ name: 'twocolumns_image', title: 'Image', type: 'shared.image' }),
            ],
            validation: (rule) => rule.max(2),
        }),
    ],
    preview: {
        select: {
            image: 'image',
        },
        prepare() {
            return {
                title: 'Two Columns',
            }
        },
    },
})
