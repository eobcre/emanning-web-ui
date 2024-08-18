import React, { ReactNode } from 'react';

type ButtonProps = {
  buttonName: ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ buttonName, className, onClick }) => {
  return <button className={className} onClick={onClick}>{buttonName}</button>;
};

export default Button;
