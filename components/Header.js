import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import { useLang } from '../pages/_app';

// 로그인 모달 내부의 뷰 상태.
// 'login'  → 아이디/비밀번호 입력 화면
// 'signup' → 초대코드 입력 화면
const VIEW_LOGIN = 'login';
const VIEW_SIGNUP = 'signup';

export default function Header() {
  const { lang, toggleLang, t, isLoginOpen, openLogin, closeLogin } = useLang();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // 모달 내 현재 뷰 ('login' | 'signup')
  const [view, setView] = useState(VIEW_LOGIN);
  // 로그인/초대코드 오류 메시지
  const [loginError, setLoginError] = useState('');
  const [inviteError, setInviteError] = useState('');

  // 모달 열릴 때마다 초기 상태로 리셋
  const handleOpen = () => {
    setView(VIEW_LOGIN);
    setLoginError('');
    setInviteError('');
    openLogin();
  };

  const handleClose = () => {
    setView(VIEW_LOGIN);
    setLoginError('');
    setInviteError('');
    closeLogin();
  };

  // 로그인 버튼 → 무조건 오류 표시
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError(t('header.loginError'));
  };

  // 초대코드 확인 버튼 → 무조건 오류 표시
  const handleInviteSubmit = (e) => {
    e.preventDefault();
    setInviteError(t('header.inviteError'));
  };

  return (
    <header className={styles.header}>
      {/* ─── 상단 네비게이션 바 ─── */}
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
          <button aria-label="login" title="Login" onClick={handleOpen}>👤</button>
          <button onClick={toggleLang} aria-label="change language" title="Change language">
            {lang === 'en' ? 'KO' : 'EN'}
          </button>
        </div>

        {/* 검색 바 */}
        {isSearchOpen && (
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder={t('header.searchPlaceholder')}
              className={styles.searchInput}
            />
            <button onClick={() => setIsSearchOpen(false)} className={styles.closeSearch}>✕</button>
          </div>
        )}
      </div>

      {/* ─── 로그인 / 회원가입 모달 ─── */}
      {isLoginOpen && (
        <div className={styles.modalOverlay} onClick={handleClose}>
          <div className={styles.loginModal} onClick={(e) => e.stopPropagation()}>

            {/* ── 로그인 뷰 ── */}
            {view === VIEW_LOGIN && (
              <>
                <h3 className={styles.modalTitle}>{t('header.loginTitle')}</h3>
                <form className={styles.loginForm} onSubmit={handleLoginSubmit}>
                  <input
                    type="text"
                    placeholder={t('header.idPlaceholder')}
                    className={styles.loginInput}
                    autoComplete="username"
                  />
                  <input
                    type="password"
                    placeholder={t('header.pwPlaceholder')}
                    className={styles.loginInput}
                    autoComplete="current-password"
                  />
                  {loginError && (
                    <p className={styles.errorMsg}>{loginError}</p>
                  )}
                  <button type="submit" className={styles.loginSubmitButton}>
                    {t('header.loginButton')}
                  </button>
                </form>
                <button
                  className={styles.switchViewButton}
                  onClick={() => { setView(VIEW_SIGNUP); setLoginError(''); }}
                >
                  {t('header.signupButton')}
                </button>
                <button className={styles.closeModal} onClick={handleClose}>{t('header.close')}</button>
              </>
            )}

            {/* ── 회원가입(초대코드) 뷰 ── */}
            {view === VIEW_SIGNUP && (
              <>
                <h3 className={styles.modalTitle}>{t('header.inviteTitle')}</h3>
                <form className={styles.loginForm} onSubmit={handleInviteSubmit}>
                  <label className={styles.inviteLabel}>{t('header.inviteLabel')}</label>
                  <input
                    type="text"
                    placeholder={t('header.invitePlaceholder')}
                    className={styles.loginInput}
                  />
                  {inviteError && (
                    <p className={styles.errorMsg}>{inviteError}</p>
                  )}
                  <button type="submit" className={styles.loginSubmitButton}>
                    {t('header.inviteConfirm')}
                  </button>
                </form>
                <p className={styles.inviteNote}>{t('header.inviteNote')}</p>
                <button
                  className={styles.switchViewButton}
                  onClick={() => { setView(VIEW_LOGIN); setInviteError(''); }}
                >
                  {t('header.backToLogin')}
                </button>
                <button className={styles.closeModal} onClick={handleClose}>{t('header.close')}</button>
              </>
            )}

          </div>
        </div>
      )}
    </header>
  );
}