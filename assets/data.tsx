import { nanoid } from 'nanoid';
import { FaReact, FaPython } from 'react-icons/fa';
import {
  SiTypescript,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiOpengl,
} from 'react-icons/si';

import { ILink, ISkill, IProject } from '@/interfaces';
import {
  medicalSimulation,
  web3rps,
  jobster,
  dishygraph,
  humanSegmentation,
} from './images/projects';

export const links: ILink[] = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills: ISkill[] = [
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript />,
    text: 'Proficient in TypeScript, bringing strong typing to JavaScript to enhance code quality and maintainability.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Redux',
    icon: <SiRedux />,
    text: 'Experienced in managing application state using Redux, implementing complex state management patterns to streamline frontend functionality.',
  },
  {
    id: nanoid(),
    title: 'Node.Js',
    icon: <SiNodedotjs />,
    text: 'Skilled in building scalable server-side applications with Node.js, focusing on RESTful API development and backend logic.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython />,
    text: 'Competent in Python for backend development and automation scripts, leveraging Python’s extensive libraries for efficient software solutions.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <SiMongodb />,
    text: 'Proficient in using MongoDB as a NoSQL database for storing, querying, and managing application data efficiently.',
  },
  {
    id: nanoid(),
    title: 'PostgreSQL',
    icon: <SiPostgresql />,
    text: 'Experienced with PostgreSQL, designing and managing relational database schemas and performing complex queries for data-driven applications.',
  },
  {
    id: nanoid(),
    title: 'OpenGL',
    icon: <SiOpengl />,
    text: 'Advanced knowledge in OpenGL for creating sophisticated 3D graphics and simulations, with experience in shader programming and real-time rendering techniques.',
  },
];

export const webProjects: IProject[] = [
  {
    id: nanoid(),
    img: web3rps,
    url: 'https://main--web3rps.netlify.app/',
    github: 'https://github.com/franadam/web3rps',
    title: 'Rock Paper Scissors Lizard Spock, Web3 Edition',
    text: 'Developed a web3 version of the classic game using React, integrating blockchain for secure gameplay. Enabled ETH transactions for stakes and rewards.',
  },
  {
    id: nanoid(),
    img: jobster,
    url: 'https://franadam-joby.netlify.app/',
    github: 'https://github.com/franadam/Joby',
    title: 'Joby, React App',
    text: 'A web app for tracking job application progress, using React with TypeScript and Styled Components for the UI, and Redux Toolkit for state management, featuring secure server interactions and real-time user feedback.',
  },
  {
    id: nanoid(),
    img: dishygraph,
    github: 'https://github.com/franadam/DishyGraph',
    title: 'DishyGraph',
    text: 'An Angular application designed to visualize WHO data on infectious diseases. Built from scratch, it features a performant backend with Express and Node.js, and an Angular frontend with D3.js for dynamic data visualization.',
  },
];

export const otherProjects: IProject[] = [
  {
    id: nanoid(),
    img: medicalSimulation,
    github: 'https://github.com/franadam/MedSim',
    title: 'Virtual Medical Simulation',
    text: 'Created a C++ simulation with OpenGL for interactive medical training, featuring realistic 3D anatomical models and custom shader effects.',
  },
  {
    id: nanoid(),
    img: humanSegmentation,
    github: 'https://github.com/franadam/HumanSegmentation',
    title: 'Deep Learning Medical Image Segmentation',
    text: 'Optimized a 3D medical image segmentation model using TensorFlow, enhancing diagnostic processes with advanced image processing techniques.',
  },
];
