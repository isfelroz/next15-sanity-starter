import { FaEnvelopeCircleCheck } from 'react-icons/fa6'
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'form',
    title: 'Forms',
    type: 'document',
    icon: FaEnvelopeCircleCheck,
    groups: [
        {
            name: 'forminfo',
            title: 'Info',
            default: true, // optional, defaults to false
        },
        {
            name: 'formcontent',
            title: 'Form',
        },
        {
            name: 'formmail',
            title: 'Mail',
        },
        {
            name: 'formresponse',
            title: 'Response',
        },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            group: 'forminfo',
            validation: (rule) => rule.required(),
        }),
        defineField({
            // should match 'languageField' plugin configuration setting, if customized
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        }),
        defineField({
            name: 'formid',
            title: 'ID',
            type: 'slug',
            group: 'forminfo',
            options: {
                source: () => {
                    return `${Date.now()}`
                },
                maxLength: 96,
                isUnique: (value, context) => context.defaultIsUnique(value, context),
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'submit',
            title: 'Submit Label',
            type: 'string',
            group: 'formcontent',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'form',
            title: 'Form Fields',
            type: 'shared.formFields',
            group: 'formcontent',
        }),
        defineField({
            name: 'mail',
            type: 'object',
            title: 'Mail Fields',
            group: 'formmail',
            fields: [
                defineField({
                    name: 'from',
                    title: 'From',
                    type: 'string',
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: 'to',
                    title: 'To',
                    type: 'string',
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: 'reply',
                    title: 'Reply',
                    type: 'string',
                }),
                defineField({
                    name: 'subject',
                    title: 'Subject',
                    type: 'string',
                }),
                defineField({
                    name: 'body',
                    title: 'Body',
                    type: 'array',
                    of: [{ type: 'block' }],
                }),
            ],
        }),
        defineField({
            name: 'response',
            type: 'object',
            title: 'Response message',
            group: 'formresponse',
            fields: [
                defineField({
                    name: 'success',
                    title: 'Success message',
                    type: 'string',
                    initialValue: 'success',
                }),
                defineField({
                    name: 'wrning',
                    title: 'Warning message',
                    type: 'string',
                    initialValue: 'warning',
                }),
                defineField({
                    name: 'error',
                    title: 'Error message',
                    type: 'string',
                    initialValue: 'error',
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            language: 'language',
        },
        prepare(select) {
            const { title, language } = select
            return {
                title,
                subtitle: language.toUpperCase() ?? 'Undefined',
            }
        },
    },
})
