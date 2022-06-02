import react from 'react';
import { Toaster } from 'react-hot-toast';
import Header, { Props as HeaderProps } from '../../components/MaintenanceHeader/MaintenanceHeader';
import SlimFooter, { Props as FooterProps } from '../../components/SlimFooter/SlimFooter';
import WhyUs, { Props as WhyUsProps } from '../../components/WhyUs/WhyUs';

export type Props = {
  header: HeaderProps;
  whyUs: WhyUsProps;
  footer: FooterProps;
};

export const MaintenancePage: React.FC<Props> = ({ header, footer, whyUs }) => {
  return (
    <>
      <Toaster position="bottom-right" />
      <Header {...header} />
      <main>
        <WhyUs {...whyUs} />
      </main>
      <SlimFooter {...footer} />
    </>
  );
};
