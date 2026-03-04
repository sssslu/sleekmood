import Head from 'next/head';
import Header from '../components/Header';
import Slider from '../components/Slider';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sleekmood – Soft Classic Collection</title>
        <meta
          name="description"
          content="Discover Sleekmood's latest Soft Classic collection. Elegant silhouettes, soft fabrics and timeless designs available in English and Korean."
        />
      </Head>
      <Header />
      <main>
        {/* Hero slider section */}
        <Slider />
        {/* Product grid section */}
        <ProductGrid />
      </main>
    </>
  );
}