import { defineField, defineType } from 'sanity'

export default defineType({
	title: 'Menu',
	name: 'shared.menu',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title',
		}),
		defineField({
			title: 'Links',
			name: 'links',
			type: 'array',
			of: [
				defineField({
					name: 'link',
					type: 'shared.link',
					title: 'Link',
				}),
			],
		}),
	],
})
