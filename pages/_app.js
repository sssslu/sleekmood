import { createContext, useContext, useState } from 'react';
import '../styles/globals.css';
import { translations } from '../translations';

// 언어 + 로그인 모달 상태를 전역으로 관리하는 컨텍스트.
// 어느 컴포넌트에서든 openLogin() 을 호출하면 헤더 로그인 모달이 열립니다.
const LangContext = createContext({
  lang: 'ko',
  toggleLang: () => {},
  t: (path) => path,
  isLoginOpen: false,
  openLogin: () => {},
  closeLogin: () => {},
});

export const useLang = () => useContext(LangContext);

// 중첩 키를 점(.) 표기로 조회하는 헬퍼.
// 키가 없으면 경로 문자열 자체를 반환합니다.
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
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ko' : 'en'));
  };

  const t = (path) => {
    const value = getNested(translations[lang], path);
    return value != null ? value : path;
  };

  return (
    <LangContext.Provider
      value={{
        lang,
        toggleLang,
        t,
        isLoginOpen,
        openLogin: () => setIsLoginOpen(true),
        closeLogin: () => setIsLoginOpen(false),
      }}
    >
      <Component {...pageProps} />
    </LangContext.Provider>
  );
}

export default MyApp;