import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Slider.module.css';
import { useLang } from '../pages/_app';

export default function Slider() {
  const { t } = useLang();
  const router = useRouter();
  // Retrieve slide definitions from the translation dictionary. Each
  // slide contains a heading, description and optional labels. We
  // default to an empty array if nothing is returned.
  const slides = t('slides') || [];
  const [current, setCurrent] = useState(0);

  const handleSlideClick = (link) => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <div id="lookbook" className={styles.slider}>
      {slides.map((slide, idx) => {
        const visible = idx === current;
        return (
          <div
            key={idx}
            className={`${styles.slide} ${visible ? styles.visible : styles.hidden}`}
            onClick={() => handleSlideClick(slide.link)}
            style={{ cursor: slide.link ? 'pointer' : 'default' }}
          >
            <div className={styles.panel}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/hero.png"
                  alt="Main visual"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={idx === 0}
                />
              </div>
            </div>
            <div className={styles.panel}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/rose.png"
                  alt="Rose visual"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={idx === 0}
                />
              </div>
            </div>
            <div className={styles.textOverlay}>
              <h2>{slide.heading}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}