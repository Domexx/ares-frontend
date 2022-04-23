import React from 'react';

import { render } from '@testing-library/react';

import AvatarSelector from './AvatarSelector';

describe('Avatar Selector Component', () => {
  it('should render properly', () => {
    const { container } = render(
      <AvatarSelector
        title="Avatar Selector Test Title"
        avatars={[
          {
            look: 'look',
            name: 'Testname',
            motto: 'Testmotto',
          },
        ]}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
