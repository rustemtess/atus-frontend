import Logo from "@components/common/logo";
import useTheme from "@hooks/useTheme";
import { Theme } from "@styles/themeStyle";
import { Sun, Moon } from 'lucide-react';

const Header = () => {

    const { theme, toggleTheme } = useTheme();

    return <header className="fixed max-w-[1400px] w-full flex p-4 py-5 justify-between items-center backdrop-blur-sm">
        <div></div>
        <button className={`p-2 rounded-md border border-[${Theme.light.borderColor}] dark:border-[${Theme.dark.borderColor}]`} onClick={toggleTheme}>
            { theme === 'dark' ? <Sun color={Theme.dark.themeIcon} /> : <Moon color={Theme.light.themeIcon} /> }
        </button>
    </header>
};

export default Header;