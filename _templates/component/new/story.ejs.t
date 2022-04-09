---
to: src/components/<%= h.path.dirname(name) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>.stories.tsx
unless_exists: true
---
import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import <%=name%>Component, { Props } from './<%=name%>';

const Component = {
  title: 'Components/<%=name%>',
  component: <%=name%>Component,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof <%=name%>Component>> = (args) => {
  return <<%=name%>Component {...args} />;
};

export const <%=name%> = Template.bind({});
export default Component;

// https://storybook.js.org/docs/react/essentials/controls
<%= h.changeCase.pascal(h.path.basename(name)) %>.args = {} as Props; 