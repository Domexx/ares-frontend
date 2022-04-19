import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import ButtonComponent, { Props } from './Button';

const Component = {
  title: 'Elements/Button',
  component: ButtonComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof ButtonComponent>> = (args) => {
  return <ButtonComponent {...args} />;
};

export const Button = Template.bind({});
export default Component;

// https://storybook.js.org/docs/react/essentials/controls
Button.args = {
  children: 'Test',
} as Props;
