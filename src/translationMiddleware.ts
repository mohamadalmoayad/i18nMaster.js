import { Request, Response, NextFunction } from 'express'
import TranslationService from './TranslationService'
import TranslationConfig from './TranslationConfig'

// Extend the Express Request interface
declare global {
  namespace Express {
    interface Request {
      getTranslation(key: string, module?: string): string
      detectedLanguage: string
    }
  }
}

const translationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const translationConfig = TranslationConfig.getInstance()
  const translationService = TranslationService.getInstance()
  const defaultLanguage = translationConfig.getConfig().defaultLanguage
  const supportedLanguages = translationConfig.getConfig().supportedLanguages
  const requestLanguage = req.headers['accept-language']
  const detectedLanguage =
    requestLanguage && supportedLanguages.includes(requestLanguage) ? requestLanguage : defaultLanguage

  // Add getTranslation method to the request object
  req.getTranslation = (key: string, module?: string) => {
    return translationService.translate(detectedLanguage, key, module)
  }

  // Add detectedLanguage property to the request object
  req.detectedLanguage = detectedLanguage

  next()
}

export default translationMiddleware;