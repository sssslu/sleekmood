import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import { useLang } from './_app';
import styles from '../styles/Collection.module.css';

export default function Collection() {
  const { t } = useLang();

  return (
    <>
      <Head>
        <title>Sleekmood - Collection</title>
        <meta name="description" content="Sleekmood 2026 SS Collection - Soft Classic & Romantic Mood" />
        <link rel="icon" href="/fav.png" type="image/png" />
        
        {/* Open Graph for social media previews */}
        <meta property="og:title" content="Sleekmood - 2026 SS Collection" />
        <meta property="og:description" content="Soft Classic & Romantic Mood" />
        <meta property="og:image" content="/banner.png" />
        <meta property="og:url" content="https://sleekmood.com/collection" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>2026 SS Collection</h1>
            <p className={styles.subtitle}>Soft Classic & Romantic Mood</p>
          </div>
          
          <div className={styles.content}>
            <div className={styles.heroSection}>
              <div className={styles.heroImage}>
                <Image 
                  src="/images/rose.png" 
                  alt="Collection Hero" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div className={styles.heroText}>
                <h2>The New Standard</h2>
                <p>
                  Our 2026 Spring/Summer collection redefines elegance with soft silhouettes and timeless designs.
                  Inspired by the classic beauty of nature and modern simplicity.
                </p>
              </div>
            </div>

            <div className={styles.grid}>
              <div className={styles.gridItem}>
                <Image src="/images/product1.png" alt="Mood" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.gridItem}>
                <Image src="/images/product7.png" alt="Look 1" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.gridItem}>
                <Image src="/images/product2.png" alt="Look 2" fill style={{ objectFit: 'cover' }} />
              </div>
               <div className={styles.gridItem}>
                <Image src="/images/product3.png" alt="Look 3" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}