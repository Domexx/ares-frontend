import React from 'react';
import s from './List.module.css';

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = {};

const List: React.FC<Props> = () => {
  return <div className={s['list']}>List Works!</div>;
};

export default List;
