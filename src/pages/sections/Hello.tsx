import useStore from '../../store/useStore';

const Hello = () => {
  const { isDarkMode } = useStore();

  return (
    <>
      <div className='flex flex-col justify-center gap-6 md:h-screen'>
        <p className={`text-2xl font-bold ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>Full Stack Software Developer based in PA.</p>
        <p className={`text-md md:text-lg opacity-80 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
          Fast-forward to the present, I am currently developing an operating system tailored for financial services, where I integrate both ends expertise to create seamless and secure applications.
          I began my journey in the industry as a software tester, where I honed my attention to detail and problem solving skills. My career path took me through diverse roles, including map
          alignment for Google Map. I've made meaningful contributions to developing medical surveys, emphasizing my commitment to projects that impact lives. I've also had the privilege of leading a
          Frontend Developer Internship at a startup specializing in web development, which allowed me to learn, develop, mentor, and guide the team. I am always passionate about creative coding and
          driven by an insatiable curiosity to learn new technologies.
        </p>
        <p className={`text-md md:text-lg opacity-80 ${isDarkMode ? 'text-dark-mode' : 'text-light-mode'}`}>
          During my time away from the computer, I'm usually reading, cooking and enjoying a coffee at cafe. These moments away from the screen recharge my creativity and keep me inspired.
        </p>
      </div>
    </>
  );
};

export default Hello;
