import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import FooterComponent, { Props } from './Footer';

import FooterMock from './Footer.mock.json';

const Component = {
  title: 'Components/Footer',
  component: FooterComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof FooterComponent>> = (args) => {
  return <FooterComponent {...args} />;
};

export const Footer = Template.bind({});
export default Component;

const items = FooterMock;

// https://storybook.js.org/docs/react/essentials/controls
Footer.args = {
  items,
  description:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ',
  discord: 'https://discord.gg/uAmqc64S',
  copyright: {
    title: '© 2022 HabboSO is powered by soCMS',
    description: 'Das soCMS wurde speziell für HabboSO entwickelt.',
  },
} as Props;
