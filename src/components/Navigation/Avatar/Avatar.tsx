import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import s from './Avatar.module.css';

export type Props = {
  image: string;
  name: string;
  className?: string;
};

const Avatar: React.FC<Props> = ({ image, name, className }) => {
  const classes = clsx(s['Avatar'], className);

  return (
    <div className={classes}>
      <Image className={s['Avatar-image']} src={image} alt={name} width="122" height="120" layout="responsive" />
      <span className={s['Avatar-name']}>{name}</span>
    </div>
  );
};

export default Avatar;
