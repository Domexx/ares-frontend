import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';

import s from './Avatar.module.css';

export type Props = {
  image: string | null | undefined;
  name: string | null | undefined;
  isLoading: boolean;
  className?: string;
};

const Avatar: React.FC<Props> = ({ image, name, isLoading = false, className }) => {
  const classes = clsx(s['Avatar'], className);

  if (isLoading) {
    return (
      <div className={classes}>
        <Skeleton className={s['Avatar-image']} height={120} width={122} circle />
        <Skeleton className={s['Avatar-name']} height={20} width={122} />
      </div>
    );
  }

  return (
    <div className={classes}>
      <Image
        className={s['Avatar-image']}
        src={image || '/'}
        alt={name || '/'}
        width="122"
        height="120"
        layout="responsive"
      />
      <span className={s['Avatar-name']}>{name}</span>
    </div>
  );
};

export default Avatar;
