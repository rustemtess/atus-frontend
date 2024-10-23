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
      className={`w-full font-vksansregular text-base p-1.5 px-3 rounded border border-[rgb(229,231,235)] dark:border-[rgba(255,255,255,.1)] bg-gray-50 dark:bg-[#1A1A1A] text-gray-900 dark:text-white`}
    />
  );
};

export default Input;
