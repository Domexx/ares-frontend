import React from 'react';

import { render } from '@testing-library/react';

import UpdateTab from './UpdateTab';

describe('Update Tab Component', () => {
  it('should render properly', () => {
    const { container } = render(
      <UpdateTab
        main={{
          title: 'Updates',
          items: [
            {
              author: 'Virtual',
              author_look:
                'https://imager.habboon.pw/?figure=hr-100.hd-180-1.ch-210-66.lg-270-82.sh-290-91&direction=2&head_direction=3&gesture=sml&action=wav',
              date: '08.05.2021',
              update_text:
                'Putz dich fein heraus um dann elegant über den Habbo-Laufsteg zu gleiten.Das wird ein Spass!',
              image: '/static/images/Maintenance/Update.png',
              tags: [
                {
                  name: 'Client',
                },
                {
                  name: 'Event',
                },
              ],
            },
            {
              author: 'Virtual',
              author_look:
                'https://imager.habboon.pw/?figure=hr-100.hd-180-1.ch-210-66.lg-270-82.sh-290-91&direction=2&head_direction=3&gesture=sml&action=wav',
              date: '08.05.2021',
              update_text:
                'Putz dich fein heraus um dann elegant über den Habbo-Laufsteg zu gleiten.Das wird ein Spass!',
              image: '/static/images/Maintenance/Update.png',
              tags: [
                {
                  name: 'Client',
                },
                {
                  name: 'Event',
                },
              ],
            },
            {
              author: 'Virtual',
              author_look:
                'https://imager.habboon.pw/?figure=hr-100.hd-180-1.ch-210-66.lg-270-82.sh-290-91&direction=2&head_direction=3&gesture=sml&action=wav',
              date: '08.05.2021',
              update_text:
                'Putz dich fein heraus um dann elegant über den Habbo-Laufsteg zu gleiten.Das wird ein Spass!',
              image: '/static/images/Maintenance/Update.png',
              tags: [
                {
                  name: 'Client',
                },
                {
                  name: 'Event',
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
