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

import { ILink, ISkill } from '@/interfaces';

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
