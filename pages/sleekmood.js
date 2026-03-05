import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import { useLang } from './_app';
import styles from '../styles/Sleekmood.module.css';

// 아트 이미지 목록. 이미지를 추가하거나 교체하려면 이 배열만 수정하세요.
const ART_IMAGES = [
  '/images/arts/art1.png',
  '/images/arts/art2.png',
  '/images/arts/art3.png',
  '/images/arts/art4.png',
  '/images/arts/art5.png',
  '/images/arts/art6.png',
];

export default function SleekmoodPage() {
  const { t } = useLang();

  return (
    <>
      <Head>
        <title>Sleekmood - {t('nav.with')}</title>
        <meta name="description" content="Sleekmood Art & Inspiration" />
        <link rel="icon" href="/fav.png" type="image/png" />
        
        {/* Open Graph for social media previews */}
        <meta property="og:title" content="Sleekmood Collection" />
        <meta property="og:description" content="Artistic Inspiration & Mood" />
        <meta property="og:image" content="https://sleekmoodkr.com/images/banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://sleekmoodkr.com/sleekmood" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {ART_IMAGES.map((src, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={src}
                    alt={`Sleekmood Art ${idx + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}