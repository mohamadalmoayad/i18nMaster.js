<p align="center"><a href="https://www.modesigns.studio" target="_blank"><img src="https://www.modesigns.studio/_next/image?url=%2Fimages%2Flogo%2Fmo-designs-logo.gif&w=256&q=75" width="250" alt="Mo Designs Studio Logo"></a></p>

# 🌐 i18nMaster.js: Effortless Multilingual Support for Your App

[![npm version](https://badge.fury.io/js/i18nMaster.js.svg)](https://badge.fury.io/js/i18nMaster.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

i18nMaster.js is a powerful, flexible, and easy-to-use translation service for JavaScript applications. Whether you're building a React app, a Node.js backend, or any other JavaScript project, i18nMaster.js has got you covered with its seamless multilingual support.

## 🚀 Features

- 🔄 Easy integration with both frontend and backend projects
- 🧠 Smart caching for improved performance
- 🌍 Support for multiple languages and locales
- 📦 Modular structure for organized translations
- 🔌 Express middleware for automatic language detection
- 🎛 Configurable default language and supported languages

## 📦 Installation

```bash
npm install i18nMaster.js
```

## 🛠 Usage

### Basic Setup

1. Import the necessary modules:

```javascript
import TranslationService from 'i18nMaster.js/TranslationService';
import TranslationConfig from 'i18nMaster.js/TranslationConfig';
```

2. Configure supported languages:

```javascript
const config = TranslationConfig.getInstance();
config.setConfig({
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'es-ES', 'fr-FR', 'de-DE', 'ja-JP'],
});
```

3. Add your translations:

```javascript
const translationService = TranslationService.getInstance();
translationService.addTranslations({
  'en-US': {
    greeting: 'Hello, world!',
    farewell: 'Goodbye!',
  },
  'es-ES': {
    greeting: '¡Hola, mundo!',
    farewell: '¡Adiós!',
  },
  // Add more languages...
});
```

4. Use translations in your code:

```javascript
const greeting = translationService.translate('en-US', 'greeting');
console.log(greeting); // Output: Hello, world!
```

### 📁 Organizing Translations

i18nMaster.js supports a modular approach to organizing your translations. Here's an example of how to structure your translation files:

#### `translations/index.ts`

```typescript
import messages from './messages';
import errors from './errors';

const Translations = {
  'en-US': {
    Confirm: 'Confirm',
    Optional: 'Optional',
    Save: 'Save',
    Register: 'Register',
    Search: 'Search',
    Close: 'Close',
    Exit: 'Exit',
    Reset: 'Reset',
  },
  'es-ES': {
    Confirm: 'Confirmar',
    Optional: 'Opcional',
    Save: 'Guardar',
    Register: 'Registrar',
    Search: 'Buscar',
    Close: 'Cerrar',
    Exit: 'Salir',
    Reset: 'Restablecer',
  },
  messages,
  errors,
};

export default Translations;
```

#### `translations/messages.ts`

```typescript
const Messages = {
  'en-US': {
    Welcome: 'Welcome to our app!',
    ThankYou: 'Thank you for using our service.',
  },
  'es-ES': {
    Welcome: '¡Bienvenido a nuestra aplicación!',
    ThankYou: 'Gracias por utilizar nuestro servicio.',
  },
};

export default Messages;
```

#### `translations/errors.ts`

```typescript
const Errors = {
  'en-US': {
    NotFound: 'Resource not found',
    ServerError: 'An unexpected error occurred',
  },
  'es-ES': {
    NotFound: 'Recurso no encontrado',
    ServerError: 'Ocurrió un error inesperado',
  },
};

export default Errors;
```

With this structure, you can easily manage and scale your translations as your application grows.

### 🖥 Frontend Usage (React Example)

Here's how you can use i18nMaster.js in a React application:

```jsx
import React from 'react';
import TranslationService from 'i18nMaster.js/TranslationService';

const translationService = TranslationService.getInstance();

function App() {
  const [language, setLanguage] = React.useState('en-US');

  const translate = (key, module) => {
    return translationService.translate(language, key, module);
  };

  return (
    <div>
      <h1>{translate('Welcome', 'messages')}</h1>
      <button>{translate('Confirm')}</button>
      <p>{translate('ThankYou', 'messages')}</p>
    </div>
  );
}

export default App;
```

### 🖧 Backend Usage (Express.js)

i18nMaster.js provides a middleware for Express.js that automatically detects the user's preferred language:

```javascript
import express from 'express';
import { translationMiddleware } from 'i18nMaster.js/translationMiddleware';

const app = express();

// Apply the translation middleware
app.use(translationMiddleware);

app.get('/', (req, res) => {
  const greeting = req.getTranslation('greeting');
  res.send(greeting);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

The middleware adds a `getTranslation` method to the `req` object, allowing you to easily retrieve translations based on the detected language.

## 🎛 Configuration

You can configure i18nMaster.js using the `TranslationConfig` class:

```javascript
import TranslationConfig from 'i18nMaster.js/TranslationConfig';

const config = TranslationConfig.getInstance();
config.setConfig({
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'es-ES', 'fr-FR', 'de-DE', 'ja-JP'],
});
```

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for details on how to contribute to i18nMaster.js.

## 📄 License

i18nMaster.js is MIT licensed. See the [LICENSE](LICENSE) file for details.

## 🙋‍♀️ Support

If you encounter any issues or have questions, please file an issue on our [GitHub repository](https://github.com/your-repo/i18nMaster.js/issues).

---

Make your app speak the language of your users with i18nMaster.js! 🌍🗣️

## Developed with ❤️ by Mohamad Almoayad.