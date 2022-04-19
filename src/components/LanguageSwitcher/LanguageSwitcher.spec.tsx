/* istanbul ignore file */

import React from 'react';

import { render } from '@testing-library/react';
import LanguageSwitcher from './LanguageSwitcher';

describe('LanguageSwitcher Component', () => {
  it.skip('should render properly', () => {
    const { container } = render(<LanguageSwitcher />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
