import Button from '@components/common/button';
import Input from '@components/common/input';
import Logo from '@components/common/logo';
import Header from '@components/layout/header';
import { useState } from 'react';
import AccountConfirmForm from './AccountConfirmForm';
import Footer from '@components/layout/footer';
import { ChevronRight, CircleArrowRight, LogIn } from 'lucide-react';

/**
 * Страница авторизаций
 * @returns {React.ReactNode} - Дочерние компоненты
 */
const LoginPage = () => {
  const [isNewUser, setIsNewUser] = useState<boolean>(false);

  const handleAuthorization = () => {
    setIsNewUser(true);
  };

  const LoginForm = () => {
    return (
      <form onSubmit={handleAuthorization} className="animate__animated animate__bounceInLeft flex flex-col gap-3 max-w-[320px] w-full items-center">
        <Logo size={30} />
        <h4
          className="font-googlesansmedium text-[rgba(0,0,0,.7)] dark:text-[rgba(255,255,255,.7)] mb-1.5"
        >
          Вход в учетную запись
        </h4>
        <Input placeholder="Введите ИИН" type="text" />
        <Input placeholder="Введите пароль" type="password" />
        <Button className='flex justify-center items-center gap-1.5' onClick={() => handleAuthorization()}>
          Войти
          <LogIn size={16} />
        </Button>
      </form>
    );
  };

  return (
    <div className="w-full h-svh flex flex-col items-center">
      <Header />
      <div className="max-w-[1400px] w-full flex flex-col justify-center items-center p-2 my-auto">
        {!isNewUser && <LoginForm />}
        { isNewUser && <AccountConfirmForm toBack={setIsNewUser} /> }
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
