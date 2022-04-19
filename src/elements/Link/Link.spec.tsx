import React from 'react';

import { render } from '@testing-library/react';

import Link from './Link';

describe('Link Component', () => {
  const props = {
    url: 'https://url.com',
    text: 'Virgil',
  };

  it('should render properly as a relative link', () => {
    const { container } = render(<Link {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render properly as an external link', () => {
    const { container } = render(<Link {...props} isExternal />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
