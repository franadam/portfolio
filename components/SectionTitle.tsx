import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
  title: string;
  icon?: string;
  titleSize: 'text-3xl' | 'text-lg'; // Adjust based on need
  iconSize: 'h-32' | 'h-16'; // Adjust based on need
  paddingBottom: 'pb-5' | 'py-2'; // Adjust based on need
  marginY?: 'my-5' | ''; // Adjust based on need
}

export const SectionTitle: FC<Props> = ({
  title,
  icon,
  titleSize,
  iconSize,
  paddingBottom,
  marginY,
}): JSX.Element => {
  return (
    <div
      className={`border-b border-gray-200 flex items-center justify-start ${marginY} ${paddingBottom}`}
    >
      <h2 className={`${titleSize} font-medium tracking-wider capitalize`}>
        {title}
      </h2>
      {icon && (
        <Image
          src={icon}
          className={iconSize}
          alt={title}
        />
      )}
    </div>
  );
};
