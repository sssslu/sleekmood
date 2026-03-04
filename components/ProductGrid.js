'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ProductGrid.module.css';
import { useLang } from '../pages/_app';

export default function ProductGrid() {
  const { t } = useLang();
  const products = t('products') || [];
  const title = t('productSectionTitle');
  const learnMore = t('learnMore');
  const [displayCount, setDisplayCount] = useState(12);
  
  // Mapping of images corresponding to the products. If more products
  // are added, extend this array accordingly. The images live in
  // public/images and will be served statically by Next.js.
  const images = [
    '/images/product1.png',
    '/images/product2.png',
    '/images/product3.png',
    '/images/product4.png',
    '/images/product5.png',
    '/images/product6.png',
    '/images/product7.png',
  ];

  const displayedProducts = products.slice(0, displayCount);
  const hasMoreProducts = displayCount < products.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 12);
  };

  return (
    <section id="shop" className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {displayedProducts.map((product, idx) => (
          <div key={idx} className={styles.item}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.imageUrl || images[idx % images.length]}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.details}>
              <div className={styles.name}>{product.name}</div>
              <div className={styles.price}>{product.price}</div>
            </div>
          </div>
        ))}
      </div>
      {hasMoreProducts && (
        <button onClick={handleLoadMore} className={styles.learnMore}>{learnMore}</button>
      )}
    </section>
  );
}