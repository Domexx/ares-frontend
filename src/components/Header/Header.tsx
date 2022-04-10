import React from 'react';
import s from './Header.module.css';
import Logo from '../Logo';

export type Props = {
  text: string;
};

const Header: React.FC<Props> = ({ text }) => {
  return (
    <div className={s['Header']}>
      <div className="container h-full items-center">{text}</div>
      <div className={s['image']}>
        <Logo />
      </div>
    </div>
  );
};

export default Header;
