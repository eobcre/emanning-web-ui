import { Routes, Route } from 'react-router-dom';
import { useRef } from 'react';
import Hero from './pages/Hero';
import CV from './pages/CV';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export const HomePage = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement> | null) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero scrollToSection={scrollToSection} aboutRef={aboutRef} galleryRef={galleryRef} contactRef={contactRef} />
      <div ref={aboutRef} className='text-white bg-light-mode lg:p-10'>
        <About />
      </div>
      <div ref={galleryRef} className='text-white bg-light-mode lg:px-10'>
        <Gallery />
      </div>
      <div ref={contactRef} className='text-white bg-light-mode lg:px-10 lg:pt-10'>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/emanning-cv' element={<CV />} />
    </Routes>
  );
};

export default App;
