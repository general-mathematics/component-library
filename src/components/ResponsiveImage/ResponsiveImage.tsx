'use client'; // This marks it as a client-side component

import React from 'react';
import styles from './ResponsiveImage.module.css';

interface ResponsiveImageProps {
  src: string; // Image source URL
  alt: string; // Alt text for accessibility
  layoutOptions?: {
    isFullBleed?: boolean; // Makes the image full bleed across the viewport
    isSlightBleed?: boolean; // Makes the image slightly exceed the container
    inGrid?: boolean; // Specifies if the image is part of a grid layout
  };
  styleOptions?: {
    objectFit?: React.CSSProperties['objectFit']; // How the image fits the container
    objectPosition?: React.CSSProperties['objectPosition']; // Positioning of the image content
    desktopHeight?: string; // Height on desktop
    mobileHeight?: string; // Height on mobile
    desktopMaxWidth?: string; // Max width on desktop
    mobileMaxWidth?: string; // Max width on mobile
    topMargin?: string; // Top margin for desktop
    bottomMargin?: string; // Bottom margin for desktop
    mobileTopMargin?: string; // Top margin for mobile
    mobileBottomMargin?: string; // Bottom margin for mobile
    gridArea?: string; // NEW: Specifies the grid-area for grid layout
  };
  containerClassName?: string; // Additional CSS class for the container
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  layoutOptions = {},
  styleOptions = {},
  containerClassName = '',
}) => {
  const {
    isFullBleed = false,
    isSlightBleed = false,
    inGrid = false, // NEW: Determines if the image is part of a grid
  } = layoutOptions;

  const {
    objectFit = 'cover',
    objectPosition = 'center',
    desktopHeight = '50vh',
    mobileHeight = '100vh',
    topMargin = '0',
    bottomMargin = '0',
    mobileTopMargin = '0',
    mobileBottomMargin = '0',
    gridArea = 'auto', // NEW: Grid-area default
  } = styleOptions;

  const shouldSlightBleed = isSlightBleed && !isFullBleed && !inGrid;

  // Set fixed width behavior based on layout
  let layoutClass = '';
  if (isFullBleed) {
    layoutClass = styles.fullBleed;
  } else if (isSlightBleed) {
    layoutClass = styles.slightBleed;
  } else if (inGrid) {
    layoutClass = styles.localGridContainer;
  }

  return (
    <div className={styles.imageWrapper}>
      <div
        className={`${layoutClass} ${containerClassName}`}
        style={
          {
            '--desktop-top-margin': topMargin,
            '--desktop-bottom-margin': bottomMargin,
            '--mobile-top-margin': mobileTopMargin,
            '--mobile-bottom-margin': mobileBottomMargin,
            '--desktop-height': desktopHeight,
            '--mobile-height': mobileHeight,
            '--grid-area': gridArea,
          } as React.CSSProperties
        }
      >
        <img
          src={src}
          alt={alt}
          className={styles.image}
          style={{
            objectFit,
            objectPosition,
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ResponsiveImage;
