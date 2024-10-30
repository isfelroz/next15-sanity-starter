import { defineType, defineField } from 'sanity'
import { FaAlignLeft } from 'react-icons/fa'

export default defineType({
	name: 'section.form',
	type: 'object',
	icon: FaAlignLeft,
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			title: 'Form',
			name: 'form',
			type: 'reference',
			to: [
				{
					type: 'form',
				},
			],
		}),
	],
	preview: {
		select: {
			title: 'form.title',
		},
	},
})
