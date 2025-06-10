import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { getNavData } from '../data/data';
import useStore from '../store/useStore';
import Nav from '../components/Nav';
import Button from '../components/Button';

interface MainProps {
  scrollToSection: (section: React.RefObject<HTMLDivElement> | null) => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  galleryRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<MainProps> = ({ scrollToSection, aboutRef, galleryRef, contactRef }) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isTitleVisible, setTitleVisible] = useState(false);
  const [isNextTitleVisible, setNextTitleVisible] = useState(false);
  const [isHoverCV, setHoverCV] = useState(false);
  const { isDarkMode, toggleDarkMode } = useStore();

  const navigate = useNavigate();

  // scroll top home
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navData = getNavData(scrollToTop, scrollToSection, aboutRef, galleryRef, contactRef);

  useEffect(() => {
    const delayTitle = setTimeout(() => {
      setTitleVisible(true);
    }, 500);

    const delayNextTitle = setTimeout(() => {
      setNextTitleVisible(true);
    }, 1500);

    return () => {
      clearTimeout(delayTitle);
      clearTimeout(delayNextTitle);
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
      {/* nav */}
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
      {/* contents */}
      <div className='flex flex-col justify-center min-h-screen px-10'>
        <div className='leading-none'>
          <span className={`custom-500-font text-[0.8rem] sm:text-[1.1rem] uppercase ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>Emmy Manning | Full Stack Developer</span>
          <h1 className={`custom-600-font text-[4.6rem] sm:text-[14vw] tracking-tighter ${isDarkMode ? 'text-olive' : 'text-yellow'} ${isTitleVisible ? 'fade-in' : ''}`}>iCREATE</h1>
          <h1 className={`custom-500-font text-[5.2rem] sm:text-[14vw] tracking-tighter ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'} ${isNextTitleVisible ? 'fade-in' : ''}`}>eNJOY</h1>
        </div>
        <Button
          buttonName={isHoverCV ? <Icon icon='material-symbols:play-arrow' width='24' height='24' /> : <span className='custom-500-font tracking-widest'>CV</span>}
          onClick={() => navigate('./emanning-cv')}
          className={`${isDarkMode ? 'bg-dark-mode text-light-mode rounded-full mt-6 p-4 w-[3.5rem]' : 'bg-light-mode text-white rounded-full mt-6 p-4 w-[3.5rem]'}`}
          onMouseEnter={() => setHoverCV(true)}
          onMouseLeave={() => setHoverCV(false)}
        />
      </div>
    </div>
  );
};

export default Hero;
