import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { AvatarSelector } from '../../components/AvatarSelector/AvatarSelector.stories';
import { AvatarSelectionPage as AvatarSelectionPageComponent, Props } from './AvatarSelectionPage';

const Component = {
  title: 'Pages/Avatar Selection Page',
  component: AvatarSelectionPageComponent,
};

const Template: Story<ComponentProps<typeof AvatarSelectionPageComponent>> = (args) => {
  return <AvatarSelectionPageComponent {...args} />;
};

export const AvatarSelectionPage = Template.bind({});
export default Component;

// https://storybook.js.org/docs/react/essentials/controls
AvatarSelectionPage.args = {
  avatarSelector: AvatarSelector.args,
} as Props;
