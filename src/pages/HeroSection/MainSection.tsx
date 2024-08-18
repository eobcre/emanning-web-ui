import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { getNavData } from '../../data/data';
import useStore from '../../store/useStore';
import Button from '../../components/Button';
import { FaChevronDown } from 'react-icons/fa6';

interface MainProps {
  scrollNextSection: () => void;
}

const MainSection: React.FC<MainProps> = ({ scrollNextSection }) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isTitleVisible, setTitleVisible] = useState(false);
  const [isSubTitleVisible, setSubTitleVisible] = useState(false);
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [isArrowVisible, setArrowVisible] = useState(false);
  const { isDarkMode, toggleDarkMode } = useStore();

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const delayTitle = setTimeout(() => {
      setTitleVisible(true);
    }, 500);

    const delaySubTitle = setTimeout(() => {
      setSubTitleVisible(true);
    }, 1500);

    const delayButton = setTimeout(() => {
      setButtonVisible(true);
    }, 3000);

    const delayArrow = setTimeout(() => {
      setArrowVisible(true);
    }, 4000);

    return () => {
      clearTimeout(delayTitle);
      clearTimeout(delaySubTitle);
      clearTimeout(delayButton);
      clearTimeout(delayArrow);
    };
  }, []);

  const toggleMode = () => {
    toggleDarkMode();
  };

  return (
    <div className={`flex flex-col md:py-4 w-full min-h-screen ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className='md:block'>
        <div className='flex justify-end p-4 md:hidden'>
          <Button
            buttonName={
              isNavOpen ? (
                <Icon icon='zondicons:close' className={`text-3xl fixed top-4 right-4 z-20 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`} />
              ) : (
                <Icon icon='fontisto:nav-icon-grid' className={`text-[#303030] text-3xl fixed top-4 right-4 z-20 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`} />
              )
            }
            onClick={toggleNav}
          />
        </div>
        <nav
          className={`fixed top-0 right-0 z-10 border-l-2 border-l-[#303030] h-full transition-transform transform md:bg-transparent md:static md:transform-none md:flex md:justify-between md:items-center md:px-2 ${
            isNavOpen ? 'translate-x-0' : 'translate-x-full'
          } ${isDarkMode ? 'dark-nav-bg' : 'light-nav-bg'}`}
        >
          <div></div>
          <ul className={`flex flex-col gap-10 text-center mt-14 px-10 py-4 md:flex-row md:gap-14 md:mt-0 md:p-0 text-xl font-bold uppercase ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
            {getNavData.map((item) => (
              <li key={item.id} className='nav-item'>
                <Link to={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <div className='flex justify-center items-center mt-14 md:mt-0'>
            <Button
              buttonName={isDarkMode ? <Icon icon='mdi:light-switch-off' /> : <Icon icon='mdi:light-switch' />}
              className={`text-[4rem] ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}
              onClick={toggleMode}
            />
          </div>
        </nav>
      </div>
      <div className='grow sm:block sm:mt-10 px-10'>
        {isTitleVisible && (
          <h1
            className={`custom-font text-[9rem] leading-[9rem] mt-10 sm:mt-0 sm:text-[14rem] sm:leading-[14rem] uppercase ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'} ${
              isTitleVisible ? 'block-fade-in' : ''
            }`}
          >
            Craft
            <br />
            And Dev
          </h1>
        )}
        {isSubTitleVisible && (
          <p className={`text-xl font-bold uppercase py-3 ${isDarkMode ? 'text-[#e4d5b7]' : 'text-[#303030]'} ${isSubTitleVisible ? 'block-fade-in' : ''}`}>Mern Stack Developer</p>
        )}
        {isButtonVisible && (
          <div className={`flex gap-7 ${isButtonVisible ? 'block-fade-in' : ''}`}>
            <Button
              buttonName='Showcase'
              className={`${
                isDarkMode ? 'bg-dark-mode text-light-mode uppercase font-bold rounded-md mt-6 p-3 w-[10rem]' : 'bg-light-mode text-dark-mode uppercase font-bold rounded-md mt-6 p-3 w-[10rem]'
              }`}
            />
            <Button
              buttonName='Resume'
              className={`${
                isDarkMode ? 'bg-dark-mode text-light-mode uppercase font-bold rounded-md mt-6 p-3 w-[10rem]' : 'bg-light-mode text-dark-mode uppercase font-bold rounded-md mt-6 p-3 w-[10rem]'
              }`}
            />
          </div>
        )}
      </div>
      {isArrowVisible && (
        <div className='flex justify-center mb-4'>
          <div onClick={scrollNextSection}>
            <FaChevronDown size={30} className={`cursor-pointer hover:opacity-70 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainSection;
