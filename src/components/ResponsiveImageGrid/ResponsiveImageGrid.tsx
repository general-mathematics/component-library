import React from 'react';
import styles from './ResponsiveImageGrid.module.css';

interface ResponsiveImageGridProps {
  src: string;
  alt: string;
  fullBleed?: boolean;
  slightBleed?: boolean;
  fullBleedMobile?: boolean; // New prop for full-bleed on mobile
  className?: string; // New prop to pass a global class
  useGrid?: boolean; // New prop to allow grid styling
}

const ResponsiveImageGrid: React.FC<ResponsiveImageGridProps> = ({
  src = 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHViZXxlbnwwfDF8MHx8fDI%3D',
  alt = 'A beautiful scene',
  fullBleed = false,
  slightBleed = false,
  fullBleedMobile = false, // Default to false
  className = '', // Default to an empty string
  useGrid = false, // Default to false
}) => {
  let containerClass = `${styles.container} ${useGrid ? styles.gridContainer : ''}`;

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
      <img
        src={src}
        alt={alt}
        srcSet={srcSet}
        sizes={sizes}
        className={`${styles.image} ${className}`} // Combine local and global classes
        loading="lazy"
      />
  );
};

export default ResponsiveImageGrid;
