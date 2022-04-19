import React from 'react';

import { render } from '@testing-library/react';

import ListItem from './ListItem';

describe('List Item Component', () => {
  it('should render properly', () => {
    const { container } = render(<ListItem name="Test" url="https://url.com" icon="News" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
