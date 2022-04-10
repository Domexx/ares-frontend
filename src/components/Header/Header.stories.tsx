import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import HeaderComponent, { Props } from './Header';

const Component = {
  title: 'Components/Header',
  component: HeaderComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof HeaderComponent>> = (args) => {
  return <HeaderComponent {...args} />;
};

export const Header = Template.bind({});
export default Component;

// https://storybook.js.org/docs/react/essentials/controls
Header.args = {
  text: 'Hello',
} as Props;
