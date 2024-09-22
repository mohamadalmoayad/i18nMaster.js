export type TranslationsType = Record<string, Record<string, any>> 
export interface ITranslationConfig {
  defaultLanguage: string
  supportedLanguages: string[]
}
