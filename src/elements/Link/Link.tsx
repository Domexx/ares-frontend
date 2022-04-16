/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NextLink from 'next/link';
import s from './Link.module.css';

export type Props = {
  url: string;
  text: string;
  isExternal?: boolean;
};

const Link: React.FC<Props> = ({ url, text, isExternal = false }) => {
  // @NOTE: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#security_and_privacy
  const externalProps = {
    rel: 'noreferrer noopener',
    target: '_blank',
  };

  return (
    <NextLink href={url} passHref>
      <a {...(isExternal && externalProps)} className={s['text']}>
        {text}
      </a>
    </NextLink>
  );
};

export default Link;
