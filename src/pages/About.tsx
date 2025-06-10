import { useState, useEffect, useRef } from 'react';
import useStore from '../store/useStore';
import { useMediaQuery } from 'react-responsive';
import Experience from './sections/Experience';
import Hello from './sections/Hello';

const About = () => {
  const [isVisible, setVisible] = useState(false);
  const { isDarkMode } = useStore();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  // ref
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('isVisible:', isVisible);
  }, [isVisible]);

  // scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '-20% 0px -40% 0px',
      }
    );

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [isDesktop]);

  return (
    <>
      {/* mobile */}
      {isMobile && (
        <div className={`w-full min-h-screen px-6 py-20 pb-10 ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
          <div className='md:flex'>
            <div className='flex contents-scroll md:w-1/2'>
              <h1 className={`flex flex-col text-7xl sm:text-[11vw] pb-16 md:pt-28 md:pb-0 md:px-0 md:flex tracking-tight ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
                <span className={`text-[7rem] md:text-[10rem] ${isDarkMode ? 'text-olive' : 'text-yellow'}`}>01</span>
                <span className='custom-500-font'>hELLO .</span>
              </h1>
            </div>
            <div className='flex flex-col gap-14 md:gap-20 md:px-14 md:py-20 md:w-1/2 min-h-screen'>
              <Hello />
              <h1 className={`flex md:flex flex-col text-7xl sm:text-[11vw] md:pt-28 md:pb-0 md:px-0 tracking-tight ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
                <span className={`text-[7rem] md:text-[10rem] ${isDarkMode ? 'text-olive' : 'text-yellow'}`}>02</span>
                <span className='custom-500-font'>
                  iEXPER
                  <br />
                  IENCE .
                </span>
              </h1>
              <div>
                <Experience />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* desktop */}
      {isDesktop && (
        <div className={`rounded-md w-full min-h-screen pb-10 py-20 md:px-10 ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
          <div className='md:flex'>
            {/* left container */}
            <div className='flex contents-scroll md:w-1/2'>
              <h1 className={`flex md:flex flex-col text-7xl sm:text-[11vw] px-6 pb-16 md:pt-28 md:px-0 md:pb-0 tracking-tighter ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
                <span className={`text-[7rem] md:text-[10rem] ${isDarkMode ? 'text-olive' : 'text-yellow'}`}>{isVisible ? '02' : '01'}</span>
                <span className='custom-500-font'>
                  {isVisible ? (
                    <span>
                      iEXPERI
                      <br />
                      ENCE .
                    </span>
                  ) : (
                    'hELLO .'
                  )}
                </span>
              </h1>
            </div>
            {/* right container */}
            <div className='flex flex-col gap-20 px-6 md:px-14 md:py-20 md:w-1/2 min-h-screen'>
              <Hello />
              <div ref={sectionRef}>
                <Experience />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
