import { ButtonProps } from './types';

const CustomButton: React.FC<ButtonProps> = ({ type, className, onClick, children }) => {
  return (
    <button type={type} className={`font-bold ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
