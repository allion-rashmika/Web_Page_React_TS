import React from 'react';


interface InputProps {
  placeholder: string;
  type?: string; 
  className?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder, type = 'text', className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
};
