import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import { useLang } from '../_app';
import styles from '../../styles/Product.module.css';

// 상품 페이지 하단에 표시할 혜택 아이콘 목록.
// 아이콘이나 번역 키를 바꾸려면 이 배열만 수정하세요.
const PERKS = [
  { icon: '🚚', key: 'freeshipping' },
  { icon: '↩️', key: 'returns' },
  { icon: '✅', key: 'guarantee' },
];

export default function ProductPage() {
  const { t, openLogin } = useLang();
  const router = useRouter();
  const { id } = router.query;

  const [isModalOpen, setIsModalOpen] = useState(false);

  // id(인덱스)로 상품 정보를 가져옵니다.
  const products = t('products') || [];
  const productIndex = parseInt(id, 10);
  const product = products[productIndex];

  // 라우터가 준비되지 않았거나 상품이 없을 때 로딩 표시
  if (!router.isReady || !product) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <p style={{ textAlign: 'center', padding: '4rem', color: '#7a6350' }}>
            Loading...
          </p>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{product.name} – Sleekmood</title>
        <meta name="description" content={product.name} />
        <link rel="icon" href="/fav.png" type="image/png" />
      </Head>

      <Header />

      <main className={styles.main}>
        {/* 뒤로가기 */}
        <button className={styles.backButton} onClick={() => router.back()}>
          {t('product.backButton')}
        </button>

        <div className={styles.container}>
          {/* ─── 왼쪽: 상품 이미지 ─── */}
          <div className={styles.imageSection}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* ─── 오른쪽: 상품 정보 ─── */}
          <div className={styles.infoSection}>
            <h1 className={styles.productName}>{product.name}</h1>
            <p className={styles.price}>{product.price}</p>

            <hr className={styles.divider} />

            {/* 혜택 목록 */}
            <div className={styles.perks}>
              {PERKS.map(({ icon, key }) => (
                <span key={key} className={styles.perkItem}>
                  <span className={styles.perkIcon}>{icon}</span>
                  {t(`product.${key}`)}
                </span>
              ))}
            </div>

            <hr className={styles.divider} />

            {/* 구매하기 버튼 */}
            <button
              className={styles.buyButton}
              onClick={() => setIsModalOpen(true)}
            >
              {t('product.buyButton')}
            </button>
          </div>
        </div>
      </main>

      {/* ─── 회원가입 안내 모달 ─── */}
      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={styles.modalIcon}>🔒</span>
            <h2 className={styles.modalTitle}>Sleekmood</h2>
            <p className={styles.modalDesc}>{t('product.signupRequired')}</p>
            <button
              className={styles.modalSignupButton}
              onClick={() => { setIsModalOpen(false); openLogin(); }}
            >
              {t('product.signupButton')}
            </button>
            <button
              className={styles.modalCloseButton}
              onClick={() => setIsModalOpen(false)}
            >
              {t('product.closeButton')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
