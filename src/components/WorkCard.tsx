import useStore from '../store/useStore';
import { getMyProjects } from '../data/galleryData';

const WorkCard = () => {
  const { isDarkMode } = useStore();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pb-28'>
      {/* card */}
      {getMyProjects.map((project, index) => (
        <div
          key={project.id}
          className={`rounded-md p-2
            ${index === 0 ? 'md:col-span-2' : ''} 
            ${isDarkMode ? 'bg-light-mode' : 'bg-[#444444]'}`}
        >
          {/* link */}
          <a href={project.link} target='_blank' rel='noopener noreferrer' className={project.hoverEffect ? 'hover:opacity-70' : ''}>
            <div className='overflow-hidden'>
              <img src={project.image} alt='image' className={project.style} />
            </div>
          </a>
          {/* card description */}
          <div className={`flex justify-between items-center mt-1 ${isDarkMode ? 'text-dark-mode' : ''}`}>
            <p className='font-bold uppercase pl-2'>{project.name}</p>
            {/* skill tag */}
            <div className='flex flex-wrap gap-3 p-4'>
              {project.skills.map((skill) => (
                <span className={`text-xs border rounded-full px-6 py-1 ${isDarkMode ? 'border-dark-mode' : 'border-white'}`}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCard;
