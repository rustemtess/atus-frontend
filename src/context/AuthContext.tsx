import { createContext, useState } from 'react';

/**
 * Тип данных для контекста аутентификации.
 *
 * @interface AuthContextType
 * @property {boolean} isAuthenticated - Флаг, указывающий, аутентифицирован ли пользователь
 * @property {() => void} login - Функция для аутентификации пользователя
 * @property {() => void} logout - Функция для выхода пользователя из системы
 */
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

/**
 * Контекст аутентификации.
 *
 * Используется для доступа к состоянию аутентификации и функциям
 * логина и логаута в любом компоненте приложения.
 */
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

/**
 * Пропсы для компонента AuthProvider.
 *
 * @interface AuthProviderProps
 * @property {React.ReactNode} children - Дочерние компоненты, которые будут иметь доступ к контексту аутентификации.
 */
interface AuthProviderProps {
  children: React.ReactNode;
}

/**
 * Провайдер аутентификации.
 *
 * Компонент, который использует AuthContext для управления состоянием аутентификации.
 *
 * @component
 * @param {AuthProviderProps} props - Пропсы для AuthProvider.
 * @returns {JSX.Element} - Компонент, который предоставляет контекст аутентификации дочерним компонентам.
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  /**
   * Функция для аутентификации пользователя.
   * Устанавливает isAuthenticated в true.
   */
  const login = () => setIsAuthenticated(true);

  /**
   * Функция для выхода пользователя из системы.
   * Устанавливает isAuthenticated в false.
   */
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
