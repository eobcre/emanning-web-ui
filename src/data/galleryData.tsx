import { nanoid } from 'nanoid';
import taskManagementAppImage from '../assets/task_manager_app.jpg';
import balanceAppImage from '../assets/balance_app.jpg';
import unsplashAppImage from '../assets/unsplash_app.jpg';

export const getMyProjects = [
  {
    id: nanoid(),
    link: 'https://emanning-app.xyz',
    image: taskManagementAppImage,
    style: 'rounded-md hover:scale-105 transition-transform duration-300 w-full',
    hoverEffect: true,
    name: 'Task Manager',
    skills: ['React', 'Supabase', 'MongoDB', 'REST API', 'AWS', 'EC2', 'CloudFront', 'S3'],
  },
  {
    id: nanoid(),
    link: 'https://balanceapp.io',
    image: balanceAppImage,
    style: 'rounded-md hover:scale-105 transition-transform duration-300 w-full',
    hoverEffect: true,
    name: 'Balance',
    skills: ['React', 'DB', 'REST API', 'AWS'],
  },
  {
    id: nanoid(),
    image: unsplashAppImage,
    style: 'rounded-md w-full',
    hoverEffect: false,
    name: 'Photo App',
    skills: ['React', 'DB', 'REST API', 'AWS'],
  },
];
