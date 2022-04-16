import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import FooterComponent from './Footer';

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
