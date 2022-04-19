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
  const activeClass = s['is-Active'];

  const navClasses = clsx(s['Navigation'], menuOpen ? activeClass : '');
  const itemClasses = clsx(s['ListItem'], menuOpen ? activeClass : '');
  const avatarClasses = clsx(s['Avatar'], menuOpen ? activeClass : '');

  return (
    <nav className={navClasses}>
      <Avatar className={avatarClasses} {...avatar} />
      <List className={itemClasses} items={main} />
    </nav>
  );
};

export default Navigation;
