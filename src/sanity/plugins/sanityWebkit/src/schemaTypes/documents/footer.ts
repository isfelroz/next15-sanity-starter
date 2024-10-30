import { TbBoxAlignBottom } from 'react-icons/tb'

import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'footer',
	title: 'Footer',
	type: 'document',
	icon: TbBoxAlignBottom,
	// Uncomment below to have edits publish automatically as you type
	// liveEdit: true,
	initialValue: {
		title: 'Footer',
	},
	fields: [
		defineField({
			name: 'title',
			title: 'Site title',
			type: 'string',
			readOnly: true,
			hidden: true,
		}),
		defineField({
			// should match 'languageField' plugin configuration setting, if customized
			name: 'language',
			type: 'string',
			readOnly: true,
			hidden: true,
		}),
		defineField({
			title: 'Site logo',
			name: 'logo',
			type: 'image',
		}),
		defineField({
			title: 'Contact',
			name: 'contact',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			title: 'Menus',
			name: 'menus',
			type: 'array',
			of: [
				{
					type: 'shared.menu',
				},
			],
		}),
	],
})
