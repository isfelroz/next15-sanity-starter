import { defineType, defineField } from 'sanity'
import { MdOutlineFeaturedPlayList } from 'react-icons/md'
import FeaturesLayoutInput from '@/sanity/inputs/features-layout-input'

export default defineType({
    name: 'section.features',
    type: 'object',
    icon: MdOutlineFeaturedPlayList,
    initialValue: {
        layout: 'feature-1',
    },
    fields: [
        defineField({
            name: 'layout',
            title: 'Layout',
            type: 'string',
            components: {
                input: FeaturesLayoutInput,
            },
        }),
        defineField({ name: 'header', type: 'shared.text', title: 'Section header' }),
        defineField({
            name: 'items',
            type: 'array',
            of: [defineField({ name: 'features', title: 'Features', type: 'shared.feature' })],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Features',
            }
        },
    },
})
