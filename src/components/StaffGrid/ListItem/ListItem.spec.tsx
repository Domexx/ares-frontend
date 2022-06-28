import React from 'react';

import { render } from '@testing-library/react';

import ListItem from './ListItem';

describe('List Item Component', () => {
  it('should render properly', () => {
    const { container } = render(<ListItem look="" motto="" name="" online={false} rank="" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
