import { useState, useEffect, useRef } from 'react';
import { getMyExperience } from '../data/data';
import useStore from '../store/useStore';

const About = () => {
  const [isVisible, setVisible] = useState(false);
  const { isDarkMode } = useStore();

  // ref
  const sectionRef = useRef<HTMLDivElement>(null);

  // scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className={`py-20 sm:rounded-md md:px-10 w-full min-h-screen md:pb-10 ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className='md:flex'>
        {/* left container */}
        <div className='flex contents-scroll md:w-1/2'>
          <h1 className={`flex flex-col px-6 pt-28 pb-16 md:px-0 md:pb-0 md:flex md:items-center custom-font text-7xl uppercase sm:text-[14vw] ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
            <span className={`text-9xl ${isDarkMode ? 'text-olive' : 'text-yellow'}`}>{isVisible ? '02' : '01'}</span>
            {isVisible ? 'Exper ience' : 'About Me'}
          </h1>
        </div>
        {/* right container */}
        <div className='flex flex-col gap-20 px-6 md:px-14 md:py-20 md:w-1/2 min-h-screen'>
          {/* about section */}
          <div className='flex flex-col justify-center gap-6 md:h-screen'>
            <p className={`text-2xl font-bold ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>Full Stack Software Developer based in PA.</p>
            <p className={`text-md md:text-lg opacity-80 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
              Fast-forward to the present, I am currently developing an operating system tailored for financial services, where I integrate both ends expertise to create seamless and secure
              applications. I began my journey in the industry as a software tester, where I honed my attention to detail and problem solving skills. My career path took me through diverse roles,
              including map alignment for Google Map. I've made meaningful contributions to developing medical surveys, emphasizing my commitment to projects that impact lives. I've also had the
              privilege of leading a Frontend Developer Internship at a startup specializing in web development, which allowed me to learn, develop, mentor, and guide the team. I am always passionate
              about creative coding and driven by an insatiable curiosity to learn new technologies.
            </p>
            <p className={`text-md md:text-lg opacity-80 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
              During my time away from the computer, I'm usually reading, cooking and enjoying a coffee at cafe. These moments away from the screen recharge my creativity and keep me inspired.
            </p>
          </div>
          {/* experience section */}
          {getMyExperience.map((work) => (
            <div ref={sectionRef} key={work.id}>
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
        </div>
      </div>
    </div>
  );
};

export default About;
