type ButtonProps = {
  buttonName: string;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ buttonName, className, onClick }) => {
  return <button className={className} onClick={onClick}>{buttonName}</button>;
};

export default Button;
