import { useState, useEffect } from 'react';
import TypeWrite from '../../components/TypeWrite';
import IconBar from '../../components/IconBar';

const HeroSection = () => {
  const [isTitleLoaded, setTitleLoaded] = useState(false);

  const h1Style = 'text-white text-3xl uppercase font-bold pb-4 sm:text-[5vw]';

  useEffect(() => {
    const titleLoadTimeout = setTimeout(() => {
      setTitleLoaded(true);
    }, 1000);
    return () => clearTimeout(titleLoadTimeout);
  }, []);

  return (
    <div className='flex flex-col bg-[#0D1225] pl-4 py-10 h-screen'>
      <h1 className={h1Style}>Emmy Manning</h1>
      <div className='flex flex-col h-[30vw]'>
        {isTitleLoaded && <TypeWrite text={['Full Stack', 'Developer.']} delay={200} />}
      </div>
      <IconBar />
    </div>
  );
};

export default HeroSection;
