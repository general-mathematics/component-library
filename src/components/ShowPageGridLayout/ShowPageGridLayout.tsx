import React from 'react';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import styles from '../ShowPageGridLayout/ShowPageGridLayout.module.css';

interface ShowPageGridLayout {
  imageSrc: string; // Image source URL
  imageAlt: string; // Alt text for the image
  heading: string; // Main heading text
  summary?: string; // Optional summary text
  children?: React.ReactNode; // Additional content below the summary
  gridArea?: string; // Allows setting specific grid placement
}

const GridLayout: React.FC<ShowPageGridLayout> = ({
  imageSrc,
  imageAlt,
  heading,
  summary,
  children,
  gridArea = 'auto', // Default to auto placement
}) => {
  return (
    <div className={styles.gridContainer}>
      <ResponsiveImage
        src={imageSrc}
        alt={imageAlt}
        layoutOptions={{
          isFullBleed: false,
          isSlightBleed: false,
          inGrid: true, // Enables grid behavior
        }}
        styleOptions={{
          objectFit: 'cover',
          objectPosition: 'top center',
          desktopHeight: 'auto',
          mobileHeight: '60vh',
          gridArea, // Pass grid area dynamically
        }}
      />
      <div className="gridContent">
        <h1 className="hero-heading">{heading}</h1>
        {summary && <div className="summary">{summary}</div>}
        {children}
      </div>
    </div>
  );
};

export default GridLayout;
