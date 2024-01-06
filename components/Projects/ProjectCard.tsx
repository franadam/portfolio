import React, { FC } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import Image from 'next/image';

import { IProject } from '@/interfaces/Project.interface';

export const ProjectCard: FC<IProject> = ({
  url,
  github,
  text,
  title,
  img,
}): JSX.Element => {
  return (
    <article className="bg-blue-900 rounded-lg shadow-md hover:shadow-xl duration-300">
      <Image
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-200 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbWorldWww className="h-8 w-8 text-slate-400 hover:text-green-400 duration-300" />
            </a>
          )}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="h-8 w-8 text-slate-400 hover:text-green-400 duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};
