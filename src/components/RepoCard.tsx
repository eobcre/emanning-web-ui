import useStore from '../store/useStore';
import { FaLink } from 'react-icons/fa6';

interface RepoCardProps {
  data: {
    id: number;
    name: string;
    html_url: string;
    description?: string;
  };
}

const RepoCard: React.FC<RepoCardProps> = ({ data }) => {
  const { isDarkMode } = useStore();
  // console.log('data', data);

  return (
    <div className={`px-6 py-5 w-full min-h-auto ${isDarkMode ? 'border-dark-mode' : 'border-light-mode'}`}>
      <div className='flex justify-between items-center'>
        <span className={`text-xl font-bold  ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>{data.name}</span>
        <a href={data.html_url}>
          <FaLink size={30} className={`hover:opacity-60 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`} />
        </a>
      </div>
      <div className={`text-lg pt-4 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
        <p className='opacity-80'>{data.description}</p>
      </div>
    </div>
  );
};

export default RepoCard;
