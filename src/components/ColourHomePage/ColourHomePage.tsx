import React from 'react';
import OutlinedButton from '../OutlinedButton/OutlinedButton';
import styles from './ColourHomePage.module.css';

interface ColourHomePageProps {
  siteName: string;
  homeHref: string;
  buttonHref: string;
  bgColor: string;
  textColor: string;
  btnText: string;
  btnHover: string;
}

const ColourHomePage: React.FC<ColourHomePageProps> = ({ siteName, homeHref, buttonHref, bgColor, textColor, btnText }) => {
  return (
    <div className={`${styles.container} fullBleed`} style={{ backgroundColor: bgColor }}>
      <h1 className={styles.title} style={{ color: textColor }}>{siteName}</h1>
      <div className={styles.buttonContainer}>
      <button className={styles.buttonClass} style={{ color: textColor}}>
        <a href={buttonHref} className={styles.buttonClass}>{btnText}</a>
      </button>  

        
      </div>
    </div>
  );
};

export default ColourHomePage;
