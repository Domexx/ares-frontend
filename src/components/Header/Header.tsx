import React from 'react';
import s from './Header.module.css';

export type Props = {
  text: string;
};

const Header: React.FC<Props> = ({text}) => {
  return <div className={s["Header"]}>
      <div className="container h-full items-center">{text}</div>
  </div>;
};

export default Header;