import React from 'react';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

interface SlightBleedLayoutProps {
  imageSrc: string; // Image source URL
  imageAlt: string; // Alt text for the image
  heading: string; // Main heading text
  summary?: string; // Optional summary text
  children?: React.ReactNode; // Additional content below the summary
  topMargin?: string; // Desktop-specific top margin
  bottomMargin?: string; // Desktop-specific bottom margin
  mobileTopMargin?: string; // Mobile-specific top margin
  mobileBottomMargin?: string; // Mobile-specific bottom margin
}

const SlightBleedLayout: React.FC<SlightBleedLayoutProps> = ({
  imageSrc,
  imageAlt,
  heading,
  summary,
  children,
  topMargin,
  bottomMargin = '', // Default desktop bottom margin
  mobileTopMargin = '0rem', // Default mobile top margin
  mobileBottomMargin = '', // Default mobile bottom margin
}) => {
  return (
    <>
      <div className="slightBleedLayoutContainer">
        <ResponsiveImage
          src={imageSrc}
          alt={imageAlt}
          layoutOptions={{
            isFullBleed: false,
            isSlightBleed: true, // Enable slight bleed behavior
            inGrid: false,
          }}
          styleOptions={{
            objectFit: 'cover',
            objectPosition: 'top center',
            desktopHeight: 'auto',
            mobileHeight: '60vh',
            topMargin,
            bottomMargin,
            mobileTopMargin,
            mobileBottomMargin,
          }}
        />
        <div className="contentContainer">
          <h1 className="hero-heading">{heading}</h1>
          {summary && <div className="summary">{summary}</div>}
          {children}
        </div>
      </div>
    </>
  );
};

export default SlightBleedLayout;
