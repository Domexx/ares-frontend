import React from 'react';
import Image from 'next/image';
import s from './ListItem.module.css';

import { format } from '../../../shared/utils/date';

export type Props = {
  title: string;
  description: string;
  image: string;
  date: number;
  category: string;
};

const ListItem: React.FC<Props> = ({ title, description, image, date, category }) => {
  return (
    <div className={`${s['ListItem']}`}>
      <Image className={s['ListItem-image']} src={image} layout="fill" objectFit="cover" alt={title} />
      <div className={`${s['ListItem-container']}`}>
        <div className={s['ListItem-category']}>{category}</div>
        <div className={s['ListItem-date']}>{format(date, 'EEEE dd LLLL')}</div>
      </div>
      <div className={s['ListItem-title']}>{title}</div>
      <div className={s['ListItem-description']}>{description}</div>
    </div>
  );
};

export default ListItem;
