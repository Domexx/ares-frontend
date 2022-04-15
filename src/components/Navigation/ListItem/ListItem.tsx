import React from 'react';
import s from './ListItem.module.css';

import AutoExternalLink from '../../../elements/AutoExternalLink';

import { ReactComponent as News } from '../../../assets/static/images/Navigation/News.svg';
import { ReactComponent as User } from '../../../assets/static/images/Navigation/User.svg';
import { ReactComponent as Users } from '../../../assets/static/images/Navigation/Users.svg';
import { ReactComponent as Statistics } from '../../../assets/static/images/Navigation/Statistics.svg';

export type Props = {
  name: string;
  url: string;
  icon: string;
};

const ListItem: React.FC<Props> = ({ name, url, icon }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons: any = {
    news: <News />,
    user: <User />,
    users: <Users />,
    statistics: <Statistics />,
  };

  const selectedIcon = icons[icon];

  return (
    <li data-current={name} className={s['ListItem']}>
      {selectedIcon}
      <AutoExternalLink url={url} text={name} />
    </li>
  );
};

export default ListItem;
