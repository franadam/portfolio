import React, { FC } from 'react';

import { SkillCard } from './SkillCard';
import { SectionTitle } from '..';
import { skills } from '@/assets/data';

export const Skills: FC = (): JSX.Element => {
  return (
    <section
      className="py-20 align-element"
      id="skills"
    >
      <SectionTitle
        title="tech stack"
        titleSize="text-3xl"
        iconSize="h-32"
        paddingBottom="pb-5"
      />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            {...skill}
          />
        ))}
      </div>
    </section>
  );
};
