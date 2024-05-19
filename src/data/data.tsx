import { nanoid } from 'nanoid';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

// * * * icon bar
export function getIconBarData() {
  return [
    {
      id: nanoid(),
      icon: <BsLinkedin className='text-white text-2xl' />,
      href: 'https://www.linkedin.com/in/emmymanning',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      id: nanoid(),
      icon: <BsGithub className='text-white text-3xl' />,
      href: 'https://github.com/eobcre',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      id: nanoid(),
      icon: <HiOutlineMail className='text-white text-3xl' />,
      href: 'mailto:eobcre@gmail.com',
    },
    {
      id: nanoid(),
      icon: <span className='text-white text-xl tracking-wider'>CV</span>,
      href: '',
    },
  ];
}
