import MaintenanceHeader from '@Ares/components/MaintenanceHeader';
import WhyUs from '@Ares/components/WhyUs';
import SlimFooter from '@Ares/components/SlimFooter';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

function Index() {
  const { t } = useTranslation('maintenance');

  return (
    <>
      <Head>
        <title>Maintenance</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MaintenanceHeader
        inputData={{
          headline: t('header.input_headline'),
          description: t('header.input_description'),
          ctaText: t('header.input_cta'),
        }}
        background="/static/images/Header/Background.png"
      />
      <main>
        <WhyUs
          headline={t('why_us.headline')}
          description={t('why_us.description')}
          tabs={{
            sneaks: {
              title: t('why_us.sneaks.title'),
              items: [
                {
                  title: t('why_us.sneaks.item_profile_title'),
                  description: t('why_us.sneaks.item_profile_description'),
                  image: '/static/images/Maintenance/Profile.png',
                },
                {
                  title: t('why_us.sneaks.item_groups_title'),
                  description: t('why_us.sneaks.item_groups_description'),
                  image: '/static/images/Maintenance/Groups.png',
                },
                {
                  title: t('why_us.sneaks.item_calendar_title'),
                  description: t('why_us.sneaks.item_calendar_description'),
                  image: '/static/images/Maintenance/Calendar.png',
                },
                {
                  title: t('why_us.sneaks.item_client_title'),
                  description: t('why_us.sneaks.item_client_description'),
                  image: '/static/images/Maintenance/Sidebar.png',
                },
                {
                  title: t('why_us.sneaks.item_navigator_title'),
                  description: t('why_us.sneaks.item_navigator_description'),
                  image: '/static/images/Maintenance/Navigator.png',
                },
                {
                  title: t('why_us.sneaks.item_friends_title'),
                  description: t('why_us.sneaks.item_friends_description'),
                  image: '/static/images/Maintenance/Chat.png',
                },
              ],
            },
            team: {
              title: t('why_us.team.title'),
              items: [
                {
                  title: t('why_us.team.title_owner'),
                  member: [
                    {
                      look: 'https://habbo.city/habbo-imaging/avatarimage?figure=hr-3163-45.hd-209-1391.ch-210-92.lg-275-1189.ha-990000014-62.ca-987463078-92-1196&direction=2&head_direction=3&gesture=sml&action=wav',
                      name: 'Virtual',
                      profession_text: t('why_us.team.virtual_profession'),
                    },
                    {
                      look: 'https://habbo.city/habbo-imaging/avatarimage?figure=hr-831-39.hd-209-1379.ch-3185-92.lg-3116-1249-92.ha-989999977-62.ca-989999944-1249-92.he-987462901-62&direction=2&head_direction=3&gesture=sml&action=wav',
                      name: 'Seidou',
                      profession_text: t('why_us.team.seidou_profession'),
                    },
                  ],
                },
              ],
            },
            updates: {
              title: t('why_us.updates.title'),
              items: [
                {
                  author: 'Virtual',
                  author_look:
                    'https://habbo.city/habbo-imaging/avatarimage?figure=hr-3163-45.hd-209-1391.ch-210-92.lg-275-1189.ha-990000014-62.ca-987463078-92-1196&direction=2&head_direction=3&gesture=sml&action=wav',
                  date: '08.05.2021',
                  update_text: t('why_us.updates.item_bwr.text'),
                  image: '/static/images/Maintenance/BWR.png',
                  tags: [
                    {
                      name: t('why_us.updates.item_bwr.tag_first'),
                    },
                    {
                      name: t('why_us.updates.item_bwr.tag_second'),
                    },
                  ],
                },
                {
                  author: 'Virtual',
                  author_look:
                    'https://habbo.city/habbo-imaging/avatarimage?figure=hr-3163-45.hd-209-1391.ch-210-92.lg-275-1189.ha-990000014-62.ca-987463078-92-1196&direction=2&head_direction=3&gesture=sml&action=wav',
                  date: '08.05.2021',
                  update_text: t('why_us.updates.item_discord.text'),
                  image: '/static/images/Maintenance/Discord.png',
                  tags: [
                    {
                      name: t('why_us.updates.item_discord.tag_first'),
                    },
                    {
                      name: t('why_us.updates.item_discord.tag_second'),
                    },
                  ],
                },
                {
                  author: 'Seidou',
                  author_look:
                    'https://habbo.city/habbo-imaging/avatarimage?figure=hr-831-39.hd-209-1379.ch-3185-92.lg-3116-1249-92.ha-989999977-62.ca-989999944-1249-92.he-987462901-62&direction=2&head_direction=3&gesture=sml&action=wav',
                  date: '08.05.2021',
                  update_text: t('why_us.updates.item_giveaway.text'),
                  image: '/static/images/Maintenance/Giveaway.png',
                  tags: [
                    {
                      name: t('why_us.updates.item_giveaway.tag_first'),
                    },
                    {
                      name: t('why_us.updates.item_giveaway.tag_second'),
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
