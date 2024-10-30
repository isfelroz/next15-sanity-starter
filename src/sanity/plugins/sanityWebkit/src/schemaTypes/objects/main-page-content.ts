import { defineType } from 'sanity'

export default defineType({
    name: 'pagecontent',
    type: 'array',
    of: [
        // { type: 'section.hero' },
        // { type: 'section.twocolumns' },
        // { type: 'section.features' },
        // { type: 'section.logosgrid' },
        // { type: 'section.projects' },
        // { type: 'section.calltoaction' },
        { type: 'section.form' },
    ],
})
