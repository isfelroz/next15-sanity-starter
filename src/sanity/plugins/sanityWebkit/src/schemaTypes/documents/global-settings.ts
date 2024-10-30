import { HiOutlineCog8Tooth } from 'react-icons/hi2'
import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'settings',
	title: 'Global Settings',
	type: 'document',
	icon: HiOutlineCog8Tooth,
	// Uncomment below to have edits publish automatically as you type
	// liveEdit: true,
	fields: [
		defineField({
			name: 'title',
			description: 'This field is the title of your personal website.',
			title: 'Title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
	],
})
