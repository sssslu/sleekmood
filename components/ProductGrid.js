import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductGrid.module.css';
import { useLang } from '../pages/_app';

// 한 번에 보여줄 기본 상품 수.
// 숫자를 바꾸면 초기 및 '더보기' 시 로드 수가 함께 변경됩니다.
const INITIAL_DISPLAY_COUNT = 12;

// 상품에 imageUrl이 없을 경우 사용할 폴백 이미지 목록.
// 상품이 추가될 경우 이 배열을 함께 늘려주세요.
const FALLBACK_IMAGES = [
  '/images/product1.png',
  '/images/product2.png',
  '/images/product3.png',
  '/images/product4.png',
  '/images/product5.png',
  '/images/product6.png',
  '/images/product7.png',
];

export default function ProductGrid() {
  const { t } = useLang();
  const products = t('products') || [];
  const title = t('productSectionTitle');
  const learnMore = t('learnMore');
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  const displayedProducts = products.slice(0, displayCount);
  const hasMoreProducts = displayCount < products.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + INITIAL_DISPLAY_COUNT);
  };

  return (
    <section id="shop" className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {displayedProducts.map((product, idx) => (
          <Link key={idx} href={`/product/${idx}`} className={styles.item}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.imageUrl || FALLBACK_IMAGES[idx % FALLBACK_IMAGES.length]}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.details}>
              <div className={styles.name}>{product.name}</div>
              <div className={styles.price}>{product.price}</div>
            </div>
          </Link>
        ))}
      </div>
      {hasMoreProducts && (
        <button onClick={handleLoadMore} className={styles.learnMore}>
          {learnMore}
        </button>
      )}
    </section>
  );
}