import React from 'react';

import { render } from '@testing-library/react';

import Button from './Button';

describe('Button Component', () => {
  it('should render properly', () => {
    const { container } = render(<Button />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
