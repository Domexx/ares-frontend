import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

import Mock from '../PageHeader.mock.json';
import { PageHeaderItem } from '../../../shared/interfaces/PageHeaderItem';

describe('List Component', () => {
  let mainMockItems: PageHeaderItem[] = [];
  let secondaryMockItems: PageHeaderItem[] = [];

  beforeAll(() => {
    mainMockItems = Mock.main.map((item) => {
      const { id, name, url, icon } = item;
      return {
        id,
        name,
        url,
        icon,
      };
    });

    secondaryMockItems = Mock.secondary.map((item) => {
      const { id, name, url, icon } = item;
      return {
        id,
        name,
        url,
        icon,
      };
    });
  });

  it('should render properly', () => {
    const { container } = render(<List main={mainMockItems} secondary={secondaryMockItems} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
