import React from 'react';
import styles from './ResponsiveImage.module.css';

interface LayoutProps {
  fullBleed?: boolean;
  slightBleed?: boolean;
  fullBleedMobile?: boolean;
  useGrid?: boolean;
}

interface StyleProps {
  objectFit?: React.CSSProperties['objectFit'];
  objectPosition?: React.CSSProperties['objectPosition'];
  height?: string; // Set desktop height dynamically when using component.
  heightMobile?: string; // Set mobile height dynamically when using component.
  marginTop?: string; // Optional top margin.
  marginBottom?: string; // Optional bottom margin.
}

interface ResponsiveImageProps {
  src: string;
  alt: string;
  layout?: LayoutProps;
  styleOverrides?: StyleProps;
  className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  layout = {},
  styleOverrides = {},
  className = '',
}) => {
  const {
    fullBleed = false,
    slightBleed = false,
    fullBleedMobile = false,
    useGrid = false,
  } = layout;

  const {
    objectFit = 'cover',
    objectPosition = 'center',
    height = undefined, // Only apply for desktop via CSS
    heightMobile = undefined, // Default to CSS-defined value
    marginTop,
    marginBottom,
  } = styleOverrides;

  const containerClass = `${styles.container} ${
    fullBleed
      ? styles.containerFullBleed
      : slightBleed
      ? styles.containerSlightBleed
      : fullBleedMobile
      ? styles.containerFullBleedMobile
      : ''
  } ${useGrid ? styles.gridContainer : ''}`;

  return (
    <div
      className={containerClass}
      style={{
        marginTop: marginTop || undefined, // Use prop or CSS default
        marginBottom: marginBottom || undefined, // Use prop or CSS default
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`${styles.image} ${className}`}
        style={{
          objectFit,
          objectPosition,
          ...(heightMobile && { '--mobile-height': heightMobile }),
          ...(height && { '--desktop-height': height }),
        }}
        loading="lazy"
      />
    </div>
  );
};

export default ResponsiveImage;
