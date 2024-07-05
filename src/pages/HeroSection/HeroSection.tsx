import { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import TypeWrite from '../../components/TypeWrite';
import IconBar from '../../components/IconBar';
import Footer from '../../components/Footer';
import Section from './Section';

const HeroSection = () => {
  const [isTitleLoaded, setTitleLoaded] = useState(false);

  const nextSectionRef = useRef<HTMLDivElement | null>(null);
  const h1Style = 'text-white text-3xl uppercase font-bold pb-4 sm:text-[5vw]';

  // to load after 1 second
  useEffect(() => {
    const titleLoadTimeout = setTimeout(() => {
      setTitleLoaded(true);
    }, 1000);
    return () => clearTimeout(titleLoadTimeout);
  }, []);

  const scrollNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className='flex flex-col bg-[#0D1225] pl-4 py-10 h-screen'>
        <h1 className={h1Style}>Emmy Manning</h1>
        <div className='flex flex-col h-[30vw]'>
          {isTitleLoaded && <TypeWrite text={['Full Stack', 'Developer.']} delay={200} />}
        </div>
        <IconBar />
        <div className='flex-grow'></div>
        <div className='flex justify-center'>
          <div className='cursor-pointer mb-5' onClick={scrollNextSection}>
            <FaChevronDown size={30} className='text-white hover:opacity-70' />
          </div>
        </div>
      </div>
      <div id='next-section' ref={nextSectionRef} className='text-white bg-[#0D1225] p-10'>
        <Section />
      </div>
      <Footer />
    </div>
  );
};

export default HeroSection;
