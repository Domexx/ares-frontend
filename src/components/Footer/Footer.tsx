import React from 'react';
import Logo from '../../elements/Logo';
import s from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={`${s['Footer']} u-grid`}>
      <div className={`${s['FooterTop']} u-grid`}>
        <div className={s['FooterTop-logo']}>
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
