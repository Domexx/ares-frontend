import React from 'react';
import Image from 'next/image';

import s from './Avatar.module.css';

export type Props = {
  image: string;
  name: string;
};

const Avatar: React.FC<Props> = ({ image, name }) => {
  return (
    <div className={s['Avatar']}>
      <Image className={s['Avatar-image']} src={image} alt={name} width="122" height="120" layout="responsive" />
      <span className={s['Avatar-name']}>{name}</span>
    </div>
  );
};

export default Avatar;
