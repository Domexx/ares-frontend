import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { DashboardPage as DashboardPageComponent, Props } from './DashboardPage';
import { Navigation } from '../../components/Navigation/Navigation.stories';
import { PageHeader } from '../../components/PageHeader/PageHeader.stories';
import { Footer } from '../../components/Footer/Footer.stories';

const Component = {
  title: 'Pages/Dashboard Page',
  component: DashboardPageComponent,
};

const Template: Story<ComponentProps<typeof DashboardPageComponent>> = (args) => {
  return <DashboardPageComponent {...args} />;
};

export const DashboardPage = Template.bind({});
export default Component;

// https://storybook.js.org/docs/react/essentials/controls
DashboardPage.args = {
  pageHeader: PageHeader.args,
  navigation: Navigation.args,
  footer: Footer.args,
} as Props;
