import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

/**
 * Защита маршрутов
 *
 * @param {ProtectedRouteProps} props - Свойства компонента
 * @returns {React.ReactNode} - Дочерние компоненты или компонент перенаправления
 *
 * @example
 *
 * <ProtectedRoute isAuthenticated={true}>
 *     <Dashboard />
 * </ProtectedRoute>
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isAuthenticated = false,
}) => {
  return isAuthenticated ? <>{children}</> : <Navigate to={'/login'} />;
};

export default ProtectedRoute;
