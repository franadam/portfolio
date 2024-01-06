import React, { FC } from 'react';

import { ISkill } from '@/interfaces/Skill.interface';

export const SkillCard: FC<ISkill> = ({ icon, title, text }): JSX.Element => {
  return (
    <article>
      <span className="text-5xl text-emerald-500">{icon}</span>
      <h4 className="mt-6 text-xl font-bold">{title}</h4>
      <p className="mt-2">{text}</p>
    </article>
  );
};
