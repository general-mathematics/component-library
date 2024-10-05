import React from 'react';
import styles from './ResponsiveImage.module.css';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  fullBleed?: boolean;
  slightBleed?: boolean;
  fullBleedMobile?: boolean; // New prop for full-bleed on mobile
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src = 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHViZXxlbnwwfDF8MHx8fDI%3D',
  alt = 'A beautiful scene',
  fullBleed = false,
  slightBleed = false,
  fullBleedMobile = false, // Default to false
}) => {
  let containerClass = styles.container;

  if (fullBleed) {
    containerClass = styles.containerFullBleed;
  } else if (slightBleed) {
    containerClass = styles.containerSlightBleed;
  } else if (fullBleedMobile) {
    containerClass = styles.containerFullBleedMobile;
  }

  const srcSet = `
    ${src.replace('2400w', '800w')} 800w,
    ${src.replace('2400w', '1200w')} 1200w,
    ${src.replace('2400w', '1600w')} 1600w,
    ${src} 2400w
  `;

  const sizes = `
    (max-width: 800px) 100vw, 
    (max-width: 1200px) 75vw, 
    (max-width: 1600px) 50vw, 
    100vw
  `;

  return (
    <div className={containerClass}>
      <img
        src={src}
        alt={alt}
        srcSet={srcSet}
        sizes={sizes}
        className={styles.image}
        loading="lazy"
      />
    </div>
  );
};

export default ResponsiveImage;
