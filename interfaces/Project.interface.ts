import { StaticImageData } from 'next/image';

interface IProject {
  id: string;
  img: StaticImageData;
  url?: string;
  github: string;
  title: string;
  text: string;
}

export type { IProject };
