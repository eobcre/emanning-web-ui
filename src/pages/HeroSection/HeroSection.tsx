import { useState, useEffect, useRef } from 'react';
import Footer from '../../components/Footer';
import Section from './Section';
import MainSection from './MainSection';

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
    <>
      <MainSection h1Style={h1Style} scrollNextSection={scrollNextSection} isTitleLoaded={isTitleLoaded} />
      <div id='next-section' ref={nextSectionRef} className='text-white bg-[#0D1225] p-10'>
        <Section />
      </div>
      <Footer />
    </>
  );
};

export default HeroSection;
