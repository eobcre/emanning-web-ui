import { nanoid } from 'nanoid';
import taskManagementAppImage from '../assets/task_management_app.png';
import balanceAppImage from '../assets/balance_app.png';
import unsplashAppImage from '../assets/unsplash_screen.png';

export const getMyProjects = [
  {
    id: nanoid(),
    link: 'https://emanning-app.xyz',
    image: taskManagementAppImage,
    style: 'rounded-md w-full',
    hoverEffect: true,
  },
  {
    id: nanoid(),
    link: 'https://balanceapp.io',
    image: balanceAppImage,
    style: 'rounded-md w-full',
    hoverEffect: true,
  },
  {
    id: nanoid(),
    image: unsplashAppImage,
    style: 'opacity-40 rounded-md w-full',
    hoverEffect: false,
  },
];
