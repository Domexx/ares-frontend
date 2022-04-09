import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import TestComponent, { Props } from './Test';

const Component = {
  title: 'Components/Test',
  component: TestComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof TestComponent>> = (args) => {
  return <TestComponent {...args} />;
};

export const Test = Template.bind({});
export default Component;

// https://storybook.js.org/docs/react/essentials/controls
Test.args = {} as Props; 