import React from 'react';
import s from './List.module.css';

import { ArticleGridItem } from '../../../shared/interfaces/ArticleGridItem';
import ListItem from '../ListItem';

export type Props = {
  items: ArticleGridItem[];
};

const List: React.FC<Props> = ({ items }) => {
  const listItems = items.map((item: ArticleGridItem, index: number) => {
    return (
      <ListItem
        title={item.title}
        description={item.description}
        image={item.image}
        date={item.date}
        category={item.category}
        content={item.content}
        // eslint-disable-next-line react/no-array-index-key
        key={index}
      />
    );
  });

  return <div className={`${s['List']} u-grid `}>{listItems}</div>;
};

export default List;
