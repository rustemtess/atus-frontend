import Button from '@components/button';
import Input from '@components/input';
import useAuth from '@hooks/useAuth';
import useTheme from '@hooks/useTheme';
import ContainerLayout from '@layouts/ContainerLayout';

/**
 * Страница авторизаций
 * @returns {React.ReactNode} - Дочерние компоненты
 */
const LoginPage = () => {
  const { login } = useAuth();
  const { toggleTheme } = useTheme();

  return (
    <ContainerLayout>
      <div className="max-w-[1400px] w-full flex flex-col justify-center items-center p-2">
        <button onClick={toggleTheme}>toggle</button>
        <form className="flex flex-col gap-3 max-w-[320px] w-full">
          <Input placeholder="Введите ИИН" type="text" />
          <Input placeholder="Введите пароль" type="password" />
          <Button>Войти</Button>
        </form>
      </div>
    </ContainerLayout>
  );
};

export default LoginPage;
