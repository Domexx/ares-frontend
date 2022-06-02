import React from 'react';

import { render } from '@testing-library/react';

import SneakTab from './SneakTab';

describe('Sneak Tab Component', () => {
  it('should render properly', () => {
    const { container } = render(
      <SneakTab
        main={{
          title: 'Sneaks',
          items: [
            {
              title: 'Profile Completion',
              description:
                'In Habbo.so you have the possibility that we support you with your profile creation. We will tell you exactly what you need to do and when you can finally show your perfect profile to the world.',
              image: '/static/images/Maintenance/Profile.png',
            },
            {
              title: 'Profile Completion',
              description:
                'In Habbo.so you have the possibility that we support you with your profile creation. We will tell you exactly what you need to do and when you can finally show your perfect profile to the world.',
              image: '/static/images/Maintenance/Groups.png',
            },
            {
              title: 'Profile Completion',
              description:
                'In Habbo.so you have the possibility that we support you with your profile creation. We will tell you exactly what you need to do and when you can finally show your perfect profile to the world.',
              image: '/static/images/Maintenance/Calendar.png',
            },
            {
              title: 'Profile Completion',
              description:
                'In Habbo.so you have the possibility that we support you with your profile creation. We will tell you exactly what you need to do and when you can finally show your perfect profile to the world.',
              image: '/static/images/Maintenance/Sidebar.png',
            },
            {
              title: 'Profile Completion',
              description:
                'In Habbo.so you have the possibility that we support you with your profile creation. We will tell you exactly what you need to do and when you can finally show your perfect profile to the world.',
              image: '/static/images/Maintenance/Navigator.png',
            },
            {
              title: 'Profile Completion',
              description:
                'In Habbo.so you have the possibility that we support you with your profile creation. We will tell you exactly what you need to do and when you can finally show your perfect profile to the world.',
              image: '/static/images/Maintenance/Chat.png',
            },
          ],
        }}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
