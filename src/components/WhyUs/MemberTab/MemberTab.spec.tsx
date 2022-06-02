import React from 'react';

import { render } from '@testing-library/react';

import MemberTab from './MemberTab';

describe('Member Tab Component', () => {
  it('should render properly', () => {
    const { container } = render(
      <MemberTab
        main={{
          title: 'Team',
          items: [
            {
              title: 'Council:',
              member: [
                {
                  look: 'https://imager.habboon.pw/?figure=hr-100.hd-180-1.ch-210-66.lg-270-82.sh-290-91&direction=2&head_direction=3&gesture=sml&action=wav',
                  name: 'Virtual',
                  profession_text:
                    'Jelly sweet tart icing muffin wafer. Tootsie roll lemon drops oat cake chupa chups gummies.',
                },
                {
                  look: 'https://imager.habboon.pw/?figure=hr-100.hd-180-1.ch-210-66.lg-270-82.sh-290-91&direction=2&head_direction=3&gesture=sml&action=wav',
                  name: 'Virtual',
                  profession_text:
                    'Jelly sweet tart icing muffin wafer. Tootsie roll lemon drops oat cake chupa chups gummies.',
                },
                {
                  look: 'https://imager.habboon.pw/?figure=hr-100.hd-180-1.ch-210-66.lg-270-82.sh-290-91&direction=2&head_direction=3&gesture=sml&action=wav',
                  name: 'Virtual',
                  profession_text:
                    'Jelly sweet tart icing muffin wafer. Tootsie roll lemon drops oat cake chupa chups gummies.',
                },
              ],
            },
            {
              title: 'Developer:',
              member: [
                {
                  look: 'https://imager.habboon.pw/?figure=hr-100.hd-180-1.ch-210-66.lg-270-82.sh-290-91&direction=2&head_direction=3&gesture=sml&action=wav',
                  name: 'Virtual',
                  profession_text:
                    'Jelly sweet tart icing muffin wafer. Tootsie roll lemon drops oat cake chupa chups gummies.',
                },
                {
                  look: 'https://imager.habboon.pw/?figure=hr-100.hd-180-1.ch-210-66.lg-270-82.sh-290-91&direction=2&head_direction=3&gesture=sml&action=wav',
                  name: 'Virtual',
                  profession_text:
                    'Jelly sweet tart icing muffin wafer. Tootsie roll lemon drops oat cake chupa chups gummies.',
                },
                {
                  look: 'https://imager.habboon.pw/?figure=hr-100.hd-180-1.ch-210-66.lg-270-82.sh-290-91&direction=2&head_direction=3&gesture=sml&action=wav',
                  name: 'Virtual',
                  profession_text:
                    'Jelly sweet tart icing muffin wafer. Tootsie roll lemon drops oat cake chupa chups gummies.',
                },
              ],
            },
          ],
        }}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
