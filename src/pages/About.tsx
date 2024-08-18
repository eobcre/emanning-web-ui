import { getMyExperience } from '../data/data';
import useStore from '../store/useStore';

type Experience = {
  id: string;
  date: string;
  name: string;
  position?: string;
  description: string;
  tech?: string[] | string;
};

const About = () => {
  const { isDarkMode } = useStore();

  const divStyle = '-mt-3 sm:-mt-4 p-10 md:-mt-5 lg:-mt-6';
  const h1Style = 'custom-font text-light-mode text-5xl uppercase sm:text-[8vw]';

  return (
    <div className={`rounded-md px-10 w-full min-h-screen ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className='xl:px-36'>
        <div className='pt-20'>
          <h1 className={h1Style}>About</h1>
          {/* me */}
          <div className={`${divStyle}`}>
            <div className='flex flex-col gap-6 md:p-14'>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>Full Stack Software Developer based in PA.</p>
              <p className={`text-lg ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
                Fast-forward to the present, I've had the privilege of leading a Frontend Developer internship at a startup specializing in web development. I began my journey in the industry as a
                software tester, navigated through map alignment, and contributed to developing medical surveys. I'm always passionate about creative coding and curious about learning new
                technologies!
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>During my time away from the computer, I'm usually reading, cooking and enjoying a coffee at cafe.</p>
            </div>
          </div>
        </div>
        {/* work history */}
        <div className='pt-20'>
          <h1 className={h1Style}>Work History</h1>
          {getMyExperience.map((me: Experience, index, experiences) => (
            <div key={me.id} className={`md:p-24 ${divStyle} ${index === 0 ? 'rounded-tl-md rounded-tr-md' : index === experiences.length - 1 ? 'rounded-bl-md rounded-br-md' : ''}`}>
              <span className={`text-sm ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>{me.date}</span>
              <p className={`font-bold ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>{me.name}</p>
              <p className={`${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>{me.position}</p>
              <p className={`mt-4 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>{me.description}</p>
              {me.tech && me.tech.length > 0 && (
                <div className={`flex flex-wrap gap-4 text-sm mt-6 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
                  {Array.isArray(me.tech) ? (
                    me.tech.map((tech, index) => (
                      <span key={index} className={`border-2 rounded-3xl px-3 py-2 ${isDarkMode ? 'border-dark-mode' : 'border-light-mode'}`}>
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span className='border border-blue-300 rounded-3xl px-3 py-2'>{me.tech}</span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
