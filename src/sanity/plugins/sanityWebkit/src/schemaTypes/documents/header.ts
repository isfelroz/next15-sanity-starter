import { TbBoxAlignTop } from 'react-icons/tb'

import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'header',
    title: 'Header',
    type: 'document',
    icon: TbBoxAlignTop,
    // Uncomment below to have edits publish automatically as you type
    // liveEdit: true,
    initialValue: {
        title: 'Header',
    },
    fields: [
        defineField({
            // should match 'languageField' plugin configuration setting, if customized
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        }),
        defineField({
            name: 'title',
            title: 'Site title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            title: 'Site logo',
            name: 'logo',
            type: 'image',
        }),
        defineField({
            title: 'Menu',
            name: 'menu',
            type: 'navigation',
        }),
    ],
})
