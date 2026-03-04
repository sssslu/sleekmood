import Image from 'next/image';
import styles from './ProductGrid.module.css';
import { useLang } from '../pages/_app';

export default function ProductGrid() {
  const { t } = useLang();
  const products = t('products') || [];
  const title = t('productSectionTitle');
  const learnMore = t('learnMore');
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

  return (
    <section id="shop" className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {products.map((product, idx) => (
          <div key={idx} className={styles.item}>
            <div className={styles.imageWrapper}>
              <Image
                src={images[idx % images.length]}
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
      <a href="#" className={styles.learnMore}>{learnMore}</a>
    </section>
  );
}