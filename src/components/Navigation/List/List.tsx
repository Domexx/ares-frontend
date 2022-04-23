import React from 'react';
import clsx from 'clsx';
import s from './List.module.css';

import { MenuItem } from '../../../shared/interfaces/MenuItem';
import ListItem from '../ListItem';

export type Props = {
  items: MenuItem[];
  path?: string;
  className?: string;
};

const List: React.FC<Props> = ({ items, path, className }) => {
  const classes = clsx(className);
  const listItems = items.map((item: MenuItem, index: number) => {
    return (
      <ListItem
        className={classes}
        name={item.name}
        pathName={path}
        locale={item.locale}
        icon={item.icon}
        url={item.url}
        // eslint-disable-next-line react/no-array-index-key
        key={index}
      />
    );
  });

  return <ul className={s['List']}>{listItems}</ul>;
};

export default List;
