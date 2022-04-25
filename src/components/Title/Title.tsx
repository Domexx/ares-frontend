import React, { PropsWithChildren } from 'react';
import s from './Title.module.css';

import { ReactComponent as News } from '../../assets/static/images/Title/News.svg';
import { ReactComponent as NewsWithHeart } from '../../assets/static/images/Title/NewsHeart.svg';

export type Props = {
  title: string;
  description: string;
  iconIdentifier: string;
};

const Title: React.FC<PropsWithChildren<Props>> = ({ title, description, iconIdentifier, children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons: any = {
    news: <News />,
    newswithHeart: <NewsWithHeart />,
  };

  const selectedIcon = icons[iconIdentifier];

  return (
    <div className={s['Title']}>
      {selectedIcon}
      <div className={`${s['Title-container']}`}>
        <h2 className={`${s['Title-name']}`}>{title}</h2>
        <p className={`${s['Title-description']}`}>{description}</p>
      </div>
      {children}
    </div>
  );
};

export default Title;
