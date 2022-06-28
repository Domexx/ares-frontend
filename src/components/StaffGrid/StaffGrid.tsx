import React from 'react';
import { StaffGridItem } from '../../shared/interfaces/StaffGridItem';
import List from './List';
import s from './StaffGrid.module.css';

export type Props = {
  items: StaffGridItem[];
};

const StaffGrid: React.FC<Props> = ({ items }) => {
  return (
    <section className={`${s['StaffGrid']} u-grid`}>
      <div className={s['StaffGrid-wrapper']}>
        <List items={items} />
      </div>
    </section>
  );
};

export default StaffGrid;
