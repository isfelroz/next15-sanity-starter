import { definePlugin } from 'sanity'
import { structureTool } from 'sanity/structure'
import { structure } from './src/structure'
import { schema } from './src/schema'

export default function sanityWebkit() {
    return definePlugin({
        name: 'sanity-webkit',
        plugins: [
            structureTool({
                title: 'Content',
                structure,
            }),
        ],
        schema,
    })()
}
