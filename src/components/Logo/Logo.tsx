import Image from 'next/image';
import React from 'react';
import s from './Logo.module.css';

export type Props = {
  url?: string;
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive';
  width?: number;
  height?: number;
};

const Logo: React.FC<Props> = ({ url = '#', layout = 'fixed', width = 122, height = 53 }) => {
  return (
    <div className={s['logo']}>
      <a href={url}>
        <Image src="/static/images/Logo/logo.gif" width={width} height={height} layout={layout} alt="Cosmic_Logo" />
      </a>
    </div>
  );
};

export default Logo;
