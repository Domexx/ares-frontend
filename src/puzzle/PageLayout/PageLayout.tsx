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
            <Footer />
          </div>
        </div>
      </div>
    </MenuContext.Provider>
  );
};
