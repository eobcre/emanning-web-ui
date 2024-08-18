import { useRef } from 'react';
import Hero from './pages/Hero';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollNextSection = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement> | null) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero scrollNextSection={scrollNextSection} scrollToSection={scrollToSection} aboutRef={aboutRef} galleryRef={galleryRef} contactRef={contactRef} />
      <div ref={aboutRef} className='text-white bg-light-mode p-10'>
        <About />
      </div>
      <div ref={galleryRef} className='text-white bg-light-mode px-10'>
        <Gallery />
      </div>
      <div ref={contactRef} className='text-white bg-light-mode px-10 pt-10'>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
