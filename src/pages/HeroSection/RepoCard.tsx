import useStore from '../../store/useStore';
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
    <div className={`border-2 rounded px-6 py-5 w-full ${isDarkMode ? 'border-[#e4d5b7]' : 'border-[#303030]'}`}>
      <div className='flex justify-between items-center'>
        <span className={`text-xl uppercase font-bold  ${isDarkMode ? 'text-[#e4d5b7]' : 'text-[#303030]'}`}>{data.name}</span>
        <GoFileDirectory size={40} className={isDarkMode ? 'text-[#e4d5b7]' : 'text-[#303030]'} />
      </div>
      <div className={`text-lg pt-4 ${isDarkMode ? 'text-[#e4d5b7]' : 'text-[#303030]'}`}>
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
