import React from 'react';
import Logo from '../../elements/Logo';
import s from './Footer.module.css';

import { ReactComponent as Discord } from '../../assets/static/images/Discord.svg';
import { ReactComponent as DownloadIcon } from '../../assets/static/images/Download.svg';

import { FooterListItem } from '../../shared/interfaces/FooterItem';

import List from './List';
import Button from '../../elements/Button';

export type Copyright = {
  title: string;
  description: string;
};

export type Props = {
  items: FooterListItem[];
  description: string;
  discord: string;
  copyright: Copyright;
};

const Footer: React.FC<Props> = ({ items, description, discord, copyright }) => {
  return (
    <footer className={`${s['Footer']} u-grid`}>
      <div className={`${s['FooterTop']} u-grid`}>
        <div className={s['FooterTop-logo']}>
          <Logo />
          <p className={s['FooterTop-logoDescription']}>{description}</p>
        </div>
        <List items={items} />
        <div className={s['FooterTop-misc']}>
          <div className={s['FooterTop-miscLanguage']}>
            <span className={s['FooterTop-miscLanguageTitle']}>Sprachauswahl</span>
          </div>
          <div className={s['FooterTop-miscApp']}>
            <span className={s['FooterTop-miscAppTitle']}>Desktop App</span>
            <p className={s['FooterTop-miscAppDescription']}>
              Downloade dir die Desktop App, um einfacher ins Hotel zukommen.
            </p>
            <Button>
              <div className={s['FooterTop-miscAppButton']}>
                <span>HabboSO downloaden</span>
                <DownloadIcon />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className={`${s['FooterBottom']} u-grid`}>
        <div className={s['FooterBottom-copyright']}>
          <div className={s['FooterBottom-copyrightTitle']}>{copyright.title}</div>
          <div className={s['FooterBottom-copyrightDescription']}>{copyright.description}</div>
        </div>
        <a href={discord} className={s['FooterBottom-discord']}>
          <Discord />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
