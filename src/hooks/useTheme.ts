import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';

/**
 * Хук для получение контекста темы
 *
 * Этот хук предоставляет доступ к теме и переключению темы,
 * которые находят в `ThemeProvider`.
 *
 * @throws {Error} Если хук используется вне компонента `ThemeProvider`.
 *
 * @returns {object} Контекст темы, содержащий тему и метод,
 * связанные с переключение темы (например, `theme`, `toggleTheme`,).
 *
 * @example
 * const { theme, toggleTheme } = useTheme();
 */
const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }

  return context;
};

export default useTheme;
