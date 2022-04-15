import React from 'react';
import s from './List.module.css';

import { MenuItem } from '../../../shared/interfaces/MenuItem';
import ListItem from '../ListItem';

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = {
  items: MenuItem[];
};

const List: React.FC<Props> = ({ items }) => {
  const listItems = items.map((item: MenuItem, index: number) => {
    return (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem name={item.name} icon={item.icon} url={item.url} key={index} />
    );
  });

  return <ul className={s['list']}>{listItems}</ul>;
};

export default List;
