import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import s from './ListItem.module.css';

export type Props = {
  look: string;
  motto: string;
  name: string;
  online: boolean;
  rank: string;
};

const ListItem: React.FC<Props> = ({ look, motto, name, online, rank }) => {
  const statusBadge = clsx(
    s['ListItem-status'],
    online ? s['ListItem-statusBadge-online'] : s['ListItem-statusBadge-offline'],
  );

  return (
    <div className={s['ListItem']}>
      <Image
        className={s['ListItem-look']}
        src={`https://mansionplay.com/imaging/?figure=${look}`}
        alt="Avatar"
        width="130"
        height="200"
      />
      <div className={s['ListItem-nameWrapper']}>
        <span className={s['ListItem-name']}>{name}</span>
        <p className={s['ListItem-motto']}>{motto}</p>
      </div>
      <div className={s['ListItem-rankWrapper']}>
        <div className={s['ListItem-rank']}>{rank}</div>
        <span className={statusBadge} />
      </div>
    </div>
  );
};

export default ListItem;
