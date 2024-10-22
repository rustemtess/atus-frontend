import Button from '@components/common/button';
import Input from '@components/common/input';
import Logo from '@components/common/logo';
import Header from '@components/layout/header';
import useAuth from '@hooks/useAuth';
import { useState } from 'react';
import { CircleUser } from 'lucide-react';
import { Theme } from '@styles/themeStyle';

/**
 * Страница авторизаций
 * @returns {React.ReactNode} - Дочерние компоненты
 */
const LoginPage = () => {
  const { login } = useAuth();
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const LoginForm = () => {
    return (
      <form className="flex flex-col gap-3 max-w-[320px] w-full items-center">
        <Logo size={30} />
        <h4 className={`font-googlesansmedium text-[rgba(0,0,0,.7)] dark:text-[rgba(255,255,255,.7)] mb-1.5`}>Вход в учетную запись</h4>
        <Input placeholder="Введите ИИН" type="text" />
        <Input placeholder="Введите пароль" type="password" />
        <Button>Войти</Button>
      </form>
    );
  };

  const AccountConfirmForm = () => {
    return (
      <form className="flex flex-col gap-3 max-w-[320px] w-full items-center">
        <h4 className={`font-googlesansmedium text-lg text-[rgba(0,0,0,.7)] dark:text-[rgba(255,255,255,.7)]`}>Atus ID</h4>
        <hr className='w-full mt-1.5' />
        <div className='w-full text-center'>
          <h2 className='font-googlesansmedium text-lg'>Вы — Жумабек Рустем</h2>
          <p className='text-gray-600 text-base font-googlesansmedium mt-[-0.2em] mt-1'>Пожалуйста, подтвердите свою личность, чтобы войти в систему.</p>
        </div>
        <hr className='w-full mb-3' />
        <Button className='bg-green-600 dark:bg-green-600 dark:text-white'>Подтверждаю</Button>
        <Button className='mt-[-0.2em]'>Назад</Button>
      </form>
    );
  }

  return (
    <div className='w-full h-svh flex flex-col items-center'>
      <Header />
      <div className="max-w-[1400px] w-full flex flex-col justify-center items-center p-2 my-auto">
        { !isConfirmed && <AccountConfirmForm /> }
      </div>
    </div>
  );
};

export default LoginPage;
