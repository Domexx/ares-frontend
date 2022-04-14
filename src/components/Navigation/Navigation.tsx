import React from 'react';
import s from './Navigation.module.css';

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = {};

const Navigation: React.FC<Props> = () => {
  return <div className={s['navigation']}>Navigation Works!</div>;
};

export default Navigation;
