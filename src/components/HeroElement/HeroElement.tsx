// HeroElement.tsx
import styles from './HeroElement.module.css';

interface HeroElementProps {
  bgColorHSL: string; // "Hue, Saturation, Lightness" as a string
  textColorHSL?: string; // "Hue, Saturation, Lightness" as a string
  heading: string;
}

const HeroElement: React.FC<HeroElementProps> = ({ bgColorHSL, textColorHSL, heading }) => {
  return (
    <section className={`${styles.heroWrapper} fullBleed`}>
      <div className={`${styles.heroContainer}`} style={{ backgroundColor: `hsl(${bgColorHSL})` }}>
        <div className={`${styles.largeHeading}`}>
          <h1 style={{ color: `hsl(${textColorHSL})` }}>{heading}</h1>
        </div>
      </div>
    </section>

  );
};

export default HeroElement;
