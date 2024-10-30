import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'pageinfo',
	type: 'object',
	fields: [
		defineField({
			name: 'description',
			title: 'Description',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			type: 'image',
			name: 'thumbnail',
			title: 'Thumbnail',
			description: 'This asset is served from Cloudinary',
		}),

		defineField({
			name: 'date',
			title: 'Date',
			type: 'datetime',
			initialValue: () => new Date().toISOString(),
			validation: (rule) => rule.required(),
		}),
	],
})
