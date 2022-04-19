import React from 'react';

import { render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer Component', () => {
  it('should render properly', () => {
    const { container } = render(
      <Footer
        items={[]}
        description="Test Description"
        discord="https://discordapp.com"
        copyright={{
          title: 'Copyright Title',
          description: 'Copyright Description',
        }}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
