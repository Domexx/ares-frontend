import Image from 'next/image';
import React from 'react';
import s from './Avatar.module.css';

export type Props = {
  look: string;
  name: string;
  motto: string;
};

const Avatar: React.FC<Props> = ({ look, name, motto }) => {
  return (
    <div className={s['Avatar']}>
      <div className={s['Avatar-figure']}>
        <Image
          src={`https://mansionplay.com/imaging/?figure=${look}`}
          unoptimized
          alt="Avatar"
          width="200"
          height="300"
        />
        <Image
          className={s['Avatar-figurePodium']}
          src="/static/images/Avatar-Selection/Podium.png"
          unoptimized
          alt="Podium"
          width="220"
          height="100"
        />
      </div>
      <span className={s['Avatar-name']}>{name}</span>
      <span className={s['Avatar-motto']}>&quot;{motto}&quot;</span>
    </div>
  );
};

export default Avatar;
