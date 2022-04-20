import React, { PropsWithChildren, useState } from 'react';
import PageHeader, { Props as PageHeaderProps } from '../../components/PageHeader/PageHeader';
import Navigation, { Props as NavigationProps } from '../../components/Navigation/Navigation';
import MenuContext from '../../shared/contexts/MenuContext';
import Footer, { Props as FooterProps } from '../../components/Footer/Footer';

export type Props = {
  pageHeader: PageHeaderProps;
  navigation: NavigationProps;
  footer: FooterProps;
};

export const PageLayout: React.FC<PropsWithChildren<Props>> = ({ pageHeader, navigation, footer, children }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      <div className="Page">
        <PageHeader {...pageHeader} />
        <div className="Page-body">
          <div className={`Page-bodyWrapper ${menuOpen ? 'menu-Open' : ''}`}>
            <main className={`Page-inner ${menuOpen ? 'menu-Open' : ''}`} id="main">
              {children}
            </main>
            <Footer {...footer} />
          </div>
          <Navigation {...navigation} />
        </div>
      </div>
    </MenuContext.Provider>
  );
};
