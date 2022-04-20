/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import s from './ListItem.module.css';

import { ReactComponent as CogIcon } from '../../../assets/static/images/PageHeader/Cog.svg';
import { ReactComponent as BagIcon } from '../../../assets/static/images/PageHeader/Bag.svg';
import { ReactComponent as MessageIcon } from '../../../assets/static/images/PageHeader/Message.svg';
import { ReactComponent as BellIcon } from '../../../assets/static/images/PageHeader/Bell.svg';
import { ReactComponent as SmileIcon } from '../../../assets/static/images/PageHeader/Smile.svg';

export type Props = {
  name: string;
  url: string;
  icon: string;
  className?: string;
};

const ListItem: React.FC<Props> = ({ name, url, icon, className }) => {
  const classes = clsx(s['ListItem'], className);

  const icons = {
    cog: <CogIcon />,
    bag: <BagIcon />,
    messages: <MessageIcon />,
    bell: <BellIcon />,
    smile: <SmileIcon />,
  };

  const selectedIcon = icons[icon];

  return (
    <li data-current={name} className={classes}>
      <Link passHref href={url}>
        <a>{selectedIcon}</a>
      </Link>
    </li>
  );
};

export default ListItem;
