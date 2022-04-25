import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { Article } from '../../components/Article/Article.stories';
import { LandingPage as LandingPageComponent, Props } from './LandingPage';

const Component = {
  title: 'Pages/Landing Page',
  component: LandingPageComponent,
};

const Template: Story<ComponentProps<typeof LandingPageComponent>> = (args) => {
  return <LandingPageComponent {...args} />;
};

export const LandingPage = Template.bind({});
export default Component;

// https://storybook.js.org/docs/react/essentials/controls
LandingPage.args = {
  article: Article.args,
} as Props;
