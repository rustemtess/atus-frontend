import { Theme } from '@styles/themeStyle';
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
      className={`w-full font-vksansregular text-lg p-1.5 px-3 rounded border border-[${Theme.light.borderColor}] dark:border-[${Theme.dark.borderColor}] bg-gray-50 dark:bg-[#1A1A1A] text-gray-900 dark:text-white`}
    />
  );
};

export default Input;
