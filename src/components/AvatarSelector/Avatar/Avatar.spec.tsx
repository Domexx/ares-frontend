import React from 'react';

import { render } from '@testing-library/react';

import Avatar from './Avatar';

describe('Avatar Component', () => {
  it('should render properly', () => {
    const { container } = render(<Avatar look="testlook" name="testname" motto="testmotto" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
