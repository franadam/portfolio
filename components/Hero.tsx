import React, { FC } from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import Image from 'next/image';

import heroSVG from '../assets/images/hero.svg';

export const Hero: FC = (): JSX.Element => {
  return (
    <div
      className="bg-blue-600 py-24 lg:min-h-screen"
      id="home"
    >
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            I&apos;m François
          </h1>
          <p className="mt-4 text-3xl text-slate-300 capitalize tracking-wide">
            I&apos;m Fullstack Engineer
          </p>
          <p className="mt-2 text-lg text-slate-300 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-300 hover:text-green-400 duration-500" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-300 hover:text-green-400 duration-500" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-300 hover:text-green-400 duration-500" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <Image
            src={heroSVG}
            alt="hero"
            className="h-80 lg:h-96"
          />
        </article>
      </div>
    </div>
  );
};
