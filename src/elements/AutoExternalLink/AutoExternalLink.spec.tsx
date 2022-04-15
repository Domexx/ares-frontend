import React from 'react';

import { render } from '@testing-library/react';

import AutoExternalLink from './AutoExternalLink';

describe('Auto External Link Component', () => {
  it('should render properly', () => {
    const { container } = render(<AutoExternalLink url="https://testurl.com" text="Link it" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
