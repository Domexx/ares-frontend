import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import WhyUsComponent, { Props } from './WhyUs';
import WhyUsMock from './WhyUs.mock.json';

const Component = {
  title: 'Components/Why Us',
  component: WhyUsComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof WhyUsComponent>> = (args) => {
  return <WhyUsComponent {...args} />;
};

export const WhyUs = Template.bind({});
export default Component;

const tabs = WhyUsMock;

// https://storybook.js.org/docs/react/essentials/controls
WhyUs.args = {
  headline: 'Why Choose Us?',
  description:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  tabs,
} as Props;
