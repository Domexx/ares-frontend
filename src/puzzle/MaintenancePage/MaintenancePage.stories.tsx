import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { MaintenanceHeader } from '../../components/MaintenanceHeader/MaintenanceHeader.stories';
import { SlimFooter } from '../../components/SlimFooter/SlimFooter.stories';
import { WhyUs } from '../../components/WhyUs/WhyUs.stories';
import { MaintenancePage as MaintenancePageComponent, Props } from './MaintenancePage';

const Component = {
  title: 'Pages/Maintenance Page',
  component: MaintenancePageComponent,
};

const Template: Story<ComponentProps<typeof MaintenancePageComponent>> = (args) => {
  return <MaintenancePageComponent {...args} />;
};

export const MaintenancePage = Template.bind({});
export default Component;

// https://storybook.js.org/docs/react/essentials/controls
MaintenancePage.args = {
  header: MaintenanceHeader.args,
  whyUs: WhyUs.args,
  footer: SlimFooter.args,
} as Props;
