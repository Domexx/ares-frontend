import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import StaffGridComponent, { Props } from './StaffGrid';
import StaffGridMock from './StaffGrid.mock.json';

const Component = {
  title: 'Components/StaffGrid',
  component: StaffGridComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof StaffGridComponent>> = (args) => {
  return <StaffGridComponent {...args} />;
};

export const StaffGrid = Template.bind({});
export default Component;

const items = StaffGridMock;

// https://storybook.js.org/docs/react/essentials/controls
StaffGrid.args = {
  items,
} as Props;
