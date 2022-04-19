import React, { PropsWithChildren, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Navigation, { Props as NavigationProps } from '../../components/Navigation/Navigation';
import MenuContext from '../../shared/contexts/MenuContext';
import Footer from '../../components/Footer';

export type Props = {
  navigation: NavigationProps;
};

export const PageLayout: React.FC<PropsWithChildren<Props>> = ({ navigation, children }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      <div className="Page">
        <PageHeader />
        <div className="Page-body">
          <Navigation {...navigation} />
          <div className="Page-bodyWrapper">
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
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam "
              discord="https://discord.gg/uAmqc64S"
              copyright={{
                title: '© 2022 HabboSO is powered by soCMS',
                description: 'Das soCMS wurde speziell für HabboSO entwickelt.',
              }}
            />
          </div>
        </div>
      </div>
    </MenuContext.Provider>
  );
};
