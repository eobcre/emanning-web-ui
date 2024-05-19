import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './pages/HeroSection';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HeroSection />} />
    </Routes>
  );
};

export default App;
