import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import AutoExternalLinkComponent, { Props } from './AutoExternalLink';

const Component = {
  title: 'Elements/Auto External Link',
  component: AutoExternalLinkComponent,
  argTypes: {
    isExternal: { control: { type: 'boolean' } },
  },
};

const Template: Story<ComponentProps<typeof AutoExternalLinkComponent>> = (args) => {
  return <AutoExternalLinkComponent {...args} />;
};

export const AutoExternalLink = Template.bind({});
export default Component;

AutoExternalLink.args = {
  url: 'https://virgil-abi.com',
  text: 'Jelly jelly virgil',
} as Props;
