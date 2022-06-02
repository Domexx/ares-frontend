import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import ArticleComponent, { Props } from './Article';

import ArticleGridMock from './ArticleGrid.mock.json';

const Component = {
  title: 'Components/Article',
  component: ArticleComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof ArticleComponent>> = (args) => {
  return <ArticleComponent {...args} />;
};

export const Article = Template.bind({});
export default Component;

const items = ArticleGridMock;

// https://storybook.js.org/docs/react/essentials/controls
Article.args = {
  items,
} as Props;
