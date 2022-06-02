import Image from 'next/image';
import React from 'react';
import Logo from '../../elements/Logo';
import LanguageSwitcher from '../LanguageSwitcher';
import BetaInput from './BetaInput';
import s from './MaintenanceHeader.module.css';

export type Input = {
  headline: string;
  description: string;
  ctaText: string;
};

export type Props = {
  inputData: Input;
  background: string;
};

const MaintenanceHeader: React.FC<Props> = ({ inputData, background }) => {
  return (
    <header className={`${s['MaintenanceHeader']} u-grid`}>
      <div className={s['MaintenanceHeader-backgroundWrapper']}>
        <Image
          className={s['MaintenanceHeader-background']}
          src={background}
          layout="fill"
          objectFit="cover"
          alt="header_image"
        />
      </div>
      <div className={`${s['MaintenanceHeader-content']} u-grid`}>
        <div className={s['MaintenanceHeader-logo']}>
          <Logo />
        </div>
        <div className={s['MaintenanceHeader-lswitcher']}>
          <LanguageSwitcher />
        </div>
        <BetaInput {...inputData} />
      </div>
    </header>
  );
};

export default MaintenanceHeader;
