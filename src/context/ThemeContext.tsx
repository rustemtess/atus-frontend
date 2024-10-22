import { createContext, useEffect, useState } from 'react';

/**
 * Тип данных для контекста темы.
 *
 * @interface ThemeContextType
 * @property {`'light'|'dark'`} theme - Строка, указывающая на активную тему (светлая или темная).
 * @property {() => void} toggleTheme - Функция для переключения темы.
 */
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

/**
 * Контекст темы.
 *
 * Предоставляет доступ к текущей теме и функции переключения в любом компоненте приложения.
 */
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

/**
 * Пропсы для компонента ThemeProvider.
 *
 * @interface ThemeProviderProps
 * @property {React.ReactNode} children - Дочерние компоненты, которые будут иметь доступ к контексту темы.
 */
interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Извлекает тему из localStorage, если она существует, или возвращает значение по умолчанию.
 *
 * @returns { 'light' | 'dark' } - Текущая тема
 */
const getInitialTheme = (): 'light' | 'dark' => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'dark' ? 'dark' : 'light';
};

/**
 * Обновляет класс темы для HTML элемента.
 *
 * @param { 'light' | 'dark' } theme - Текущая тема
 */
const updateThemeClass = (theme: 'light' | 'dark') => {
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
};

/**
 * Обновляет метатег theme-color для браузера.
 */
const updateMetaThemeColor = (theme: 'light' | 'dark') => {
  const metaThemeColor = document.querySelector("meta[name='theme-color']");
  if (metaThemeColor) {
    const newColor = theme === 'light' ? '#ffffff' : '#000000'; // Установите ваши цвета
    metaThemeColor.setAttribute('content', newColor);
  }
};

/**
 * Провайдер темы.
 *
 * Компонент, который предоставляет контекст темы и управляет её состоянием.
 *
 * @component
 * @param {ThemeProviderProps} props - Пропсы для ThemeProvider.
 * @returns {JSX.Element} - Компонент, предоставляющий контекст темы дочерним элементам.
 */
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);

  /**
   * Переключает тему между светлой и тёмной.
   */
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeClass(newTheme);
    updateMetaThemeColor(newTheme);
  };

  /**
   * Эффект для первоначального применения класса темы после монтирования компонента.
   */
  useEffect(() => {
    updateThemeClass(theme);
    updateMetaThemeColor(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
