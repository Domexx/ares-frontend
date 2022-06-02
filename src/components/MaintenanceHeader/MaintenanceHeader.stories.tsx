import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import MaintenanceHeaderComponent, { Props } from './MaintenanceHeader';

const Component = {
  title: 'Components/Maintenance Header',
  component: MaintenanceHeaderComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof MaintenanceHeaderComponent>> = (args) => {
  return <MaintenanceHeaderComponent {...args} />;
};

export const MaintenanceHeader = Template.bind({});
export default Component;

// https://storybook.js.org/docs/react/essentials/controls
MaintenanceHeader.args = {
  inputData: {
    headline: 'Tritt unserer Beta bei',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    ctaText: 'Ins Beta Hotel',
  },
  background: '/static/images/Header/Background.png',
} as Props;
