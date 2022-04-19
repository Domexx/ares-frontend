import React from 'react';

import { render } from '@testing-library/react';

import Navigation from './Navigation';

import Menu from './Navigation.mock.json';
import { MenuItem } from '../../shared/interfaces/MenuItem';

describe('Navigation Component', () => {
  let mainMock: MenuItem[];

  beforeAll(() => {
    const { main } = Menu;
    mainMock = main;
  });

  it('should render properly', () => {
    const { container } = render(
      <Navigation
        main={mainMock}
        avatar={{
          image: '/test.png',
          name: 'Dome',
        }}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
