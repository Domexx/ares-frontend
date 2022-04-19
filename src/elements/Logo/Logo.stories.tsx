import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import LogoComponent, { Props } from './Logo';

const Component = {
  title: 'Elements/Logo',
  component: LogoComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof LogoComponent>> = (args) => {
  return <LogoComponent {...args} />;
};

export const Logo = Template.bind({});
export default Component;

// https://storybook.js.org/docs/react/essentials/controls
Logo.args = {} as Props;
