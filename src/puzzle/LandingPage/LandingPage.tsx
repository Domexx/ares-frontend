import React from 'react';

import Article, { Props as ArticleProps } from '../../components/Article/Article';
import Title from '../../components/Title';

export type Props = {
  article: ArticleProps;
};

export const LandingPage: React.FC<Props> = ({ article }) => {
  return (
    <>
      <Title title="Actual News" description="What are the highlights within our hotel?" iconIdentifier="news" />
      <Article {...article} />
    </>
  );
};
