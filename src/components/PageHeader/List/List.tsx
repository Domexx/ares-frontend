import React from 'react';
import clsx from 'clsx';
import s from './List.module.css';

import { PageHeaderItem } from '../../../shared/interfaces/PageHeaderItem';
import ListItem from '../ListItem';

export type Props = {
  main: PageHeaderItem[];
  secondary: PageHeaderItem[];
  className?: string;
};

const List: React.FC<Props> = ({ main, secondary, className }) => {
  const classes = clsx(className);
  const mainListItems = main.map((item: PageHeaderItem, index: number) => {
    return (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem className={classes} name={item.name} icon={item.icon} url={item.url} key={index} />
    );
  });

  const secondaryListItems = secondary.map((item: PageHeaderItem, index: number) => {
    return (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem className={classes} name={item.name} icon={item.icon} url={item.url} key={index} />
    );
  });

  return (
    <div className={`${s['List']} u-grid`}>
      <ul className={s['List-main']}>{mainListItems}</ul>
      <ul className={s['List-secondary']}>{secondaryListItems}</ul>
    </div>
  );
};

export default List;
