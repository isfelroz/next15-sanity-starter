import type { I18n } from '../../../../../i18n-config'
import type { StructureBuilder } from 'sanity/structure'

export const webStructure = ({ S, i18n }: { S: StructureBuilder; i18n: I18n }) => {
    const locationsDocumentStructure = locationStructure(i18n.languages)
    return S.list()
        .title('Content')
        .items([
            locationsDocumentStructure(S, 'page'),
            locationsDocumentStructure(S, 'blog'),
            S.divider(),
            singletonListItemStructure(S, 'websettings', 'Web Settings'),
            S.divider(),
            locationsDocumentStructure(S, 'form'),
            locationsDocumentStructure(S, 'menu'),
        ])
}

function singletonListItemStructure(S: StructureBuilder, typeName: string, title?: string) {
    return S.listItem()
        .title(title || typeName)
        .id(typeName)
        .child(S.document().schemaType(typeName).documentId(typeName))
}

function locationStructure(languages: { id: string; title: string }[]) {
    return (S: StructureBuilder, schemaType: string) =>
        S.documentTypeListItem(schemaType).child(
            S.list()
                .title(S.documentTypeListItem(schemaType).getTitle() ?? '')
                .items([
                    ...languages.map((language) =>
                        S.listItem()
                            .title(`${language.id.toLocaleUpperCase()}`)
                            .schemaType(schemaType)
                            .child(
                                S.documentList()
                                    .id(language.id)
                                    .title(`${language.title}`)
                                    .schemaType(schemaType)
                                    .filter(`_type == "${schemaType}" && language == $language`)
                                    .params({ language: language.id })
                                    .initialValueTemplates([
                                        S.initialValueTemplateItem(`${schemaType}-language`, {
                                            id: `${schemaType}-language`,
                                            language: language.id,
                                        }),
                                    ])
                                    .canHandleIntent((intentName, params) => {
                                        // TODO: Handle **existing** documents (like search results when clicked)
                                        // to return `true` on the correct language list!
                                        if (intentName === 'edit') {
                                            // return params?.language === language.id
                                            return false
                                        }
                                        // Not an initial value template
                                        if (!params.template) {
                                            return true
                                        }
                                        // Template name structure example: "lesson-en"
                                        const languageValue = params?.template?.split(`-`).pop()
                                        return languageValue === language.id
                                    })
                            )
                    ),
                    // I have only added this item so that search results when clicked will load this list
                    // If the intent checker above could account for it, I'd remove this item
                    S.divider(),
                    S.listItem()
                        .title(`All`)
                        .schemaType(schemaType)
                        .child(
                            S.documentList()
                                .id(`all-${schemaType}`)
                                .title(`All`)
                                .schemaType(schemaType)
                                .filter(`_type == "${schemaType}"`)
                                // Load this pane for existing `lesson` documents
                                // or new documents that aren't using an initial value template
                                .canHandleIntent(
                                    (intentName, params) => intentName === 'edit' || params.template === schemaType
                                )
                        ),
                ])
        )
}
