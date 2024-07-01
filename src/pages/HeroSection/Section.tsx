import { useRetrieveRepos } from '../../hooks/useRepo';
import RepoCard from './RepoCard';

interface RepoData {
  id: number;
  name: string;
}

const Section = () => {
  const { data: repoData } = useRetrieveRepos();
  console.log('repoData', repoData);

  const divStyle = 'grid lg:grid-cols-2 gap-8 bg-[#333333] bg-opacity-50 rounded -mt-3 sm:-mt-4 p-20 md:-mt-5 lg:-mt-6';
  const h1Style = 'custom-text text-5xl font-bold sm:text-[8vw]';

  return (
    <div className='bg-[#0D1225] px-10 pb-20 md:pl-10 w-full md:pr-48'>
      <div className='xl:px-36'>
        <div className='pt-20'>
          <h1 className={h1Style}>GitHub</h1>
          <div className={divStyle}>
            {repoData?.map((data: RepoData) => (
              <div key={data.id}>
                <RepoCard data={data} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
