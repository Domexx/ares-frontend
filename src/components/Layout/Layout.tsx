import React, { PropsWithChildren, useState } from 'react';
import Head from 'next/head';

import MenuContext from '../../shared/contexts/MenuContext';
import Footer from '../Footer';
import Navigation from '../Navigation';
import PageHeader from '../PageHeader';

export type Props = {
  title: string;
};

const Layout: React.FC<PropsWithChildren<Props>> = ({ title, children }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="Page">
        <PageHeader
          items={{
            main: [
              {
                id: 'cosmic_shop',
                name: 'Shop',
                url: 'shop',
                icon: 'bag',
              },
              {
                id: 'cosmic_friends',
                name: 'Friends',
                url: 'friends',
                icon: 'smile',
              },
              {
                id: 'cosmic_messages',
                name: 'Messages',
                url: 'messages',
                icon: 'messages',
              },
              {
                id: 'cosmic_important_news',
                name: 'Important',
                url: 'important-news',
                icon: 'bell',
              },
            ],
            secondary: [
              {
                id: 'cosmic_settings',
                name: 'Settings',
                url: 'settings',
                icon: 'cog',
              },
            ],
          }}
        />
        <div className="Page-body">
          <div className={`Page-bodyWrapper ${menuOpen ? 'menu-Open' : ''}`}>
            <main className={`Page-inner ${menuOpen ? 'menu-Open' : ''}`} id="main">
              {children}
            </main>
            <Footer
              items={[
                {
                  headline: 'Support',
                  children: [
                    {
                      name: 'Passwort vergessen?',
                      link: 'https://nowhere.de',
                    },
                    {
                      name: 'Hilfe Center',
                      link: 'https://nowhere.de',
                    },
                    {
                      name: 'Entwickler-Dokumentation',
                      link: 'https://nowhere.de',
                    },
                    {
                      name: 'Kontaktformular',
                      link: 'https://nowhere.de',
                    },
                  ],
                },
                {
                  headline: 'Informationen',
                  children: [
                    {
                      name: 'Was ist Habbo?',
                      link: 'https://nowhere.de',
                    },
                    {
                      name: 'Wie wird gespielt?',
                      link: 'https://nowhere.de',
                    },
                    {
                      name: 'Habbo Benimmregeln',
                      link: 'https://nowhere.de',
                    },
                    {
                      name: 'Sicherheit',
                      link: 'https://nowhere.de',
                    },
                  ],
                },
              ]}
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
              discord="https://discord.gg/uAmqc64S"
              copyright={{
                title: '© 2022 Cosmic is powered by Nextjs',
                description: 'This CMS has been developed for the community only.',
              }}
            />
          </div>
          <Navigation
            avatar={{
              image: '/static/images/Navigation/Avatar.jpg',
              name: 'Dome',
            }}
            main={[
              {
                id: 'cosmic_news',
                name: 'News',
                url: 'news',
                icon: 'news',
                children: [],
              },
              {
                id: 'cosmic_statistics',
                name: 'Statistics',
                url: 'statistics',
                icon: 'statistics',
                children: [],
              },
              {
                id: 'cosmic_users',
                name: 'Users',
                url: 'users',
                icon: 'users',
                children: [],
              },
            ]}
          />
        </div>
      </div>
    </MenuContext.Provider>
  );
};

export default Layout;
