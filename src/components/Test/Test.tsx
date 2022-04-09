import React from 'react';
import s from './Test.module.css';

export type Props = {
  text: string;
};

const Test: React.FC<Props> = ({ text }) => {
  return (
    <div className={s['test']}>
      <button type="submit" className="bg-red-400 font-bold text-white px-6 py-2">
        {text}
      </button>
    </div>
  );
};

export default Test;
