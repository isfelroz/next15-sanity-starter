import { defineType, defineField } from 'sanity'
import { BsMenuButtonWideFill } from 'react-icons/bs'

export default defineType({
    name: 'menu',
    title: 'Menus',
    type: 'document',
    icon: BsMenuButtonWideFill,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
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
            title: 'Links',
            name: 'links',
            type: 'array',
            of: [
                defineField({
                    name: 'menuitem',
                    title: 'Menu Item',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'link',
                            type: 'shared.link',
                            title: 'Link',
                        }),
                        defineField({
                            title: 'Childrens',
                            name: 'childrens',
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
                    preview: {
                        select: {
                            title: 'link.label',
                            childrens: 'childrens',
                        },
                        prepare(select) {
                            const { title, childrens } = select
                            return {
                                title,
                                subtitle: childrens ? `${childrens.length} childrens` : 'No childrens',
                            }
                        },
                    },
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
                subtitle: language,
            }
        },
    },
})
