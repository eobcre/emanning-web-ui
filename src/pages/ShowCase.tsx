import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';

const ShowCase = () => {
  const { isDarkMode } = useStore();

  const navigate = useNavigate();

  return (
    <div className={`h-screen ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className='pl-6 sm:pl-8 pr-2 py-4'>
        <Icon icon='weui:back-filled' onClick={() => navigate('/')} className='text-5xl hover:opacity-50' />
      </header>
      <div className='flex justify-center items-center h-[70vh] sm:py-32 sm:px-28'>
        <h1 className={`temporary-font text-[6rem] leading-[6rem] sm:text-[12rem] sm:leading-[12rem] uppercase ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
          Coming
          <br />
          Soon
        </h1>
      </div>
    </div>
  );
};

export default ShowCase;
