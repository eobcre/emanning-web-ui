import { FaChevronDown } from 'react-icons/fa6';
import TypeWrite from '../../components/TypeWrite';
import IconBar from '../../components/IconBar';

interface MainProps {
  h1Style: string;
  scrollNextSection: () => void;
  isTitleLoaded: boolean;
}

const MainSection: React.FC<MainProps> = ({ h1Style, scrollNextSection, isTitleLoaded }) => {
  return (
    <div className='flex flex-col bg-[#0D1225] pl-4 py-10 h-screen'>
      <h1 className={h1Style}>Emmy Manning</h1>
      <div className='flex flex-col h-[30vw]'>
        {isTitleLoaded && <TypeWrite text={['Full Stack', 'Developer.']} delay={200} />}
      </div>
      <IconBar />
      <div className='flex-grow'></div>
      <div className='flex justify-center'>
        <div className='cursor-pointer mb-5' onClick={scrollNextSection}>
          <FaChevronDown size={30} className='text-white hover:opacity-70' />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
