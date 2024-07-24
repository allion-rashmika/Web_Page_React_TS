import React from 'react';

interface TextProps {
  children: React.ReactNode;
  type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; // Add more types as needed
  className?: string; 
}

export const Text: React.FC<TextProps> = ({ children, type = 'p', className = '' }) => {
  const Tag = type;
  return <Tag className={`text ${className}`}>{children}</Tag>;
};
