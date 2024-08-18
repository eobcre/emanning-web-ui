import useStore from '../store/useStore';
import { GoFileDirectory } from 'react-icons/go';

interface RepoCardProps {
  data: {
    id: number;
    name: string;
    description?: string;
  };
}

const RepoCard: React.FC<RepoCardProps> = ({ data }) => {
  const { isDarkMode } = useStore();

  return (
    <div className={`border-2 rounded box-shadow px-6 py-5 w-full ${isDarkMode ? 'border-dark-mode' : 'border-light-mode'}`}>
      <div className='flex justify-between items-center'>
        <span className={`text-xl uppercase font-bold  ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>{data.name}</span>
        <GoFileDirectory size={40} className={isDarkMode ? 'text-dark-mode' : 'text-light-mode'} />
      </div>
      <div className={`text-lg pt-4 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis provident, iusto molestiae dolorum cumque eveniet vel velit cupiditate alias, qui distinctio? Atque labore saepe est
          similique doloremque adipisci deleniti cumque!
        </p>
        {/* <p>{data.description}</p> */}
      </div>
    </div>
  );
};

export default RepoCard;
