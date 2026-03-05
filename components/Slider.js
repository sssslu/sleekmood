import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Slider.module.css';
import { useLang } from '../pages/_app';

// 각 슬라이드를 구성하는 좌우 패널 이미지.
// 이미지를 교체할 때는 src/alt만 수정하세요.
const PANEL_IMAGES = [
  { src: '/images/hero.png', alt: 'Main visual' },
  { src: '/images/rose.png', alt: 'Rose visual' },
];

export default function Slider() {
  const { t } = useLang();
  const router = useRouter();
  // 슬라이드 데이터는 translations에서 관리합니다.
  // 슬라이드 내용(heading, description, link 등)을 수정하려면
  // translations.js의 slides 배열을 편집하세요.
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
            {PANEL_IMAGES.map((image) => (
              <div key={image.src} className={styles.panel}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={idx === 0}
                  />
                </div>
              </div>
            ))}
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