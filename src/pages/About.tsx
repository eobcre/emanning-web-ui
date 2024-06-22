import { getMyExperience } from '../data/data';
import TypeWrite from '../components/TypeWrite';

type Experience = {
  id: string;
  date: string;
  name: string;
  position?: string;
  description: string;
  tech?: string[] | string;
};

const About = () => {
  const divStyle =
    'bg-[#333333] bg-opacity-50 rounded-md -mt-3 sm:-mt-4 p-10 md:-mt-5 lg:-mt-6';
  const h1Style = 'custom-text text-5xl font-bold sm:text-[8vw]';

  return (
    <div className='bg-[#0D1225] px-10 py-20 md:pl-10 w-full min-h-screen md:pr-48'>
      <TypeWrite text={['About.']} delay={200} />
      <div className='xl:px-36'>
        <div className='pt-20'>
          <h1 className={h1Style}>Me</h1>
          {/* me */}
          <div className={divStyle}>
            <div className='flex flex-col gap-6 md:p-14'>
              <p className='text-2xl custom-text font-bold'>
                Full Stack Software Developer based in PA.
              </p>
              <p className='text-gray-300'>
                Fast-forward to the present, I've had the privilege of leading a
                Frontend Developer internship at a startup specializing in web
                development. I began my journey in the industry as a software
                tester, navigated through map alignment, and contributed to
                developing medical surveys. I'm always passionate about creativeq
                coding and curious about learning new technologies!
              </p>
              <p className='text-gray-300'>
                During my time away from the computer, I'm usually reading,
                cooking and enjoying a coffee at cafe.
              </p>
            </div>
          </div>
        </div>
        {/* experience */}
        <div className='pt-20'>
          <h1 className={h1Style}>Experience</h1>
          {getMyExperience().map((me: Experience) => (
            <div key={me.id} className={`md:p-24 ${divStyle}`}>
              <span className='text-sm text-gray-300'>{me.date}</span>
              <p className='custom-text font-bold'>{me.name}</p>
              <p className='text-gray-500'>{me.position}</p>
              <p className='text-gray-300 mt-4'>{me.description}</p>
              {me.tech && me.tech.length > 0 && (
                <div className='flex flex-wrap gap-4 custom-tag-text text-sm mt-6'>
                  {Array.isArray(me.tech) ? (
                    me.tech.map((tech, index) => (
                      <span
                        key={index}
                        className='border border-blue-300 rounded-3xl px-3 py-2'
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span className='border border-blue-300 rounded-3xl px-3 py-2'>
                      {me.tech}
                    </span>
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
