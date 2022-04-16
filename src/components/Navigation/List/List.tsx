import React from 'react';
import clsx from 'clsx';
import s from './List.module.css';

import { MenuItem } from '../../../shared/interfaces/MenuItem';
import ListItem from '../ListItem';

export type Props = {
  items: MenuItem[];
  className?: string;
};

const List: React.FC<Props> = ({ items, className }) => {
  const classes = clsx(className);
  const listItems = items.map((item: MenuItem, index: number) => {
    return (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem className={classes} name={item.name} icon={item.icon} url={item.url} key={index} />
    );
  });

  return <ul className={s['List']}>{listItems}</ul>;
};

export default List;
