import Button from '@components/common/button';
import useAuth from '@hooks/useAuth';
import { Fingerprint } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AccountConfirmFormProps {
  toBack?: Function
}

const AccountConfirmForm: React.FC<AccountConfirmFormProps> = ({toBack}) => {

  const {login,isAuthenticated,getVistorId} = useAuth();
  const navigate = useNavigate();

  /**
   * Нужно чтобы не появлялся scroll при анимации
   */
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 1500)
  }, []);

  const handleAccountConfirm = (e) => {
    login()
  };

  return (
    <form onSubmit={handleAccountConfirm} className="animate__animated animate__bounceInUp flex flex-col gap-3 max-w-[320px] w-full items-center">
      <h4
        className="mb-1.5 flex items-center justify-center font-vksansmedium text-lg text-[rgba(0,0,0,.8)] dark:text-[rgba(255,255,255,.7)]"
      >
        Вход через Atus ID
      </h4>
      <div className="w-full text-center">
        <div className='flex items-center gap-2.5 p-3'>
          <h2 className='text-base font-vksansmedium bg-orange-500 text-white min-w-[45px] h-[45px] flex justify-center items-center rounded-full'>ЖP</h2>
          <div className="flex flex-col text-left">
            <span className="font-googlesansmedium text-base text-gray-900 dark:text-gray-200 truncate max-w-[240px] w-full">Жумабек Рустем</span>
            <span className='font-googlesansregular text-sm text-gray-700 dark:text-gray-400 mt-[-0.2em]'>+7 (708) 829-42-78</span>
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-googlesansregular mt-3">
          Подтверждая, вы соглашаетесь на обработку ваших данных для нашей системы
        </p>
      </div>
      <Button className="flex justify-center items-center gap-1.5 bg-green-600 dark:bg-green-600 dark:text-white">
        <Fingerprint size={18} />
        Подтверждаю
      </Button>
      <Button onClick={() => toBack(false)} className="mt-[-0.3em]">Назад</Button>
    </form>
  );
};

export default AccountConfirmForm;
