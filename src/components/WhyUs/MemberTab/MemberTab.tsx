import React from 'react';
import Image from 'next/image';
import { Member, Team, TeamItem } from '../../../shared/interfaces/WhyUsItem';
import s from './MemberTab.module.css';

export type Props = {
  main: Team;
};

const MemberTab: React.FC<Props> = ({ main }) => {
  const items = main.items.map((item: TeamItem, index: number) => {
    return (
      // eslint-disable-next-line react/no-array-index-key
      <div key={index} className={s['MemberTab-item']}>
        <h1 className="title">{item.title}</h1>
        {item.member.map((member: Member, key: number) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={key} className={s['MemberTab-itemContent']}>
              <div className={s['MemberTab-avatar']}>
                <Image src={member.look} layout="fixed" width={64} height={110} alt={member.name} />
              </div>
              <div className={`${s['MemberTab-itemName']} title`}>{member.name}</div>
              <p className={s['MemberTab-itemDescription']}>{member.profession_text}</p>
            </div>
          );
        })}
      </div>
    );
  });
  return <div className={`${s['MemberTab']} u-grid`}>{items}</div>;
};

export default MemberTab;
