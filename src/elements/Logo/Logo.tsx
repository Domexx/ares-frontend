import React from 'react';
import s from './Logo.module.css';

import { ReactComponent as HabboLogo } from '../../assets/static/images/Logo/Logo.svg';

export type Props = {
  url?: string;
};

const Logo: React.FC<Props> = ({ url = '#' }) => {
  return (
    <div className={s['Logo']}>
      <a href={url}>
        <HabboLogo />
      </a>
    </div>
  );
};

export default Logo;
