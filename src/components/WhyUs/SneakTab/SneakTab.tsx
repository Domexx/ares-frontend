import React from 'react';
import Image from 'next/image';
import { Sneaks, SneaksItem } from '../../../shared/interfaces/WhyUsItem';
import s from './SneakTab.module.css';

export type Props = {
  main: Sneaks;
};

const SneakTab: React.FC<Props> = ({ main }) => {
  const items = main.items.map((item: SneaksItem, index: number) => {
    return (
      // eslint-disable-next-line react/no-array-index-key
      <div key={index} className={s['SneakTab-item']}>
        <Image layout="intrinsic" height="600" width="600" objectFit="contain" src={item.image} alt={item.title} />
        <div className={s['SneakTab-itemContent']}>
          <div className={`${s['SneakTab-itemTitle']} title`}>{item.title}</div>
          <p className={s['SneakTab-itemDescription']}>{item.description}</p>
        </div>
      </div>
    );
  });
  return <div className={`${s['SneakTab']} u-grid`}>{items}</div>;
};

export default SneakTab;
