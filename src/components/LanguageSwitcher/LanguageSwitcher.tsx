/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import cn from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import ClickOutside from '../../shared/utils/click-outside/ClickOutside';
import s from './LanguageSwitcher.module.css';

import { ReactComponent as ChevronDown } from '../../assets/static/images/ChevronDown.svg';

interface LOCALE_DATA {
  name: string;
  img: {
    filename: string;
    alt: string;
  };
}

const LOCALES_MAP: Record<string, LOCALE_DATA> = {
  de: {
    name: 'Deutsch',
    img: {
      filename: 'GER.svg',
      alt: 'German Flag',
    },
  },
  nl: {
    name: 'Netherlands',
    img: {
      filename: 'NL.svg',
      alt: 'Netherlands Flag',
    },
  },
  br: {
    name: 'Brazil',
    img: {
      filename: 'BR.svg',
      alt: 'Brazil Flag',
    },
  },
  'en-US': {
    name: 'English',
    img: {
      filename: 'US.svg',
      alt: 'US Flag',
    },
  },
};

const LanguageSwitcher: FC = () => {
  const [display, setDisplay] = useState(false);
  const { locale, locales, defaultLocale = 'en-US', asPath: currentPath } = useRouter();

  const options = locales?.filter((val) => {
    return val !== locale;
  });
  const currentLocale = locale || defaultLocale;

  return (
    <ClickOutside
      active={display}
      onClick={() => {
        return setDisplay(false);
      }}
    >
      <nav className={s['LanguageSwitcher']}>
        <div
          role="navigation"
          className={s['LanguageSwitcher-buttonWrapper']}
          onClick={() => {
            return setDisplay(!display);
          }}
        >
          <button type="button" className={s['LanguageSwitcher-button']} aria-label="Language selector">
            <div className={s['LanguageSwitcher-buttonGroup']}>
              <Image
                width="20"
                height="20"
                layout="fixed"
                className={s['LanguageSwitcher-image']}
                src={`/static/images/Flags/${LOCALES_MAP[currentLocale].img.filename}`}
                alt={LOCALES_MAP[currentLocale].img.alt}
              />
              <span className={s['LanguageSwitcher-name']}>{LOCALES_MAP[currentLocale].name}</span>
            </div>
            <ChevronDown
              className={cn(s['LanguageSwitcher-icon'], { [s['LanguageSwitcher-icon--active']]: display })}
            />
          </button>
        </div>
        <div className={s['LanguageSwitcher-dropdownWrapper']}>
          {options?.length && display ? (
            <div className={s['LanguageSwitcher-dropdownMenu']}>
              <div className={s['LanguageSwitcher-dropdownMenu--button']}>
                <button
                  type="button"
                  onClick={() => {
                    return setDisplay(false);
                  }}
                  aria-label="Close panel"
                  className={s['LanguageSwitcher-dropdownMenu--cross']}
                />
              </div>
              <ul className={s['LanguageSwitcher-list']}>
                {options.map((option) => {
                  return (
                    <li key={option}>
                      <Link passHref href={currentPath} locale={option}>
                        <button
                          type="button"
                          className={cn(s['LanguageSwitcher-item'])}
                          onClick={() => {
                            return setDisplay(false);
                          }}
                        >
                          <Image
                            width="20"
                            height="20"
                            layout="fixed"
                            className={s['LanguageSwitcher-image']}
                            src={`/static/images/Flags/${LOCALES_MAP[option].img.filename}`}
                            alt={LOCALES_MAP[option].img.alt}
                          />
                          <span className={s['LanguageSwitcher-name']}>{LOCALES_MAP[option].name}</span>
                        </button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </ClickOutside>
  );
};

export default LanguageSwitcher;
