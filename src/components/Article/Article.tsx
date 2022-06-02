import React from 'react';
import s from './Article.module.css';

import { ArticleGridItem } from '../../shared/interfaces/ArticleGridItem';

import List from './List/List';

export type Props = {
  items: ArticleGridItem[];
};

const Article: React.FC<Props> = ({ items }) => {
  return (
    <section className={`${s['Article']} u-grid`}>
      <List items={items} />
    </section>
  );
};

export default Article;
