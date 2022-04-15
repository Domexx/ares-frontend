import React from 'react';
import clsx from 'clsx';
import s from './Navigation.module.css';

import { MenuItem } from '../../shared/interfaces/MenuItem';
import { useMenuContext } from '../../shared/contexts/MenuContext';

import List from './List';
import Avatar, { Props as AvatarProps } from './Avatar/Avatar';

export type Props = {
  avatar: AvatarProps;
  main: MenuItem[];
};

const Navigation: React.FC<Props> = ({ avatar, main }) => {
  const { menuOpen } = useMenuContext();

  const navClasses = clsx(s['Navigation'], menuOpen ? s['is-Active'] : '');

  return (
    <nav className={navClasses}>
      <Avatar {...avatar} />
      <List items={main} />
    </nav>
  );
};

export default Navigation;
