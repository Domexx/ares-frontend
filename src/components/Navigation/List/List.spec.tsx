import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

import Mock from '../Navigation.mock.json';
import { MenuItem } from '../../../shared/interfaces/MenuItem';

describe('List Component', () => {
  let mockItems: MenuItem[] = [];

  beforeAll(() => {
    mockItems = Mock.main.map((item) => {
      const { name, icon, url, id } = item;
      return {
        name,
        icon,
        url,
        id,
      };
    });
  });

  it('should render properly', () => {
    const { container } = render(<List items={mockItems} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
