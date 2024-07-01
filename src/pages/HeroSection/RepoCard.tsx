import { GoFileDirectory } from 'react-icons/go';

interface RepoCardProps {
  data: {
    id: number;
    name: string;
    description?: string;
  };
}

const RepoCard: React.FC<RepoCardProps> = ({ data }) => {
  return (
    <div className='border rounded px-6 py-5 w-full'>
      <div className='flex justify-between items-center'>
        <span>{data.name}</span>
        <GoFileDirectory size={28} />
      </div>
      <div className='pt-4'>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis provident, iusto molestiae dolorum cumque eveniet
          vel velit cupiditate alias, qui distinctio? Atque labore saepe est similique doloremque adipisci deleniti cumque!
        </p>
        {/* <p>{data.description}</p> */}
      </div>
    </div>
  );
};

export default RepoCard;
