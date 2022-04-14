import React from 'react';

import { render } from '@testing-library/react';

import Navigation from './Navigation';

describe('Navigation Component', () => {
  it('should render properly', () => {
    const { container } = render(<Navigation />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
