import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import TitleComponent, { Props } from './Title';

const Component = {
  title: 'Elements/Title',
  component: TitleComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof TitleComponent>> = (args) => {
  return <TitleComponent {...args} />;
};

export const Title = Template.bind({});
export default Component;

// https://storybook.js.org/docs/react/essentials/controls
Title.args = {
  title: 'Ares lmao',
  description: 'This is a very cool Title',
  iconIdentifier: 'news',
} as Props;
