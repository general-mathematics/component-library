import React from 'react';
import OutlinedButton from '../OutlinedButton/OutlinedButton';
import styles from './DotsHome.module.css';

const DotsHome: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dot to Dot</h1>
      <div className={styles.buttonContainer}>
        <OutlinedButton href="/projects">Selected Projects</OutlinedButton>
      </div>
    </div>
  );
};

export default DotsHome;
