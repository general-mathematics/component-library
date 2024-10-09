'use client'

// src/components/GoogleAnalytics.tsx
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  trackingId: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ trackingId }) => {
  useEffect(() => {
    // Load the Google Tag script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', trackingId);

    // Cleanup: Remove the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, [trackingId]);

  return null; // This component does not render anything
};

export default GoogleAnalytics;
