import React from 'react';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import Betadata from '../Betadata/Betadata';

enum HeadingStyle {
  Hero = 'hero-heading',
  InfoPage = 'infoHeroH1',
}

interface HeroLayoutProps {
  metaTitle: string;
  metaDescription: string;
  imageSrc: string; // Image source
  imageAlt: string; // Alt text for the image
  heading: string; // Hero heading text
  summary?: string; // Optional summary text
  children?: React.ReactNode; // Children content for additional paragraphs
  topMargin?: string; // Dynamic top margin for the content container
  bottomMargin?: string; // Dynamic bottom margin for the content container
  objPos?: string;
  headingStyle: HeadingStyle;
}

const HeroLayout: React.FC<HeroLayoutProps> = ({
  metaTitle,
  metaDescription,
  imageSrc,
  imageAlt,
  heading,
  summary,
  children,
  topMargin = '2rem', // Default top margin
  bottomMargin = '6rem', // Default bottom margin
  objPos = 'top center',
  headingStyle = HeadingStyle.Hero,
}) => {
  return (
    <>
      <Betadata title={metaTitle} description={metaDescription}></Betadata>
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
          objectPosition: objPos,
          desktopHeight: 'auto',
          mobileHeight: '100vh',
          topMargin: '0rem',
          bottomMargin: '',
        }}
      />

      <h1 className={headingStyle}>{heading}</h1>
      <div
        className="contentContainer"
        style={{
          marginTop: topMargin,
          marginBottom: bottomMargin,
        }}
      >
        {summary && <div className="summary">{summary}</div>}
        {children && <div className="children">{children}</div>}
      </div>
    </>
  );
};

export default HeroLayout;
export { HeadingStyle }; // ✅ Explicitly export the enum
