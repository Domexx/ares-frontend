import React from 'react';
import s from './ListItem.module.css';

export type Props = {
  name: string;
  url: string;
  icon: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ListItem: React.FC<Props> = ({ name, url, icon }) => {
  return <li className={s['list-item']}>ListItem Works!</li>;
};

export default ListItem;
