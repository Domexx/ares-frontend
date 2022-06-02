import MaintenanceHeader from '@Ares/components/MaintenanceHeader';
import WhyUs from '@Ares/components/WhyUs';
import SlimFooter from '@Ares/components/SlimFooter';
import Head from 'next/head';

function Index() {
  return (
    <>
      <Head>
        <title>Maintenance</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MaintenanceHeader
        inputData={{
          headline: 'Tritt unserer Beta bei',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          ctaText: 'Ins Beta Hotel',
        }}
        background="/static/images/Header/Background.png"
      />
      <main>
        <WhyUs
          headline="Why Choose Us?"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          tabs={{
            sneaks: {
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
            },
            team: {
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
            },
            updates: {
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
            },
          }}
        />
      </main>
      <SlimFooter copyright="© 2022 Habbo.ac - is not affiliated with, endorsed, sponsored, or specifically approved by Sulake Oy or its Affiliates." />
    </>
  );
}

export default Index;
