import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import PageHeaderComponent, { Props } from './PageHeader';

import PageHeaderMock from './PageHeader.mock.json';

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

const { main, secondary } = PageHeaderMock;

// https://storybook.js.org/docs/react/essentials/controls
PageHeader.args = {
  items: {
    main,
    secondary,
  },
} as Props;
