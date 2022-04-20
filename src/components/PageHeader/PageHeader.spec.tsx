import React from 'react';

import { render } from '@testing-library/react';

import PageHeader from './PageHeader';

describe('Page Header Component', () => {
  it('should render properly', () => {
    const { container } = render(
      <PageHeader
        items={{
          main: [],
          secondary: [],
        }}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
