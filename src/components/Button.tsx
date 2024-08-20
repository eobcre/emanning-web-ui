import { ReactNode } from 'react';

type ButtonProps = {
  buttonName: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const Button: React.FC<ButtonProps> = ({ buttonName, className, onClick, onMouseEnter, onMouseLeave, href, target, rel }) => {
  return (
    <button className={className} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <a href={href} target={target} rel={rel}>
        {buttonName}
      </a>
    </button>
  );
};

export default Button;
