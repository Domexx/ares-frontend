import React from 'react';

import { render } from '@testing-library/react';

import StaffGrid from './StaffGrid';

describe('Staff Grid Component', () => {
  it('should render properly', () => {
    const { container } = render(
      <StaffGrid
        items={[
          {
            title: 'Administration',
            members: [
              {
                look: 'hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=std&gesture=std&direction=2&head_direction=2&size=l',
                motto: 'Time is just an illusion',
                name: 'Dome',
                online: false,
                rank: 'Developer',
              },
              {
                look: 'hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=std&gesture=std&direction=2&head_direction=2&size=l',
                motto: 'Time is just an illusion',
                name: 'Dome',
                online: true,
                rank: 'Developer',
              },
              {
                look: 'hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=std&gesture=std&direction=2&head_direction=2&size=l',
                motto: 'Time is just an illusion',
                name: 'Dome',
                online: false,
                rank: 'Developer',
              },
            ],
          },
          {
            title: 'Moderation',
            members: [
              {
                look: 'hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=std&gesture=std&direction=2&head_direction=2&size=l',
                motto: 'Time is just an illusion',
                name: 'Dome',
                online: false,
                rank: 'Developer',
              },
              {
                look: 'hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=std&gesture=std&direction=2&head_direction=2&size=l',
                motto: 'Time is just an illusion',
                name: 'Dome',
                online: false,
                rank: 'Developer',
              },
              {
                look: 'hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=std&gesture=std&direction=2&head_direction=2&size=l',
                motto: 'Time is just an illusion',
                name: 'Dome',
                online: true,
                rank: 'Developer',
              },
            ],
          },
        ]}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
