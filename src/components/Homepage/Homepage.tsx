import React from 'react';
import OutlinedButton from '../OutlinedButton/OutlinedButton';
import styles from './Homepage.module.css';

interface HomepageProps {
  siteName: string;
  homeHref: string;
  buttonHref: string;
  bgColor: string;
  textColor: string;
  btnText: string;
}

const Homepage: React.FC<HomepageProps> = ({ siteName, homeHref, buttonHref, bgColor, textColor, btnText }) => {
  return (
    <div className={`${styles.container} fullBleed`} style={{ backgroundColor: bgColor }}>
      <h1 className={styles.title} style={{ color: textColor }}>{siteName}</h1>
      <div className={styles.buttonContainer}>
        <OutlinedButton href={buttonHref}>{btnText}</OutlinedButton>
      </div>
    </div>
  );
};

export default Homepage;
