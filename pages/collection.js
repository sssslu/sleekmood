import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import { useLang } from './_app';
import styles from '../styles/Collection.module.css';

// 컬렉션 그리드에 표시할 이미지 목록
// 이미지를 추가하거나 순서를 바꾸려면 이 배열만 수정하세요.
const COLLECTION_GRID_IMAGES = [
  { src: '/images/product1.png', alt: 'Mood' },
  { src: '/images/product7.png', alt: 'Look 1' },
  { src: '/images/product2.png', alt: 'Look 2' },
  { src: '/images/product3.png', alt: 'Look 3' },
];

const HERO_IMAGE = { src: '/images/rose.png', alt: 'Collection Hero' };

export default function Collection() {
  const { t } = useLang();

  return (
    <>
      <Head>
        <title>Sleekmood - Collection</title>
        <meta name="description" content="Sleekmood 2026 Special Collection - Soft Classic & Romantic Mood" />
        <link rel="icon" href="/fav.png" type="image/png" />

        {/* Open Graph for social media previews */}
        <meta property="og:title" content="Sleekmood - 2026 Special Collection" />
        <meta property="og:description" content="Soft Classic & Romantic Mood" />
        <meta property="og:image" content="https://sleekmoodkr.com/images/banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://sleekmoodkr.com/collection" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>{t('collection.title')}</h1>
            <p className={styles.subtitle}>{t('collection.subtitle')}</p>
          </div>

          <div className={styles.content}>
            <div className={styles.heroSection}>
              <div className={styles.heroImage}>
                <Image
                  src={HERO_IMAGE.src}
                  alt={HERO_IMAGE.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.heroText}>
                <h2>{t('collection.heroTitle')}</h2>
                <p>{t('collection.heroDesc')}</p>
              </div>
            </div>

            <div className={styles.grid}>
              {COLLECTION_GRID_IMAGES.map(({ src, alt }) => (
                <div key={src} className={styles.gridItem}>
                  <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}