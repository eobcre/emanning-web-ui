import { Link } from 'react-router-dom';
import { getFooterIconData } from '../data/data';
import test from '../assets/cp/cp.png';

const Footer = () => {
  return (
    <footer className='bg-light-mode text-white pt-20 md:px-10 w-full'>
      <div className='flex flex-col gap-10 md:flex-row md:justify-between md:gap-0'>
        {/* cp */}
        <div className='order-2 md:order-1'>
          <img src={test} alt='' width={1000} />
        </div>
        {/* social links */}
        <div className='flex flex-col gap-2 order-1 md:order-2 font-bold pl-4'>
          {getFooterIconData.map((link) => (
            <Link key={link.id} to={link.href} target={link.target} rel={link.rel} className='hover:opacity-70 cursor-pointer'>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
