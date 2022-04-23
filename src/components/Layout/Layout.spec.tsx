import React from 'react';

import { render } from '@testing-library/react';

import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from './Layout';

describe('Layout Component', () => {
  it('should render properly', () => {
    const { container } = render(
      <UserProvider>
        <Layout title="Test Title" />
      </UserProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
