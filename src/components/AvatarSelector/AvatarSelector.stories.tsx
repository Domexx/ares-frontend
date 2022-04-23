import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import AvatarSelectorComponent, { Props } from './AvatarSelector';

const Component = {
  title: 'Components/Avatar Selector',
  component: AvatarSelectorComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof AvatarSelectorComponent>> = (args) => {
  return <AvatarSelectorComponent {...args} />;
};

export const AvatarSelector = Template.bind({});
export default Component;

// https://storybook.js.org/docs/react/essentials/controls
AvatarSelector.args = {
  title: 'Cool Avatars',
  avatars: [
    {
      look: 'hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=std&gesture=std&direction=2&head_direction=3&size=n',
      name: 'Raizer',
      motto: 'im Raizer',
    },
    {
      look: 'hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=std&gesture=std&direction=2&head_direction=3&size=n',
      name: 'Eevee',
      motto: 'im Katzen',
    },
    {
      look: 'hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=std&gesture=std&direction=2&head_direction=3&size=n',
      name: 'Eevee',
      motto: 'im Katzen',
    },
  ],
} as Props;
