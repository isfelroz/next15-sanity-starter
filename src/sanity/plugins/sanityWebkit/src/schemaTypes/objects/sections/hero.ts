import { defineType, defineField } from 'sanity'
import { PiSlideshowDuotone } from 'react-icons/pi'

export default defineType({
	name: 'section.hero',
	type: 'object',
	icon: PiSlideshowDuotone,
	fields: [
		defineField({ name: 'text', title: 'Hero content', type: 'shared.text' }),
		defineField({
            title: 'Images',
            name: 'images',
            type: 'array',
            of: [{ type: 'image' }],
            validation: Rule => Rule.max(3),
        })
	],
	preview: {
		select: {
			image: 'image',
		},
		prepare() {
			return {
				title: 'Hero',
			}
		},
	},
})
