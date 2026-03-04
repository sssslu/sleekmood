import { createContext, useContext, useState } from 'react';
import '../styles/globals.css';
import { translations } from '../translations';

// Create a context to hold the current language and translation
const LangContext = createContext({
  lang: 'ko',
  toggleLang: () => {},
  t: (path) => path,
});

export const useLang = () => useContext(LangContext);

// Helper to get nested keys from translation object. If a key
// is missing it will simply return the path string itself.
function getNested(obj, path) {
  return path.split('.').reduce((acc, part) => {
    if (acc && Object.prototype.hasOwnProperty.call(acc, part)) {
      return acc[part];
    }
    return null;
  }, obj);
}

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState('ko');

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ko' : 'en'));
  };

  const t = (path) => {
    const value = getNested(translations[lang], path);
    return value != null ? value : path;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      <Component {...pageProps} />
    </LangContext.Provider>
  );
}

export default MyApp;