import React from 'react';
import { isExternalLink } from '../../shared/helpers';
import Link from '../Link';

export type Props = {
  url: string;
  text: string;
  locale: boolean;
};

/**
 * A link which automatically opens external links (URLs that aren't in its domain) in a new tab
 */
const AutoExternalLink: React.FC<Props> = ({ url, text, locale }) => {
  const props = {
    url,
    text,
    locale,
    isExternal: isExternalLink(url),
  };

  return <Link {...props} />;
};

export default AutoExternalLink;
