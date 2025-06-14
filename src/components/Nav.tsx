import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import useStore from '../store/useStore';
import Button from './Button';

interface NavItem {
  id: string;
  name: string;
  scroll: () => void;
}

interface NavProps {
  isNavOpen: boolean;
  setNavOpen: (state: boolean) => void;
  toggleMode: () => void;
  navData: NavItem[];
}

const Nav: React.FC<NavProps> = ({ isNavOpen, setNavOpen, toggleMode, navData }) => {
  const { isDarkMode } = useStore();
  const [isResponsive, setResponsive] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  // scrolling background
  const applyNavBg = () => {
    if (ref.current && !isResponsive) {
      const isScrolled = window.scrollY > 0;

      // when scrolling
      if (isScrolled) {
        ref.current.classList.add(isDarkMode ? 'dark-nav-bg' : 'light-nav-bg');
        ref.current.classList.remove(isDarkMode ? 'light-nav-bg' : 'dark-nav-bg');
      } else {
        // when not scrolling
        ref.current.classList.add('bg-transparent');
        ref.current.classList.remove('dark-nav-bg', 'light-nav-bg');
      }
    }
  };

  const onResize = () => {
    const screenWidth = window.innerWidth;
    setResponsive(screenWidth <= 767);
  };

  useEffect(() => {
    onResize();
    applyNavBg();

    window.addEventListener('scroll', applyNavBg);
    window.addEventListener('resize', applyNavBg);

    return () => {
      window.removeEventListener('scroll', applyNavBg);
      window.removeEventListener('resize', applyNavBg);
    };
  }, [isDarkMode]);

  return (
    <nav
      ref={ref}
      className={`fixed top-0 right-0 z-10 border-l-2 border-l-light-mode h-full transition-transform transform md:h-[7rem] md:w-full md:border-none md:transform-none md:flex md:justify-between md:items-center md:px-2 ${
        isNavOpen ? 'translate-x-0' : 'translate-x-full'
      } ${isDarkMode ? 'bg-dark' : 'bg-light'}`}
    >
      <div></div>
      <ul className={`flex flex-col gap-10 text-center mt-14 px-10 py-4 md:flex-row md:gap-14 md:mt-0 md:p-0 text-xl font-bold uppercase ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
        {navData.map((item) => (
          <li
            key={item.id}
            className={`nav-item custom-500-font ${isDarkMode ? 'nav-item-hover-dark' : ''}`}
            onClick={() => {
              item.scroll();
              setNavOpen(false);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div className='flex flex-col justify-center items-center mt-14 md:mt-0'>
        <Button
          buttonName={isDarkMode ? <Icon icon='mdi:light-switch-off' /> : <Icon icon='mdi:light-switch' />}
          className={`text-[4rem] ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}
          onClick={toggleMode}
        />
        <span className={`custom-600-font ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>{isDarkMode ? 'OFF' : 'ON'}</span>
      </div>
    </nav>
  );
};

export default Nav;
