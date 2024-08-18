import { nanoid } from 'nanoid';
import { Icon } from '@iconify/react';
import { RefObject } from 'react';

// * * * nav bar
export const getNavData = (
  scrollToTop: () => void,
  scrollToSection: (sectionRef: RefObject<HTMLDivElement> | null) => void,
  aboutRef: RefObject<HTMLDivElement>,
  galleryRef: RefObject<HTMLDivElement>,
  contactRef: RefObject<HTMLDivElement>
) => [
  {
    id: nanoid(),
    name: 'Home',
    scroll: () => scrollToTop(),
  },
  {
    id: nanoid(),
    name: 'About',
    scroll: () => scrollToSection(aboutRef),
  },
  {
    id: nanoid(),
    name: 'Gallery',
    scroll: () => scrollToSection(galleryRef),
  },
  {
    id: nanoid(),
    name: 'Contact',
    scroll: () => scrollToSection(contactRef),
  },
];

// * * * about
export const getMyExperience = [
  {
    id: nanoid(),
    date: '2024 Feb - Present',
    name: 'Full Stack Software Engineer',
    description: `Created advanced solutions for Financial Services. Built a specialized operating system for this sector and implemented data storage systems using MongoDB and Supabase for flexible and real-time data handling. Led the creation of a user-friendly Form Builder tool with features for form creation, sharing, role-based permissions, and real-time notification implementation.`,
    tech: ['JavaScript', 'React.js', 'HTML & CSS', 'Tanstack-Query', 'Zustand', 'React Hook Form', 'Socket.io', 'Node.js', 'Express.js', 'Postgres', 'Supabase', 'Mongo DB'],
  },
  {
    id: nanoid(),
    date: '2023 Oct - 2024 Feb',
    name: 'Frontend Developer SDE Internship',
    position: 'Frontend Team Lead',
    description: `Created a beauty platform dedicated to providing accessible plastic surgery services for beauty enthusiasts. Our team is highly focused on website development, ensuring a seamless and user-friendly experience for the users. My leadership involved guiding the team in implementing innovative design solutions, optimizing user interfaces, and enhancing overall user experience. The experience has honed my skills in frontend development, project management, and fostering a collaborative team environment.`,
    tech: ['JavaScript', 'React.js', 'HTML & SCSS', 'Chakura UI', 'TypeScript', 'Node.js', 'React-Query', 'Zustand'],
  },
];

// * * * footer nav
export const getFooterNavData = [
  {
    id: nanoid(),
    name: 'About',
    href: '/about',
    style: 'hover:opacity-70 hover:duration-200',
  },
  {
    id: nanoid(),
    name: 'Gallery',
    href: '/gallery',
    style: 'hover:opacity-70 hover:duration-200',
  },
  {
    id: nanoid(),
    name: 'Contact',
    href: '/contact',
    style: 'hover:opacity-70 hover:duration-200',
  },
  {
    id: nanoid(),
    name: 'Resume',
    href: './',
    style: 'hover:opacity-70 hover:duration-200',
  },
];

// * * * footer icon
export const getFooterIconData = [
  {
    id: nanoid(),
    icon: <Icon icon='bi:linkedin' className='text-white text-3xl hover:opacity-70' />,
    href: 'https://www.linkedin.com/in/emmymanning',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    id: nanoid(),
    icon: <Icon icon='pajamas:github' className='text-white text-3xl hover:opacity-70' />,
    href: 'https://github.com/eobcre',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    id: nanoid(),
    icon: <Icon icon='ri:send-plane-fill' className='text-white text-3xl hover:opacity-70' />,
    href: 'mailto:eobcre@gmail.com',
  },
];
