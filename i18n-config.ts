const languages = [
    { id: 'es', title: 'Spanish', isDefault: true },
    { id: 'en', title: 'English' },
]

const i18n: I18n = {
    languages,
    base: languages.find((item) => item.isDefault)?.id,
}

const googleTranslateLanguages = languages.map(({ id, title }) => ({ id, title }))

export { i18n, googleTranslateLanguages }

export type Locale = {
    id: string
    title: string
    isDefault?: boolean
}

export type I18n = {
    languages: Locale[]
    base: string | undefined
}
