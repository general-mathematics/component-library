import React from 'react';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import Betadata from '../Betadata/Betadata';

interface SlightBleedLayoutProps {
  metaTitle: string;
  metaDescription: string;
  imageSrc: string;
  imageAlt: string;
  heading: string;
  summary: string;
  children?: React.ReactNode;
  topMargin?: string;
  bottomMargin?: string;
  mobileTopMargin?: string;
  mobileBottomMargin?: string;
  showImage: boolean; // 🔥 Add this new prop
}

const SlightBleedLayout: React.FC<SlightBleedLayoutProps> = ({
  metaTitle,
  metaDescription,
  imageSrc,
  imageAlt,
  heading,
  summary,
  children,
  topMargin,
  bottomMargin = '',
  mobileTopMargin = '0rem',
  mobileBottomMargin = '',
  showImage = true, // 🔥 Default to true
}) => {
  return (
    <>
      <Betadata title={metaTitle} description={metaDescription} />
      <div
        className={
          showImage
            ? 'slightBleedLayoutContainerNoImage'
            : 'slightBleedLayoutContainer'
        }
      >
        {showImage && (
          <ResponsiveImage
            src={imageSrc}
            alt={imageAlt}
            layoutOptions={{
              isFullBleed: false,
              isSlightBleed: true,
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
        )}
        <h1 className="hero-heading">{heading}</h1>
        <div className="contentContainer">
          {summary && <div className="summary">{summary}</div>}
          {children}
        </div>
      </div>
    </>
  );
};

export default SlightBleedLayout;
