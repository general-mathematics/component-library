import React from 'react';
import styles from './Summary.module.css';

interface SummaryProps {
  text: string;
}

const Summary: React.FC<SummaryProps> = ({ text }) => {
  return <p className={styles.summary}>{text}</p>;
};

export default Summary;
