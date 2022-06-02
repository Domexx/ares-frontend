import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { WhyUsMenu } from '../../shared/interfaces/WhyUsItem';
import MemberTab from './MemberTab';
import SneakTab from './SneakTab';
import UpdateTab from './UpdateTab';
import s from './WhyUs.module.css';

export type Props = {
  headline: string;
  description: string;
  tabs: WhyUsMenu;
};

const WhyUs: React.FC<Props> = ({ headline, description, tabs }) => {
  return (
    <section className={`${s['WhyUs']} u-grid`}>
      <h1 className={`${s['WhyUs-headline']} title`}>{headline}</h1>
      <p className={s['WhyUs-description']}>{description}</p>
      <div className={s['WhyUs-tabs']}>
        <Tabs defaultIndex={1}>
          <TabList>
            <Tab>{tabs.sneaks.title}</Tab>
            <Tab>{tabs.team.title}</Tab>
            <Tab>{tabs.updates.title}</Tab>
          </TabList>
          <TabPanel>
            <SneakTab main={tabs.sneaks} />
          </TabPanel>
          <TabPanel>
            <MemberTab main={tabs.team} />
          </TabPanel>
          <TabPanel>
            <UpdateTab main={tabs.updates} />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default WhyUs;
