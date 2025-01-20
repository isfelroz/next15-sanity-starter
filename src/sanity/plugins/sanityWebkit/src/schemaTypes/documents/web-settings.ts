import { HiOutlineCog8Tooth } from 'react-icons/hi2'
import { defineType, defineField } from 'sanity'
import { i18n } from '../../../../../../../i18n-config'

export default defineType({
	name: 'websettings',
	title: 'Web Settings',
	type: 'document',
	icon: HiOutlineCog8Tooth,
	initialValue: () => ({
		title: 'Web Settings',
	}),
	groups: [
		{
			name: 'globalsettings',
			title: 'Global Settings',
			default: true,
		},
		{
			name: 'headerfooter',
			title: 'Header and Footer',
		},
		{
			name: 'socialmedias',
			title: 'Social Medias',
		},
	],
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			initialValue: 'Web Settings',
			hidden: true,
		}),
		defineField({
			title: 'Global Settings',
			name: 'globalsettings',
			group: 'globalsettings',
			type: 'object',
			fields: [
				defineField({
					title: 'Home Page',
					name: 'homepage',
					type: 'reference',
					to: [
						{
							type: 'page',
						},
						{
							type: 'blog',
						},
					],
					options: {
						filter: () => {
							return {
								filter: 'language == $language',
								params: { language: i18n.base },
							}
						},
					},
					hidden: ({ parent }) => parent?.external,
				}),
			],
		}),
		defineField({
			title: 'Header',
			name: 'header',
			type: 'object',
			group: 'headerfooter',
			fields: [
				defineField({
					name: 'logo',
					title: 'Logo',
					type: 'image',
					description: 'This field is the logo of your personal website.',
				}),
				defineField({
					name: 'showSocialMedia',
					title: 'Show Social Media',
					type: 'boolean',
					description: 'This field is the show social medias.',
					initialValue: true,
				}),
				defineField({
					name: 'showLanguageSelector',
					title: 'Show Language Selector',
					type: 'boolean',
					description: 'This field is the show language selector.',
					initialValue: true,
				}),
				defineField({
					title: 'Menu',
					name: 'menu',
					type: 'reference',
					to: [{ type: 'menu' }],
				}),
			],
		}),
		defineField({
			title: 'Footer',
			name: 'footer',
			type: 'object',
			group: 'headerfooter',
			fields: [
				defineField({
					name: 'logo',
					title: 'Logo',
					type: 'image',
					description: 'This field is the logo of your personal website.',
				}),
				defineField({
					name: 'showSocialMedia',
					title: 'Show Social Media',
					type: 'boolean',
					description: 'This field is the show social medias.',
					initialValue: true,
				}),
				defineField({
					name: 'showLanguageSelector',
					title: 'Show Language Selector',
					type: 'boolean',
					description: 'This field is the show language selector.',
					initialValue: true,
				}),
				defineField({
					title: 'Menu',
					name: 'menu',
					type: 'reference',
					to: [{ type: 'menu' }],
				}),
			],
		}),
		defineField({
			title: 'Social Medias',
			name: 'socialmedias',
			type: 'array',
			group: 'socialmedias',
			of: [
				defineField({
					type: 'object',
					title: 'Social Link',
					name: 'link',
					fields: [
						defineField({
							name: 'type',
							title: 'Social Media',
							type: 'string',
							options: {
								list: [
									{ title: 'Facebook', value: 'facebook' },
									{ title: 'Instagram', value: 'instagram' },
									{ title: 'Twitter', value: 'twitter' },
									{ title: 'Linkedin', value: 'linkedin' },
									{ title: 'Youtube', value: 'youtube' },
									{ title: 'Pinterest', value: 'pinterest' },
									{ title: 'Snapchat', value: 'snapchat' },
									{ title: 'Tiktok', value: 'tiktok' },
									{ title: 'Whatsapp', value: 'whatsapp' },
									{ title: 'Telegram', value: 'telegram' },
									{ title: 'Viber', value: 'viber' },
									{ title: 'Skype', value: 'skype' },
									{ title: 'Discord', value: 'discord' },
									{ title: 'Github', value: 'github' },
									{ title: 'Gitlab', value: 'gitlab' },
									{ title: 'Bitbucket', value: 'bitbucket' },
									{ title: 'Dribbble', value: 'dribbble' },
									{ title: 'Behance', value: 'behance' },
									{ title: 'Medium', value: 'medium' },
									{ title: 'Reddit', value: 'reddit' },
									{ title: 'Tumblr', value: 'tumblr' },
									{ title: 'Flickr', value: 'flickr' },
									{ title: 'Snapchat', value: 'snapchat' },
									{ title: 'Tiktok', value: 'tiktok' },
									{ title: 'Whatsapp', value: 'whatsapp' },
									{ title: 'Telegram', value: 'telegram' },
									{ title: 'Viber', value: 'viber' },
									{ title: 'Skype', value: 'skype' },
									{ title: 'Discord', value: 'discord' },
									{ title: 'Github', value: 'github' },
									{ title: 'Gitlab', value: 'gitlab' },
									{ title: 'Bitbucket', value: 'bitbucket' },
									{ title: 'Dribbble', value: 'dribbble' },
									{ title: 'Behance', value: 'behance' },
								],
							},
						}),
						defineField({
							name: 'url',
							title: 'URL',
							type: 'url',
						}),
					],
					preview: {
						select: {
							title: 'type',
							subtitle: 'url',
						},
					},
				}),
			],
		}),
	],
})
