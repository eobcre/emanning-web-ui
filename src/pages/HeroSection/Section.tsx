import useStore from '../../store/useStore';
import { useRetrieveRepos } from '../../hooks/useRepo';
import RepoCard from './RepoCard';
import Button from '../../components/Button';

interface RepoData {
  id: number;
  name: string;
}

const Section = () => {
  const { isDarkMode } = useStore();
  const { data: repoData } = useRetrieveRepos();
  // console.log('repoData', repoData);

  return (
    <div className={`rounded-md px-10 pb-20 w-full ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className='xl:px-36'>
        <div className='pt-20'>
          <div className='relative'>
            <h1 className={`custom-font text-5xl uppercase mb-14 sm:text-[8vw] xs:mb-0  ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>Stack</h1>
            {/* <div className={`absolute top-[4.5rem] border-t-[20px] border-t-[#303030] opacity-50 w-full`}></div> */}
          </div>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 rounded -mt-3 sm:-mt-4 lg:p-20 md:-mt-5 lg:-mt-6`}>
            {repoData?.map((data: RepoData) => (
              <div key={data.id}>
                <RepoCard data={data} />
              </div>
            ))}
          </div>
          <div className='col-span-2 text-center'>
            <Button
              buttonName='More'
              className={`${isDarkMode ? 'bg-dark-mode text-light-mode uppercase font-bold rounded-md p-3 w-[10rem]' : 'bg-light-mode text-white uppercase font-bold rounded-md p-3 w-[10rem]'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
