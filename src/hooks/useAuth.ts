import { useContext } from 'react';
import { AuthContext } from '@context/AuthContext';

/**
 * Хук для получения контекста аутентификации.
 *
 * Этот хук предоставляет доступ к данным аутентификации и методам,
 * которые находятся в `AuthProvider`.
 *
 * @throws {Error} Если хук используется вне компонента `AuthProvider`.
 *
 * @returns {object} Контекст аутентификации, содержащий данные и методы,
 * связанные с аутентификацией (например, `user`, `login`, `logout`).
 *
 * @example
 * const { user, login, logout } = useAuth();
 */
const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export default useAuth;
