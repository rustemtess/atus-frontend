import useTheme from '@hooks/useTheme';
import { Sun, Moon, Languages } from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed max-w-[1400px] w-full flex p-4 justify-between items-center backdrop-blur-sm">
      <div></div>
      <div className='flex gap-2'>
        { /** <button
          className="p-2 rounded-md bg-gray-100 dark:bg-[#1A1A1A]"
        >
          <Languages color={(theme === 'dark') ? '#9d9d9d' : '#4c4c4c'} />
        </button> */ }
        <button
          className="p-2 rounded-md bg-gray-100 dark:bg-[#1A1A1A]"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <Sun color='#9d9d9d' />
          ) : (
            <Moon color='#4c4c4c' />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
