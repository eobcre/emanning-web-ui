type ButtonProps = {
    buttonName: string;
    className: string;
  };
  
  const Button: React.FC<ButtonProps> = ({ buttonName, className }) => {
    return <button className={className}>{buttonName}</button>;
  };
  
  export default Button;