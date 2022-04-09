import React from 'react';

import { render } from '@testing-library/react';

import Test from './Test';

describe('Test Component', () => {
  it('should render properly', () => {
    const { container } = render(<Test text="Test" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
