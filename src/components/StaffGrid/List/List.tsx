/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import s from './List.module.css';

import ListItem from '../ListItem';
import { Member, StaffGridItem } from '../../../shared/interfaces/StaffGridItem';

export type Props = {
  items: StaffGridItem[];
};

const List: React.FC<Props> = ({ items }) => {
  const listItems = items.map((item: StaffGridItem, index: number) => {
    return (
      <div key={index} className={s['List']}>
        <div className={s['List-headline']}>{item.title}</div>
        <div className={s['List-content']}>
          {item.members.map((member: Member, index: number) => {
            return (
              <ListItem
                name={member.name}
                key={index}
                look={member.look}
                motto={member.motto}
                online={member.online}
                rank={member.rank}
              />
            );
          })}
        </div>
      </div>
    );
  });

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{listItems}</>;
};

export default List;
