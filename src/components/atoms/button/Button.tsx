import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button className="button" onClick={onClick}>
    {label}
  </button>
);
