import React from 'react';

import { render } from '@testing-library/react';

import Layout from './Layout';

describe('Layout Component', () => {
  it('should render properly', () => {
    const { container } = render(<Layout />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
