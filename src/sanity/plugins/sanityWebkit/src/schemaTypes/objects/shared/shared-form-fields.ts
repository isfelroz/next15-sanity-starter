import { defineType, defineField } from 'sanity'

const globalInput = [
	defineField({
		name: 'size',
		title: 'Field Size',
		type: 'number',
		initialValue: 50,
		options: {
			layout: 'dropdown',
			list: [
				{ value: 30, title: '30%' },
				{ value: 40, title: '40%' },
				{ value: 50, title: '50%' },
				{ value: 60, title: '60%' },
				{ value: 70, title: '70%' },
				{ value: 100, title: '100%' },
			],
		},
		validation: (Rule) => Rule.required(),
	}),
	defineField({
		name: 'name',
		title: 'Field Name',
		type: 'string',
		validation: (Rule) => Rule.required(),
	}),

	defineField({
		name: 'label',
		title: 'Field Label',
		type: 'string',
	}),

	defineField({
		name: 'placeholder',
		title: 'Placeholder',
		type: 'string',
	}),

	defineField({
		name: 'required',
		title: 'Required',
		type: 'boolean',
		initialValue: false,
	}),
]

const textInput = defineField({
	name: 'field.text',
	title: 'Text Field',
	type: 'object',
	fields: [...globalInput],
})
const textAreaInput = defineField({
	name: 'field.textarea',
	title: 'TextArea Field',
	type: 'object',
	fields: [...globalInput],
})

const emailInput = defineField({
	name: 'field.email',
	title: 'Email Field',
	type: 'object',
	fields: [...globalInput],
})

const phoneInput = defineField({
	name: 'field.phone',
	title: 'Phone Field',
	type: 'object',
	fields: [...globalInput],
})
const fileInput = defineField({
	name: 'field.file',
	title: 'File Field',
	type: 'object',
	fields: [...globalInput],
})
const selectInput = defineField({
	name: 'field.select',
	title: 'Select Field',
	type: 'object',
	fields: [
		...globalInput,
		defineField({
			name: 'options',
			title: 'Options',
			type: 'array',
			of: [
				defineField({
					name: 'option',
					type: 'object',
					fields: [
						defineField({
							type: 'string',
							name: 'label',
							title: 'Label',
						}),
						defineField({
							type: 'string',
							name: 'value',
							title: 'Value',
						}),
					],
				}),
			],
		}),
	],
})
const checkboxInput = defineField({
	name: 'field.checkbox',
	title: 'Checkbox Field',
	type: 'object',
	fields: [
		...globalInput,
		defineField({
			name: 'options',
			title: 'Options',
			type: 'array',
			of: [
				defineField({
					name: 'option',
					type: 'object',
					fields: [
						defineField({
							type: 'string',
							name: 'label',
							title: 'Label',
						}),
						defineField({
							type: 'string',
							name: 'value',
							title: 'Value',
						}),
						defineField({
							name: 'checked',
							title: 'Checked',
							type: 'boolean',
							initialValue: false,
						}),
					],
				}),
			],
		}),
	],
})

export default defineType({
	name: 'shared.formFields',
	type: 'array',
	of: [textInput, emailInput, phoneInput, textAreaInput, selectInput, fileInput, checkboxInput],
})
