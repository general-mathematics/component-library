import React from 'react';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

interface HeroLayoutProps {
  imageSrc: string; // Image source
  imageAlt: string; // Alt text for the image
  heading: string; // Hero heading text
  summary?: string; // Optional summary text
  children?: React.ReactNode; // Children content for additional paragraphs
  topMargin?: string; // Dynamic top margin for the content container
  bottomMargin?: string; // Dynamic bottom margin for the content container
}

const HeroLayout: React.FC<HeroLayoutProps> = ({
  imageSrc,
  imageAlt,
  heading,
  summary,
  children,
  topMargin = '2rem', // Default top margin
  bottomMargin = '6rem', // Default bottom margin
}) => {
  return (
    <>
      <ResponsiveImage
        src={imageSrc}
        alt={imageAlt}
        layoutOptions={{
          isFullBleed: true,
          isSlightBleed: false,
          inGrid: false,
        }}
        styleOptions={{
          objectFit: 'cover',
          objectPosition: 'top center',
          desktopHeight: 'auto',
          mobileHeight: '100vh',
          topMargin: '0rem',
          bottomMargin: '',
        }}
      />
      <div
        className="contentContainer"
        style={{
          marginTop: topMargin,
          marginBottom: bottomMargin,
        }}
      >
        <h1 className="hero-heading">{heading}</h1>
        {summary && <div className="summary">{summary}</div>}
        {children && <div className="children">{children}</div>}
      </div>
    </>
  );
};

export default HeroLayout;
