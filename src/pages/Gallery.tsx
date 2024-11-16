import { useState } from 'react';
import useStore from '../store/useStore';
import { useRetrieveRepos } from '../hooks/useRepo';
import RepoCard from '../components/RepoCard';
import Button from '../components/Button';
import Work_Task_Image from '../assets/image.png';
import Work_Balance_App from '../assets/balance_app.png'
import Work_Unsplash_Image from '../assets/unsplash_screen.png';
interface RepoData {
  id: number;
  name: string;
  html_url: string;
  description?: string;
}

const Gallery = () => {
  const [isHoverMore, setHoverMore] = useState(false);
  const { isDarkMode } = useStore();
  const { data: repoData } = useRetrieveRepos();
  // console.log('repoData', repoData);

  return (
    <div className={`sm:rounded-md px-10 pb-20 w-full ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className='xl:px-36'>
        <div className='pt-20'>
          <div className='relative'>
            <h1 className={`custom-font text-5xl uppercase mb-14 sm:text-[8vw] xs:mb-0 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>Work</h1>
            <div className='flex items-center gap-2 pb-28'>
              <a href='https://emanning-app.xyz' target='_blank' rel='noopener noreferrer' className='hover:opacity-70'>
                <img src={Work_Task_Image} alt='image' className='rounded-md w-[320px]' />
              </a>
              <div className='relative'>
              <a href='https:/balanceapp.io' target='_blank' rel='noopener noreferrer' className='hover:opacity-70'>
                <img src={Work_Balance_App} alt='image' className='rounded-md w-[436px]' />
              </a>
              </div>
              <div className='relative'>
                <img src={Work_Unsplash_Image} alt='image' className='rounded-md opacity-50 w-[440px] h-[255px]' />
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-dark font-bold uppercase'>Coming Soon...</p>
              </div>
            </div>
            <h1 className={`custom-font text-5xl uppercase mb-14 sm:text-[8vw] xs:mb-0 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>Latest Code</h1>
            {/* <div className={`absolute top-[4.5rem] border-t-[20px] border-t-[#303030] opacity-50 w-full`}></div> */}
          </div>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 rounded -mt-3 sm:-mt-4 lg:p-20 md:-mt-5 lg:-mt-6`}>
            {repoData?.map((data: RepoData) => (
              <div key={data.id}>
                <RepoCard data={data} />
              </div>
            ))}
          </div>
          <div className='col-span-2 text-center mt-10 md:mt-0'>
            <Button
              buttonName={isHoverMore ? 'View' : 'More'}
              className={`uppercase font-bold rounded-md p-3 w-[10rem] ${isDarkMode ? 'bg-dark-mode text-light-mode' : 'bg-light-mode text-white'}`}
              onMouseEnter={() => setHoverMore(true)}
              onMouseLeave={() => setHoverMore(false)}
              href='https://github.com/eobcre?tab=repositories'
              target='_blank'
              rel='noopener noreferrer'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
