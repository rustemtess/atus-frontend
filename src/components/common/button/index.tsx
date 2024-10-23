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
const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`p-2 pb-2.5 rounded-lg font-vksansmedium w-full text-white dark:text-black bg-[rgba(0,0,0,0.9)] dark:bg-[rgba(255,255,255,0.9)] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
