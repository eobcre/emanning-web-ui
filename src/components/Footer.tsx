import { Link } from 'react-router-dom';
import useStore from '../store/useStore';
import { getFooterIconData } from '../data/data';
import cp from '../assets/cp/cp.png';
import cp_dark_mode from '../assets/cp/cp_dark_mode.png';

const Footer = () => {
  const { isDarkMode } = useStore();

  return (
    <footer className='bg-light-mode text-white pt-20 md:px-10 md:pb-10 w-full'>
      <div className='flex flex-col items-center gap-10 md:flex-row md:justify-between md:gap-0'>
        <div className='order-2 md:order-1'>{isDarkMode ? <img src={cp_dark_mode} alt='' width={600} /> : <img src={cp} alt='' width={600} />}</div>
        {/* social links */}
        <div className='flex flex-col gap-2 order-1 md:order-2 custom-500-font pl-4'>
          {getFooterIconData.map((link) => (
            <Link key={link.id} to={link.href} target={link.target} rel={link.rel} className={`hover:opacity-70 cursor-pointer ${isDarkMode ? 'text-dark-mode' : 'text-white'}`}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
