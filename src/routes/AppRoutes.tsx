import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from '@pages/Login';
import useAuth from '@hooks/useAuth';

/**
 * Компонент AppRoutes отвечает за маршрутизацию приложения.
 *
 * @returns {React.ReactElement} Элемент маршрутов приложения.
 *
 * @example
 * <AppRoutes />
 */
const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <h1>Profile</h1>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
