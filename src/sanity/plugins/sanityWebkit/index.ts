import { definePlugin } from 'sanity'
import { structureTool } from 'sanity/structure'
import { webStructure } from './src/structure'
import { internationalizationSchemas, schema } from './src/schema'
import { documentInternationalization } from '@sanity/document-internationalization'
import { seoMetaFields } from 'sanity-plugin-seo'
import { I18n } from '../../../../i18n-config'

export default function sanityWebkit({ i18n }: { i18n: I18n }) {
    const plugins = [
        structureTool({
            title: 'Content',
            structure: (S) => webStructure({ S, i18n }),
        }),
        seoMetaFields(),
    ]

    if (i18n?.languages && i18n?.languages?.length > 1) {
        plugins.push(
            documentInternationalization({
                supportedLanguages: i18n.languages,
                schemaTypes: internationalizationSchemas,
            })
        )
    }
    return definePlugin({
        name: 'sanity-webkit',
        plugins,
        schema,
    })()
}
