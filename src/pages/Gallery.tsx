// import { useState } from 'react';
import WorkCard from '../components/WorkCard';
import useStore from '../store/useStore';
// import { useRetrieveRepos } from '../hooks/useRepo';
// import RepoCard from '../components/RepoCard';
// import Button from '../components/Button';

// interface RepoData {
//   id: number;
//   name: string;
//   html_url: string;
//   description?: string;
// }

const Gallery = () => {
  // const [isHoverMore, setHoverMore] = useState(false);
  const { isDarkMode } = useStore();
  // const { data: repoData } = useRetrieveRepos();
  // console.log('repoData', repoData);

  return (
    <div className={`md:px-10 lg:rounded-md w-full ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className='lg:px-36'>
        <div className='pt-10 md:pt-20'>
          <div className='relative'>
            <h1 className={`flex flex-col text-7xl sm:text-[11vw] tracking-tighter mb-14 xs:mb-0 pl-6 md:pl-0 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
              <span className={`text-[7rem] md:text-[10rem] ${isDarkMode ? 'text-olive' : 'text-yellow'}`}>03</span>
              <span className='custom-500-font'>iWORK .</span>
            </h1>
            {/* work cards */}
            <WorkCard />
            {/* <h1 className={`custom-font text-5xl uppercase mb-14 sm:text-[8vw] xs:mb-0 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>Latest Code</h1> */}
          </div>
          {/* <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 rounded -mt-3 sm:-mt-4 lg:p-20 md:-mt-5 lg:-mt-6`}>
            {repoData?.map((data: RepoData) => (
              <div key={data.id}>
                <RepoCard data={data} />
              </div>
            ))}
          </div> */}
          {/* <div className='col-span-2 text-center mt-10 md:mt-0'>
            <Button
              buttonName={isHoverMore ? 'View' : 'More'}
              className={`uppercase font-bold rounded-md p-3 w-[10rem] ${isDarkMode ? 'bg-dark-mode text-light-mode' : 'bg-light-mode text-white'}`}
              onMouseEnter={() => setHoverMore(true)}
              onMouseLeave={() => setHoverMore(false)}
              href='https://github.com/eobcre?tab=repositories'
              target='_blank'
              rel='noopener noreferrer'
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
