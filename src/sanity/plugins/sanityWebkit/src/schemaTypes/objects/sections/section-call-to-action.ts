import { defineType, defineField } from 'sanity'
import { MdOutlineFeaturedPlayList } from 'react-icons/md'

export default defineType({
    name: 'section.calltoaction',
    type: 'object',
    title: 'Call to Action',
    icon: MdOutlineFeaturedPlayList,
    fields: [
        defineField({ name: 'content', type: 'text', title: 'Section title' }),
        defineField({
            name: 'link',
            type: 'shared.link',
            title: 'Link',
        }),
        defineField({ name: 'image', title: 'Background Image', type: 'image' }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Call to Action',
            }
        },
    },
})
