import useStore from '../../store/useStore';
import { getMyExperience } from '../../data/data';

const Experience = () => {
  const { isDarkMode } = useStore();

  return (
    <>
      {getMyExperience.map((work) => (
        <div key={work.id}>
          <span className={`text-sm md:text-base ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>{work.date}</span>
          <p className={`text-xl md:text-xl font-bold mt-1 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>{work.name}</p>
          <p className={`text-sm md:text-base font-bold mt-1 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>{work.position}</p>
          <p className={`md:text-lg opacity-80 mt-4 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>{work.description}</p>
          {/* tag */}
          <div className={`flex flex-wrap gap-4 text-sm mt-10 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
            {work.tech.map((tech, index) => (
              <span key={index} className={`border-2 rounded-3xl px-3 py-2 ${isDarkMode ? 'border-dark-mode bg-light-mode' : 'text-white border-light-mode bg-light-mode'}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Experience;
