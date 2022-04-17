/* eslint-disable react/no-array-index-key */
import React from 'react';
import s from './List.module.css';

import { FooterListChildren, FooterListItem } from '../../../shared/interfaces/FooterItem';
import ListItem from '../ListItem';

export type Props = {
  items: FooterListItem[];
};

const List: React.FC<Props> = ({ items }) => {
  const listItems = items.map((item: FooterListItem, index: number) => {
    return (
      <ul key={index} className={s['List']}>
        <div key={index} className={s['List-headline']}>
          {item.headline}
        </div>

        {item.children.map((children: FooterListChildren) => {
          return <ListItem name={children.name} url={children.link} key={index} />;
        })}
      </ul>
    );
  });

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{listItems}</>;
};

export default List;
