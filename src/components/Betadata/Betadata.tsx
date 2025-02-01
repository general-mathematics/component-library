import React from 'react';

interface BetadataProps {
  title: string;
  description: string;
  viewport?: string;
}

const Betadata: React.FC<BetadataProps> = ({ title, description }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
};

export default Betadata;
