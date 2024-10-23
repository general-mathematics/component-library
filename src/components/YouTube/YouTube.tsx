import React from 'react';
import styles from './YouTube.module.css';

interface YouTubeProps {
  videoId: string;               // Required video ID
  width?: number;                // Optional width for layout purposes
  height?: number;               // Optional height for layout purposes
  aspectRatio?: '16:9' | '4:3'; // Optional aspect ratio
  marginTop?: string;            // Optional top margin
  marginBottom?: string;         // Optional bottom margin
}

const YouTube: React.FC<YouTubeProps> = ({ 
  videoId, 
  width = 560, 
  height = 315, 
  aspectRatio = '16:9', 
  marginTop = '0',              // Default margin-top
  marginBottom = '0'            // Default margin-bottom
}) => {
  // Determine wrapper class based on aspect ratio
  const wrapperClass = aspectRatio === '4:3' 
    ? `${styles.youtubeWrapper} ${styles.legacy}` 
    : styles.youtubeWrapper;

  return (
    <div 
      className={wrapperClass} 
      style={{ 
        maxWidth: width, 
        marginTop, 
        marginBottom 
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ width: '100%', height: '100%' }} // Fill the parent container
      ></iframe>
    </div>
  );
};

export default YouTube;
