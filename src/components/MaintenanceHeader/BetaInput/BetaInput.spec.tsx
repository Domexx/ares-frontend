import React from 'react';

import { render } from '@testing-library/react';

import BetaInput from './BetaInput';

describe('Beta Input Component', () => {
  it('should render properly', () => {
    const { container } = render(
      <BetaInput headline="TestHeadline" description="Test description" ctaText="click here" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
