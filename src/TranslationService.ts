import TranslationConfig from './TranslationConfig'
import { ITranslationConfig, TranslationsType } from './types'

class TranslationService {
  private static instance: TranslationService
  private translations: TranslationsType = {}
  private cache = new Map<string, string>()
  private translationConfig = TranslationConfig.getInstance()

  private constructor() {}

  static getInstance() {
    if (!TranslationService.instance) {
      TranslationService.instance = new TranslationService()
    }
    return TranslationService.instance
  }

  addTranslations(translationdObject: TranslationsType): void {
    Object.assign(this.translations, translationdObject)
  }

  setTranslationConfig(newConfig: Partial<ITranslationConfig>): void {
    this.translationConfig.setConfig(newConfig)
  }

  // Polymorphic translation method with or without module
  translate(language: string, key: string): string
  translate(language: string, key: string, module: string | undefined): string

  translate(language: string, key: string, module?: string): string {
    const cacheKey = module ? `${module}-${language}-${key}` : `${language}-${key}`
    // Check if the translation exists in the cache
    const cacheTranslation = this.cache.get(`${cacheKey}`)
    if (cacheTranslation) return cacheTranslation

    const translation = module ? this.translations[module]?.[language]?.[key] : this.translations[language]?.[key]
    if (!translation) {
      const defaultLanguage = this.translationConfig.getConfig().defaultLanguage
      return (
        (module ? this.translations[module]?.[defaultLanguage]?.[key] : this.translations[defaultLanguage]?.[key]) ||
        `Missing translation for key: ${key}`
      )
    }
    this.cache.set(cacheKey, translation)
    return translation
  }
}

export default TranslationService
