// src/components/CustomCookieConsent.tsx
'use client';

import React, { useState, useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';

interface CustomCookieConsentProps {
  onAccept: () => void;
}

const CustomCookieConsent: React.FC<CustomCookieConsentProps> = ({ onAccept }) => {
  const handleAccept = () => {
    onAccept(); // Call the onAccept function passed down from RootLayout
  };

  return (
    <CookieConsent
      onAccept={handleAccept}
      enableDeclineButton
      declineButtonText="Decline"
      buttonText="Accept"
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

export default CustomCookieConsent;
