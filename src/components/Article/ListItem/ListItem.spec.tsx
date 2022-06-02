import React from 'react';

import { render } from '@testing-library/react';

import ListItem from './ListItem';

describe('List Item Component', () => {
  it('should render properly', () => {
    const { container } = render(
      <ListItem
        title="Test Title"
        description="Test Description"
        image="https://images.habbo.com/web_images/habbo-web-articles/lpromo_jan21_gen.png"
        date={0}
        category="Habbo"
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
