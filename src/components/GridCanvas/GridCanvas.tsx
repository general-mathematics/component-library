import React from 'react';
import styles from './GridCanvas.module.css'; // ✅ Import the CSS module

interface GridCanvasProps {
  children: React.ReactNode;
  className?: string;
}

const GridCanvas: React.FC<GridCanvasProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className="gridContainer">
      <div
        className={`${styles.gridCanvas} ${className ? styles[className] : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

export default GridCanvas;
