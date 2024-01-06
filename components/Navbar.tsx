import React, { FC } from 'react';
import { links } from '@/assets/data';

export const Navbar: FC = (): JSX.Element => {
  return (
    <nav className="bg-blue-600 fixed top-0 left-0 right-0">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl text-gray-100 font-bold">
          Fullstack <span className="text-green-300">Engineer</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-green-400 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
