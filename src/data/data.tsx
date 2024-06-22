import { nanoid } from 'nanoid';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

// * * * nav bar
export function getNavData() {
  return [
    {
      id: nanoid(),
      name: 'Home',
      href: '/',
      background: 'bg-[#97dffc]',
    },
    {
      id: nanoid(),
      name: 'About',
      href: '/about',
      background: 'bg-[#858ae3]',
    },
    {
      id: nanoid(),
      name: 'Gallery',
      href: '/gallery',
      background: 'bg-[#613dc1]',
    },
    {
      id: nanoid(),
      name: 'Contact',
      href: '/contact',
      background: 'bg-[#4e148c]',
    },
  ];
}

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

// * * * about
export function getMyExperience() {
  return [
    {
      id: nanoid(),
      date: '2024 Feb - Present',
      name: 'Full Stack Software Engineer',
      description: `Created advanced solutions for Financial Services. Built a specialized operating system for this sector and implemented data storage systems using MongoDB and Supabase for flexible and real-time data handling. Led the creation of a user-friendly Form Builder tool with features for form creation, sharing, role-based permissions, and real-time notification implementation.`,
      tech: [
        'JavaScript',
        'React.js',
        'HTML & CSS',
        'Tanstack-Query',
        'Zustand',
        'React Hook Form',
        'Socket.io',
        'Node.js',
        'Express.js',
        'Postgres',
        'Supabase',
        'Mongo DB',
      ],
    },
    {
      id: nanoid(),
      date: '2023 Oct - 2024 Feb',
      name: 'Frontend Developer SDE Internship',
      position: 'Frontend Team Lead',
      description: `Created a beauty platform dedicated to providing accessible plastic surgery services for beauty enthusiasts. Our team is highly focused on website development, ensuring a seamless and user-friendly experience for the users. My leadership involved guiding the team in implementing innovative design solutions, optimizing user interfaces, and enhancing overall user experience. The experience has honed my skills in frontend development, project management, and fostering a collaborative team environment.`,
      tech: ['JavaScript', 'React.js', 'HTML & SCSS', 'Chakura UI', 'TypeScript', 'Node.js', 'React-Query', 'Zustand'],
    },
    {
      id: nanoid(),
      date: '2021 Jul - 2021 Oct',
      name: 'Web Developer',
      position: 'Job Training',
      description: `Made significant contributions to the creation of medical surveys. As part of the team, I conducted peer reviews to meticulously verify the accuracy of the applications we were working on. Additionally, I engaged in the integration process, leveraging the use of company-specific widgets and seamlessly incorporating them into the codebase. This multifaceted involvement allowed me to not only ensure the precision of our medical surveys but also showcase adaptability in utilizing specialized tools for optimal results within the company's framework.`,
      tech: ['JavaScript', 'HTML & CSS'],
    },
    {
      id: nanoid(),
      date: '2019 Apr - 2020 Oct',
      name: 'Map Alignment Specialist',
      description: `Contributed transit map information for Google Maps, using the platform's tools to boost accuracy. Conducting thorough research on subway and bus routes, I utilized Google Maps tools to ensure precision. In my role as a map alignment specialist, I provided precise location information, optimizing the overall functionality of Google Maps.`,
    },
    {
      id: nanoid(),
      date: '2018 Oct - 2019 Mar',
      name: 'Software Tester',
      description: `First job in the IT industry, where I conducted testing for car navigation systems. I performed detailed and precise tests, eventually compiling the findings into documents. The testing involved using equipment embedded with navigation software and conducting tests on actual car navigation systems. It provided hands-on experience in assessing the functionality of navigation software both in simulated setups and within real vehicles.`,
    },
  ];
}

// * * * footer nav
export function getFooterNavData() {
  return [
    {
      id: nanoid(),
      name: 'About',
      href: '/about',
      style: 'hover:text-[#97dffc] hover:duration-200',
      line: '|',
    },
    {
      id: nanoid(),
      name: 'Gallery',
      href: '/gallery',
      style: 'hover:text-[#97dffc] hover:duration-200',
      line: '|',
    },
    {
      id: nanoid(),
      name: 'Contact',
      href: '/contact',
      style: 'hover:text-[#97dffc] hover:duration-200',
      line: '|',
    },
    {
      id: nanoid(),
      name: 'Resume',
      href: './',
      style: 'hover:text-[#97dffc] hover:duration-200',
    },
  ];
}

// * * * footer icon
export function getFooterIconData() {
  return [
    {
      id: nanoid(),
      icon: <BsLinkedin className='text-xl text-white hover:text-[#97dffc] hover:duration-200' />,
      href: 'https://www.linkedin.com/in/emmymanning',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      id: nanoid(),
      icon: <BsGithub className='text-white text-xl hover:text-[#97dffc] hover:duration-200' />,
      href: 'https://github.com/eobcre',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      id: nanoid(),
      icon: <HiOutlineMail className='text-white text-2xl hover:text-[#97dffc] hover:duration-200' />,
      href: 'mailto:eobcre@gmail.com',
    },
  ];
}
