import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import NavigationComponent, { Props } from './Navigation';

const Component = {
  title: 'Components/Navigation',
  component: NavigationComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof NavigationComponent>> = (args) => {
  return <NavigationComponent {...args} />;
};

export const Navigation = Template.bind({});
export default Component;

// https://storybook.js.org/docs/react/essentials/controls
Navigation.args = {} as Props;
