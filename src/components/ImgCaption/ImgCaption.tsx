import styles from './ImgCaption.module.css';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

interface ImgCaptionProps {
  src: string;
  alt: string;
  caption: string;
  captionOnRight?: boolean; // Option to display caption on the right side of the image (default: false)
  captionBottom?: boolean;  // Option to display caption at the bottom of the image (default: false)
  fullBleed?: boolean;      // Whether the image should be full-bleed
  slightBleed?: boolean;    // Whether the image should have slight bleed
  fullBleedMobile?: boolean; // Whether the image should be full-bleed on mobile
}

const ImgCaption: React.FC<ImgCaptionProps> = ({
  src,
  alt,
  caption,
  captionOnRight = false,
  captionBottom = false,
  fullBleed = false,
  slightBleed = false,
  fullBleedMobile = false,
}) => {
  return (
    <section
      className={`${styles.imgCaptionWrapper} ${
        captionBottom ? 'captionBottom' : ''
      }`}
    >
      <div
        className={`${styles.imgCaptionContainer} ${
          captionOnRight ? styles.captionRight : styles.captionLeft
        }`}
      >
        <div className={`${styles.imageWrapper}`}>
          <ResponsiveImage 
            src={src} 
            alt={alt} 
            fullBleed={fullBleed} 
            slightBleed={slightBleed} 
            fullBleedMobile={fullBleedMobile}
          />
        </div>
        <div className={styles.captionWrapper}>
          <p className={styles.caption}>{caption}</p>
        </div>
      </div>
    </section>
  );
};

export default ImgCaption;
