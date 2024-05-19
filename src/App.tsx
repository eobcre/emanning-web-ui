import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './pages/HeroSection';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HeroSection />} />
      </Routes>
    </>
  );
};

export default App;
