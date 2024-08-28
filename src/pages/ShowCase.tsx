import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import DesktopScreen from '../assets/desktop_screen.png';
import DesktopDarkScreen from '../assets/desktop_dark_screen.png';
import PhoneScreen from '../assets/phone_screen.png';
import PhoneDarkScreen from '../assets/phone_dark_screen.png';

const ShowCase = () => {
  const [isVisible, setVisible] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 641px) and (max-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
    <div className='flex bg-gray-300 w-full h-auto pb-10'>
      {/* left container */}
      <div className='desktop:w-1/2'>
        <header className='pl-6 sm:pl-8 px-2 py-6'>
          <Icon icon='weui:back-filled' onClick={() => navigate('/')} className='text-5xl hover:opacity-50' />
        </header>
        <div className='flex flex-col items-center desktop:gap-20 px-5 tablet:px-10 desktop:px-20'>
          {/* section 1 */}
          <div className='flex flex-col justify-center desktop:h-[90vh]'>
            <h1 className='temporary-font text-light-mode text-8xl uppercase pb-10'>Crafting Code with Creativity</h1>
            <p className='text-font text-lg'>
              Inspired by the theme of invention and ideas, symbolized by light bulbs that turn on and off, corresponding to the seamless transition between dark mode and light mode. The application
              is integrated with the GitHub API, enabling interactive engagement with repository data. Effective contact form is facilitated through an integrated email API by nodemailer. Coming soon:
              comments section below is integrated an API with MongoDB managing interactions securely and efficiently. The Back-End is deployed on AWS EC2, ensuring scalability and reliability, while
              the Front-End is delivered with high performance using AWS CloudFront and S3 bucket.
            </p>
            {isTablet && (
              <div className='flex flex-col justify-center items-center pt-20'>
                <img src={DesktopScreen} alt='Image' className='w-[480px]' />
                <img src={PhoneScreen} alt='Image' className='transform -translate-x-[-130%] -translate-y-[90%] w-[130px]' />
              </div>
            )}
            {isMobile && (
              <div className='flex flex-col gap-10 pt-20'>
                <img src={DesktopScreen} alt='Image' className='w-[280px]' />
                <img src={PhoneScreen} alt='Image' className='transform -translate-x-[-280%] -translate-y-[110%] w-[80px]' />
              </div>
            )}
          </div>
          {/* section 2 */}
          <div ref={sectionRef} className='flex flex-col justify-center py-10 desktop:h-screen'>
            <h1 className='temporary-font text-light-mode text-8xl uppercase pb-10'>Illuminate Your Experience with Dark Mode</h1>
            <p className='text-font text-lg'>
              Experience a new depth of interaction with our dark mode feature, designed to reduce eye strain and create a sleek, modern interface. As the screen dims, your content shines, offering a
              visually immersive experience that's easy on the eyes and perfect for any environment. Whether you're browsing late at night or simply prefer a darker aesthetic, dark mode adapts to your
              needs, enhancing both functionality and style.
            </p>
            {isTablet && (
              <div className='flex flex-col justify-center items-center pt-20'>
                <img src={DesktopDarkScreen} alt='Image' className='w-[480px]' />
                <img src={PhoneDarkScreen} alt='Image' className='transform -translate-x-[-130%] -translate-y-[90%] w-[130px]' />
              </div>
            )}
            {isMobile && (
              <div className='pt-20'>
                <img src={DesktopDarkScreen} alt='Image' className='w-[280px]' />
                <img src={PhoneDarkScreen} alt='Image' className='transform -translate-x-[-280%] -translate-y-[80%] w-[80px]' />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* right container */}
      {isDesktop && (
        <div className='contents-scroll flex items-center'>
          <img src={isVisible ? DesktopDarkScreen : DesktopScreen} alt='Image' className='w-[580px]' />
          <img src={isVisible ? PhoneDarkScreen : PhoneScreen} alt='Image' className='transform -translate-x-[80%] -translate-y-[-30%] w-[200px]' />
        </div>
      )}
    </div>
  );
};

export default ShowCase;
