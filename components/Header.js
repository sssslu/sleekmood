import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import { useLang } from '../pages/_app';

export default function Header() {
  const { lang, toggleLang, t } = useLang();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Navigation bar */}
      <div className={styles.navBar}>
        <Link href="/" className={styles.logoWrapper}>
          <Image
            src="/logo.png"
            alt="Sleekmood logo"
            className={styles.logo}
            width={300}
            height={100}
            priority
          />
        </Link>
        <nav className={styles.nav}>
          <Link href="/#shop">{t('nav.shop')}</Link>
          <Link href="/collection">{t('nav.lookbook')}</Link>
          <Link href="/sleekmood">{t('nav.with')}</Link>
        </nav>
        <div className={styles.actions}>
          <button aria-label="search" title="Search" onClick={() => setIsSearchOpen(!isSearchOpen)}>🔍</button>
          <button aria-label="login" title="Login" onClick={() => setIsLoginOpen(true)}>👤</button>
          <button onClick={toggleLang} aria-label="change language" title="Change language">
            {lang === 'en' ? 'KO' : 'EN'}
          </button>
        </div>
        {/* Fake Search Bar */}
        {isSearchOpen && (
          <div className={styles.searchBar}>
            <input 
              type="text" 
              placeholder={lang === 'en' ? "Search for items..." : "아이템을 검색해보세요..."} 
              className={styles.searchInput}
            />
            <button onClick={() => setIsSearchOpen(false)} className={styles.closeSearch}>✕</button>
          </div>
        )}
      </div>

      {/* Fake Login Modal */}
      {isLoginOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsLoginOpen(false)}>
          <div className={styles.loginModal} onClick={(e) => e.stopPropagation()}>
            <h3>{lang === 'en' ? 'Login' : '로그인'}</h3>
            <p className={styles.loginDesc}>{lang === 'en' ? 'Welcome to Sleekmood' : '슬릭무드에 오신 것을 환영합니다'}</p>
            
            <button className={`${styles.socialButton} ${styles.kakao}`}>Kakao Login</button>
            <button className={`${styles.socialButton} ${styles.google}`}>Google Login</button>
            
            <button className={styles.closeModal} onClick={() => setIsLoginOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </header>
  );
}