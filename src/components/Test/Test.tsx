import React from 'react';
import s from './Test.module.css';

export type Props = {};

const Test: React.FC<Props> = () => {
  return <div className={s['test']}>
    <button className="bg-red-400 font-bold text-white px-6 py-2">Test</button>
  </div>;
};

export default Test;
