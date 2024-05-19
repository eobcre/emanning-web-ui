import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './pages/HeroSection';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
