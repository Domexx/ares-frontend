import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

import Mock from '../Footer.mock.json';
import { FooterListItem } from '../../../shared/interfaces/FooterItem';

describe('List Component', () => {
  let mockItems: FooterListItem[] = [];

  beforeAll(() => {
    mockItems = Mock.map((item) => {
      const { headline, children } = item;
      return {
        headline,
        children,
      };
    });
  });

  it('should render properly', () => {
    const { container } = render(<List items={mockItems} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
