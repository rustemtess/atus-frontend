import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

/**
 * Компонент ввода
 *
 * @param {InputProps} props - Свойства компонента
 * @returns {JSX.Element}
 *
 * @example
 * <Input placeholder='Введите текст' />
 */
const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <input
      {...props}
      className="p-2 px-3 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white"
    />
  );
};

export default Input;
