import React, { PropsWithChildren, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Navigation, { Props as NavigationProps } from '../../components/Navigation/Navigation';
import MenuContext from '../../shared/contexts/MenuContext';

export type Props = {
  navigation: NavigationProps;
};

export const PageLayout: React.FC<PropsWithChildren<Props>> = ({ navigation, children }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      <PageHeader />
      <Navigation {...navigation} />
      {children}
    </MenuContext.Provider>
  );
};
