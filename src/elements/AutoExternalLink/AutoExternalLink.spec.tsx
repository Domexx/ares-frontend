import React from 'react';

import { render } from '@testing-library/react';

import AutoExternalLink from './AutoExternalLink';

describe('Auto External Link Component', () => {
  it('should render properly', () => {
    const { container } = render(<AutoExternalLink />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
