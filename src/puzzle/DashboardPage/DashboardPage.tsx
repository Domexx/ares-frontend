import React from 'react';

import { Props as PageHeaderProps } from '../../components/PageHeader/PageHeader';
import { Props as NavigationProps } from '../../components/Navigation/Navigation';
import { Props as FooterProps } from '../../components/Footer/Footer';
import { PageLayout } from '../PageLayout/PageLayout';

export type Props = {
  pageHeader: PageHeaderProps;
  navigation: NavigationProps;
  footer: FooterProps;
};

export const DashboardPage: React.FC<Props> = ({ pageHeader, navigation, footer }) => {
  return (
    <PageLayout pageHeader={pageHeader} navigation={navigation} footer={footer}>
      <h1>forwegoerwgpoewr</h1>
      <h1>forwegoerwgpoewr</h1>
      <h1>forwegoerwgpoewr</h1>
      <h1>forwegoerwgpoewr</h1>
      <h1>forwegoerwgpoewr</h1>
      <h1>forwegoerwgpoewr</h1>
      <h1>forwegoerwgpoewr</h1>
      <h1>forwegoerwgpoewr</h1>
      <h1>forwegoerwgpoewr</h1>
      <h1>forwegoerwgpoewr</h1>
      <h1>forwegoerwgpoewr</h1>
      <h1>forwegoerwgpoewr</h1>
      <h1>forwegoerwgpoewr</h1>
      <h1>forwegoerwgpoewr</h1>
      <h1>forwegoerwgpoewr</h1>
    </PageLayout>
  );
};
