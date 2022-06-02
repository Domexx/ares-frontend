import React from 'react';
import s from './SlimFooter.module.css';

export type Props = {
  copyright: string;
};

const SlimFooter: React.FC<Props> = ({ copyright }) => {
  return <footer className={s['SlimFooter']}>{copyright}</footer>;
};

export default SlimFooter;
