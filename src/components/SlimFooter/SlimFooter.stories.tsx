import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import SlimFooterComponent, { Props } from './SlimFooter';

const Component = {
  title: 'Components/SlimFooter',
  component: SlimFooterComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof SlimFooterComponent>> = (args) => {
  return <SlimFooterComponent {...args} />;
};

export const SlimFooter = Template.bind({});
export default Component;

// https://storybook.js.org/docs/react/essentials/controls
SlimFooter.args = {
  copyright:
    '© 2022 Habbo.ac - is not affiliated with, endorsed, sponsored, or specifically approved by Sulake Oy or its Affiliates.',
} as Props;
