import React, { FC } from 'react';
import Image from 'next/image';

import { SectionTitle } from './';
import {
  glassesSVG,
  wandSVG,
  broomSVG,
  deathlyHallows,
} from '@/assets/images/about';

export const About: FC = (): JSX.Element => {
  return (
    <section
      className="py-20 align-element bg-blue-900"
      id="about"
    >
      <article>
        <SectionTitle
          title="about"
          icon={glassesSVG}
          titleSize="text-3xl"
          iconSize="h-32"
          paddingBottom="pb-5"
        />

        <div className="align-element grid md:grid-cols-2 items-center gap-16">
          <Image
            src={broomSVG}
            className="w-full h-32"
            alt="brom"
          />

          <p className=" mt-8 leading-loose">
            Hello! I&apos;m François, a dynamic full-stack engineer with a
            unique blend of skills in coding and biomedical engineering. My
            educational journey began at Université libre de Bruxelles,
            enriching my foundational knowledge, and continued with specialized
            training at Codeworks, where I enhanced my web development
            expertise.
          </p>
        </div>

        <div className="align-element grid md:grid-cols-2 items-center gap-16">
          <p className="mt-8 leading-loose">
            My enthusiasm for software development goes beyond coding; it&apos;s
            about crafting solutions that significantly impact health and
            well-being, a vision shaped by my background in biomedical
            engineering. My projects range from developing chat applications
            that overcome language barriers for gamers to improving virtual
            medical simulations, all aimed at making a meaningful difference. I
            possess a wide range of technical skills, including React, Redux,
            Node.js, and MongoDB, and I excel in collaborative environments that
            foster growth and innovation.
          </p>
          <Image
            src={wandSVG}
            className="w-full h-64"
            alt="glasses"
          />
        </div>

        <div className="align-element grid md:grid-cols-2 items-center gap-16">
          <Image
            src={deathlyHallows}
            className="w-full h-32"
            alt="glasses"
          />

          <p className="mt-8 leading-loose">
            Outside of programming, my passions include exploring international
            cuisines and traveling, fueled by my experiences with the BEST
            association. These interests, like my professional goals, revolve
            around discovery, learning, and connecting with people. I&apos;m
            eager for new challenges and opportunities to further grow as both
            an engineer and a global citizen. Let&apos;s collaborate and create
            something impactful.
          </p>
        </div>
      </article>
    </section>
  );
};
