import React from 'react';

interface BetadataProps {
  title: string;
  description: string;
  keywords: string;
  viewport?: string
}

const Betadata: React.FC<BetadataProps> = ({ title, description, keywords }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  );
};

export default Betadata;
