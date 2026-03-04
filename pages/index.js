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
        <link rel="icon" href="/fav.png" type="image/png" />
        
        {/* Open Graph for social media previews */}
        <meta property="og:title" content="Sleekmood – Soft Classic Collection" />
        <meta property="og:description" content="Discover Sleekmood's latest Soft Classic collection. Elegant silhouettes, soft fabrics and timeless designs." />
        <meta property="og:image" content="https://sleekmood.com/images/banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://sleekmood.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sleekmood – Soft Classic Collection" />
        <meta name="twitter:description" content="Elegant and timeless fashion collection" />
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