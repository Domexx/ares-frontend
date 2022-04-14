import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List Component', () => {
  it('should render properly', () => {
    const { container } = render(<List />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
