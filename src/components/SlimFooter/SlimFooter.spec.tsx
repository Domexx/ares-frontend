import React from 'react';

import { render } from '@testing-library/react';

import SlimFooter from './SlimFooter';

describe('Slim Footer Component', () => {
  it('should render properly', () => {
    const { container } = render(<SlimFooter copyright="copyright 2022" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
