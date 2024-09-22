import { ITranslationConfig } from './types'

const defaultConfig: ITranslationConfig = {
  defaultLanguage: 'en',
  supportedLanguages: [
    // English - United States
    'en-US',
    // Arabic - Egypt
    'ar-EG',
    // French - France
    'fr-FR',
    // German - Germany
    'de-DE',
    // Spanish - Spain
    'es-ES',
    // Italian - Italy
    'it-IT',
    // Japanese - Japan
    'ja-JP',
    // Korean - South Korea
    'ko-KR',
    // Polish - Poland
    'pl-PL',
    // Portuguese - Brazil
    'pt-BR',
    // Russian - Russia
    'ru-RU',
    // Chinese - China
    'zh-CN',
    // Chinese - Taiwan
    'zh-TW',
  ],
}

class TranslationConfig {
  private static instance: TranslationConfig
  private config: ITranslationConfig

  private constructor() {
    this.config = defaultConfig
  }

  static getInstance(): TranslationConfig {
    if (!TranslationConfig.instance) {
      TranslationConfig.instance = new TranslationConfig()
    }
    return TranslationConfig.instance
  }

  setConfig(newConfig: Partial<ITranslationConfig>): void {
    this.config = { ...this.config, ...newConfig }
  }

  getConfig(): ITranslationConfig {
    return { ...this.config }
  }
}

export default TranslationConfig
