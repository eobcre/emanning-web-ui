import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';
import Button from '../components/Button';

const ShowCase = () => {
  const { toggleDarkMode, isDarkMode } = useStore();

  const navigate = useNavigate();

  const toggleMode = () => {
    toggleDarkMode();
  };

  return (
    <div className={`h-screen ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className='flex justify-between items-center pl-8 pr-2 py-4'>
        <Icon icon='weui:back-filled' onClick={() => navigate('/')} className='text-5xl hover:opacity-50' />
        <div className='flex flex-col justify-center items-center mt-14 md:mt-0'>
          <Button
            buttonName={isDarkMode ? <Icon icon='mdi:light-switch-off' /> : <Icon icon='mdi:light-switch' />}
            className={`text-[4rem] ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}
            onClick={toggleMode}
          />
          <span className={`font-bold ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>{isDarkMode ? 'OFF' : 'ON'}</span>
        </div>
      </header>
      <div className='py-32 px-28'>
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
