import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { getNavData } from '../data/data';
import useStore from '../store/useStore';
import Nav from '../components/Nav';
import Button from '../components/Button';
import { FaChevronDown } from 'react-icons/fa6';

interface MainProps {
  scrollNextSection: () => void;
  scrollToSection: (section: React.RefObject<HTMLDivElement> | null) => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  galleryRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<MainProps> = ({ scrollNextSection, scrollToSection, aboutRef, galleryRef, contactRef }) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isNameVisible, setNameVisible] = useState(false);
  const [isTitleVisible, setTitleVisible] = useState(false);
  const [isSubTitleVisible, setSubTitleVisible] = useState(false);
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [isArrowVisible, setArrowVisible] = useState(false);
  const [isHoverCV, setHoverCV] = useState(false);
  const { isDarkMode, toggleDarkMode } = useStore();

  const navigate = useNavigate();

  // scroll top home
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navData = getNavData(scrollToTop, scrollToSection, aboutRef, galleryRef, contactRef);

  useEffect(() => {
    const delayName = setTimeout(() => {
      setNameVisible(true);
    }, 50);

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
      clearTimeout(delayName);
      clearTimeout(delayTitle);
      clearTimeout(delaySubTitle);
      clearTimeout(delayButton);
      clearTimeout(delayArrow);
    };
  }, []);

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

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
                <Icon icon='fontisto:nav-icon-grid' className={`text-3xl fixed top-4 right-4 z-20 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`} />
              )
            }
            onClick={toggleNav}
          />
        </div>
        <Nav isNavOpen={isNavOpen} setNavOpen={setNavOpen} toggleMode={toggleMode} navData={navData} />
      </div>
      <div className='flex flex-col justify-center items-center min-h-[16rem] md:block grow sm:mt-28 px-10'>
        {isNameVisible && <span className={`text-xl font-bold uppercase pb-[-40px] ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'} ${isNameVisible ? 'block-fade-in' : ''}`}>Emmy Manning</span>}
        {isTitleVisible && (
          <h1
            className={`custom-font text-[8rem] leading-[8rem] mt-4 sm:text-[14rem] sm:leading-[14rem] uppercase ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'} ${
              isTitleVisible ? 'block-fade-in' : ''
            }`}
          >
            Craft
            <br />
            And Dev
          </h1>
        )}
        <div className='min-h-[3rem]'>
          {isSubTitleVisible && (
            <p className={`text-xl font-bold uppercase py-3 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'} ${isSubTitleVisible ? 'block-fade-in' : ''}`}>Full Stack Developer</p>
          )}
        </div>
        <div className='min-h-[6rem]'>
          {isButtonVisible && (
            <div className={`flex gap-7 ${isButtonVisible ? 'block-fade-in' : ''}`}>
              <Button
                buttonName={isHoverCV ? 'View' : 'CV'}
                onClick={() => navigate('./emanning-cv')}
                className={`${
                  isDarkMode ? 'bg-dark-mode text-light-mode uppercase font-bold rounded-md mt-6 p-3 w-[10rem]' : 'bg-light-mode text-white uppercase font-bold rounded-md mt-6 p-3 w-[10rem]'
                }`}
                onMouseEnter={() => setHoverCV(true)}
                onMouseLeave={() => setHoverCV(false)}
              />
            </div>
          )}
        </div>
      </div>
      <div className='min-h-[3rem]'>
        {isArrowVisible && (
          <div className='flex justify-center mb-4'>
            <div onClick={scrollNextSection}>
              <FaChevronDown size={30} className={`cursor-pointer hover:opacity-70 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
