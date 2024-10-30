import { defineType, defineField } from 'sanity'
import { VscRocket } from 'react-icons/vsc'

export default defineType({
	name: 'section.projects',
	type: 'object',
	icon: VscRocket,
	fields: [
		defineField({ name: 'title', type: 'string', title: 'Section title' }),
		defineField({
			name: 'items',
			type: 'array',
			of: [
				defineField({
					title: 'Project',
					name: 'project',
					type: 'reference',
					to: [
						{
							type: 'project',
						},
					],
					options: {
						filter: ({ document }) => {
							return {
								filter: 'language == $language',
								params: { language: document.language },
							}
						},
					},
				}),
			],
		}),
		defineField({ name: 'link', title: 'Link', type: 'shared.link' }),
	],
	preview: {
		prepare() {
			return {
				title: 'Projects',
			}
		},
	},
})
