import { useRef } from 'react';
import Footer from '../../components/Footer';
import Section from './Section';
import MainSection from './MainSection';

const HeroSection = () => {
  const nextSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <MainSection scrollNextSection={scrollNextSection} />
      <div id='next-section' ref={nextSectionRef} className='text-white bg-[#303030] p-10'>
        <Section />
      </div>
      <Footer />
    </>
  );
};

export default HeroSection;
