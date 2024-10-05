import React from 'react';
import styles from '../OutlinedButton/OutlinedButton.module.css';

interface OutlinedButtonProps {
  href?: string; // Optional href prop for linking
  children: React.ReactNode; // To accept any content
}

const OutlinedButton: React.FC<OutlinedButtonProps> = ({ href, children }) => {
  const buttonClass = styles.button;

  return href ? (
    <a className={buttonClass} href={href}>
      {children}
    </a>
  ) : (
    <button className={buttonClass}>
      {children}
    </button>
  );
};

// Example usage
export const SelectedProjectsButton = () => (
  <OutlinedButton href="/projects">Selected Projects</OutlinedButton>
);

export default OutlinedButton;
