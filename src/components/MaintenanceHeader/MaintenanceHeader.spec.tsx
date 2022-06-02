import React from 'react';

import { render } from '@testing-library/react';

import MaintenanceHeader from './MaintenanceHeader';

describe('Header Component', () => {
  it('should render properly', () => {
    const { container } = render(
      <MaintenanceHeader
        inputData={{
          headline: 'Tritt unserer Beta bei',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          ctaText: 'Ins Beta Hotel',
        }}
        background="/static/images/Header/Background.png"
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
