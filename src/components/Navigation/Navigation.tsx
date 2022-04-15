import React from 'react';
import s from './Navigation.module.css';

import { MenuItem } from '../../shared/interfaces/MenuItem';
import List from './List';

export type Props = {
  main: MenuItem[];
};

const Navigation: React.FC<Props> = ({ main }) => {
  return (
    <nav className={s['navigation']}>
      <List items={main} />
    </nav>
  );
};

export default Navigation;
