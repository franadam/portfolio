import React, { FC } from 'react';
import { SectionTitle } from '../';
import { ProjectCard } from './ProjectCard';
import { webProjects, otherProjects } from '@/assets/data';

export const Projects: FC = (): JSX.Element => {
  return (
    <section
      className="py-20 align-element"
      id="sprojects"
    >
      <SectionTitle
        title="Projects"
        titleSize="text-3xl"
        iconSize="h-32"
        paddingBottom="pb-5"
      />
      <SectionTitle
        title="Web creation"
        titleSize="text-lg"
        iconSize="h-16"
        paddingBottom="py-2"
        marginY="my-5"
      />

      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {webProjects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              {...project}
            />
          );
        })}
      </div>
      <SectionTitle
        title="Others"
        titleSize="text-lg"
        iconSize="h-16"
        paddingBottom="py-2"
        marginY="my-5"
      />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {otherProjects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              {...project}
            />
          );
        })}
      </div>
    </section>
  );
};
