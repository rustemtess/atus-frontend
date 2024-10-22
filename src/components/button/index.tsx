import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

/**
 * Компонент кнопка
 *
 * @param {ButtonProps} children - Дочерние компоненты
 * @returns {JSX.Element}
 *
 * @example
 * <Button>Click me</Button>
 */
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className="bg-white p-2 rounded font-medium">
      {children}
    </button>
  );
};

export default Button;
