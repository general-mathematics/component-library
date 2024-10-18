import React from 'react';
import styles from '../OutlinedButton/OutlinedButton.module.css';

interface OutlinedButtonProps {
  href?: string; // Optional href prop for linking
  children: React.ReactNode; // To accept any content
  color?: string; //Optional change colour
}

const OutlinedButton: React.FC<OutlinedButtonProps> = ({ href, children, color }) => {
  const buttonClass = styles.button;

  const buttonStyles = {
    borderColor: color, // Border color
    color: color,  // Text color
  };

  return href ? (
    <a 
      className={buttonClass} 
      href={href}
      style={buttonStyles}>
      {children}
    </a>
  ) : (
    <button 
      className={buttonClass}
      style={buttonStyles}>
      {children}
    </button>
  );
};

export default OutlinedButton;
