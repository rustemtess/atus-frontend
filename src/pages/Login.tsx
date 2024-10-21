import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

/**
 * Страница авторизаций
 * @returns {React.ReactNode} - Дочерние компоненты
 */
const LoginPage = () => {
  const { login } = useAuth();

  return (
    <>
      Login
      <button onClick={() => login()}>Authenticate</button>
      <Link to={'/profile'}>to Profile</Link>
    </>
  );
};

export default LoginPage;
