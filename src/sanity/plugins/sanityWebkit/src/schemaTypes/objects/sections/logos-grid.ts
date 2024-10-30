import { defineType, defineField } from 'sanity'
import { BsGrid3X3GapFill } from 'react-icons/bs'

export default defineType({
    name: 'section.logosgrid',
    type: 'object',
    icon: BsGrid3X3GapFill,
    fields: [
        defineField({ name: 'title', type: 'string', title: 'Section title' }),
        defineField({
            name: 'items',
            type: 'array',
            of: [
                defineField({
                    name: 'features',
                    title: 'Logo',
                    type: 'object',
                    fields: [
                        defineField({ name: 'image', title: 'Image', type: 'image' }),
                        defineField({ name: 'link', title: 'Link', type: 'shared.link' }),
                    ],
                    preview: {
                        select: {
                            media: 'image',
                            title: 'link.label',
                        },
                    },
                }),
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Logos grid',
            }
        },
    },
})
