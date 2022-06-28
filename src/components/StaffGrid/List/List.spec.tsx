import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

import Mock from '../StaffGrid.mock.json';
import { StaffGridItem } from '../../../shared/interfaces/StaffGridItem';

describe('List Component', () => {
  let mockItems: StaffGridItem[] = [];

  beforeAll(() => {
    mockItems = Mock.map((item) => {
      const { title, members } = item;
      return {
        title,
        members,
      };
    });
  });

  it('should render properly', () => {
    const { container } = render(<List items={mockItems} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
