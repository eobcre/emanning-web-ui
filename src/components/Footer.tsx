import { Link } from 'react-router-dom';
import { getFooterIconData } from '../data/data';

const Footer = () => {
  return (
    <footer className='text-sm tablet:text-lg desktop:text-lg bg-light-mode flex flex-col tablet:flex-row desktop:flex-row justify-center items-center text-white px-6 py-10 w-full'>
      <p className='tablet:mr-10 desktop:mr-10'>&copy; {new Date().getFullYear()} Emmy Manning All Rights Reserved.</p>
      {/* icon */}
      <div className='lg:flex'>
        <div className='flex justify-center gap-4 pt-4 tablet:pt-0 desktop:pt-0'>
          {getFooterIconData.map((icon) => (
            <Link key={icon.id} to={icon.href} target={icon.target} rel={icon.rel}>
              {icon.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
