import React from 'react';
import s from './Header.module.css';
import Logo from '../Logo';

export type Props = {
  text: string;
};

const Header: React.FC<Props> = ({ text }) => {
  return (
    <div className={s['Header']}>
      <div className="container h-full flex items-center justify-between">
        <div>
          <Logo layout="intrinsic" />
        </div>

        <div className={s['habbo-button']}>
          <div className={s['enter-hotel']}>
            <div className={s['inner']}>
              <a href="/hotel">{text}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
