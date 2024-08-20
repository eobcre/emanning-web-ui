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
  const [isTitleVisible, setTitleVisible] = useState(false);
  const [isSubTitleVisible, setSubTitleVisible] = useState(false);
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [isArrowVisible, setArrowVisible] = useState(false);
  const [isHoverShowCase, setHoverShowCase] = useState(false);
  const [isHoverResume, setHoverResume] = useState(false);
  const { isDarkMode, toggleDarkMode } = useStore();

  const navigate = useNavigate();

  // scroll top home
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navData = getNavData(scrollToTop, scrollToSection, aboutRef, galleryRef, contactRef);

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
    <div className={`flex flex-col md:py-4 w-full h-screen ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
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
        <Nav isNavOpen={isNavOpen} setNavOpen={setNavOpen} toggleMode={toggleMode} navData={navData} />
      </div>
      <div className='flex flex-col justify-center items-center md:block grow sm:mt-16 px-10'>
        {isTitleVisible && (
          <h1
            className={`custom-font text-[9rem] leading-[9rem] mt-10 sm:text-[14rem] sm:leading-[14rem] uppercase ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'} ${
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
              buttonName={isHoverShowCase ? 'View' : 'Showcase'}
              onClick={() => navigate('./showcase')}
              className={`${
                isDarkMode ? 'bg-dark-mode text-light-mode uppercase font-bold rounded-md mt-6 p-3 w-[10rem]' : 'bg-light-mode text-white uppercase font-bold rounded-md mt-6 p-3 w-[10rem]'
              }`}
              onMouseEnter={() => setHoverShowCase(true)}
              onMouseLeave={() => setHoverShowCase(false)}
            />
            <Button
              buttonName={isHoverResume ? 'View' : 'Resume'}
              className={`${
                isDarkMode ? 'bg-dark-mode text-light-mode uppercase font-bold rounded-md mt-6 p-3 w-[10rem]' : 'bg-light-mode text-white uppercase font-bold rounded-md mt-6 p-3 w-[10rem]'
              }`}
              onMouseEnter={() => setHoverResume(true)}
              onMouseLeave={() => setHoverResume(false)}
              href='/assets/Resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
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

export default Hero;
