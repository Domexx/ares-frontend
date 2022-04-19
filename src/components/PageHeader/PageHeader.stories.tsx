import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import PageHeaderComponent from './PageHeader';

const Component = {
  title: 'Components/Page Header',
  component: PageHeaderComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof PageHeaderComponent>> = (args) => {
  return <PageHeaderComponent {...args} />;
};

export const PageHeader = Template.bind({});
export default Component;
