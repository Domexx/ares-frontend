import React from 'react';

import { Props as NavigationProps } from '../../components/Navigation/Navigation';
import { PageLayout } from '../PageLayout/PageLayout';

export type Props = {
  navigation: NavigationProps;
};

export const DashboardPage: React.FC<Props> = ({ navigation }) => {
  return <PageLayout navigation={navigation} />;
};
