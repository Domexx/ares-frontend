import React from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { Tag, Updates, UpdatesItem } from '../../../shared/interfaces/WhyUsItem';
import s from './UpdateTab.module.css';

export type Props = {
  main: Updates;
};

const UpdateTab: React.FC<Props> = ({ main }) => {
  const { t } = useTranslation('maintenance');

  const items = main.items.map((item: UpdatesItem, index: number) => {
    return (
      // eslint-disable-next-line react/no-array-index-key
      <div key={index} className={s['UpdateTab-item']}>
        <div className={s['UpdateTab-head']}>
          <div className={s['UpdateTab-headAvatar']}>
            <Image src={item.author_look} layout="fixed" width={64} height={110} alt={item.author} />
          </div>
          <div className={s['UpdateTab-headText']}>
            <p className={s['UpdateTab-headText-update']}>
              {item.author} {t('updated_posted')}
            </p>
            <span className={s['UpdateTab-headText-date']}>
              {t('updated_date')} {item.date}
            </span>
          </div>
        </div>
        <p className={s['UpdateTab-text']}>{item.update_text}</p>
        <div className={s['UpdateTab-itemContent']}>
          <Image src={item.image} layout="responsive" height={333} width={584} objectFit="contain" alt={item.author} />
        </div>
        <div className={s['UpdateTab-foot']}>
          {item.tags.map((tag: Tag, key: number) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <span key={key} className={s['UpdateTab-tag']}>
                {tag.name}
              </span>
            );
          })}
        </div>
      </div>
    );
  });
  return <div className={s['UpdateTab']}>{items}</div>;
};

export default UpdateTab;
