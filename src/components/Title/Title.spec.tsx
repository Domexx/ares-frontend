import React from 'react';

import { render } from '@testing-library/react';

import Title from './Title';

describe('Title Component', () => {
  it('should render properly', () => {
    const { container } = render(<Title title="Test Title" description="Test description" iconIdentifier="news" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
