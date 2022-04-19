import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import LinkComponent, { Props } from './Link';

const Component = {
  title: 'Elements/Link',
  component: LinkComponent,
  argTypes: {
    isExternal: { control: { type: 'boolean' } },
  },
};

const Template: Story<ComponentProps<typeof LinkComponent>> = (args) => {
  return <LinkComponent {...args} />;
};

export const Link = Template.bind({});
export default Component;

Link.args = {
  url: '/test',
  text: 'What happened to virgil',
  isExternal: true,
} as Props;
