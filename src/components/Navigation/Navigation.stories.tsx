import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import NavigationComponent, { Props } from './Navigation';

import MenuMock from './Navigation.mock.json';

const Component = {
  title: 'Components/Navigation',
  component: NavigationComponent,
};

const Template: Story<ComponentProps<typeof NavigationComponent>> = (args) => {
  return <NavigationComponent {...args} />;
};

export const Navigation = Template.bind({});
export default Component;

const { main } = MenuMock;

// https://storybook.js.org/docs/react/essentials/controls
Navigation.args = {
  main,
} as Props;
