import React from 'react';
import clsx from 'clsx';
import s from './ListItem.module.css';

import AutoExternalLink from '../../../elements/AutoExternalLink';

export type Props = {
  name: string;
  url: string;
  className?: string;
};

const ListItem: React.FC<Props> = ({ name, url, className }) => {
  const classes = clsx(s['ListItem'], className);

  return (
    <li data-current={name} className={classes}>
      <AutoExternalLink url={url} text={name} />
    </li>
  );
};

export default ListItem;
