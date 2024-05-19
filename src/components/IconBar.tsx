import React from 'react';
import { Link } from 'react-router-dom';
import { getIconBarData } from '../data/data';

const IconBar = React.memo(() => {
  return (
    <div className='pt-5 pb-16 z-10 lg:pt-2'>
      <ul className='flex gap-5'>
        {getIconBarData().map((menu) => (
          <Link
            key={menu.id}
            to={menu.href}
            target={menu.target}
            rel={menu.rel}
          >
            <li className='flex justify-center items-center border-2 hover:border-4 hover:border-white rounded-full cursor-pointer w-[60px] h-[60px]'>
              {menu.icon}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
});

export default IconBar;
