import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import s from './Button.module.css';

type ButtonType = 'default' | 'primary' | 'secondary' | 'danger' | 'warning';

type ButtonAlign = 'left' | 'right' | 'center';

export type Props = {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: ButtonType;
  align?: ButtonAlign;
  big?: boolean;
  small?: boolean;
  className?: string;
  href?: string;
};

const Button: React.FC<PropsWithChildren<Props>> = ({
  onClick,
  disabled,
  loading = true,
  type = 'default',
  align = 'left',
  big,
  small,
  className = '',
  children,
  ...rest
}) => {
  const handleClick = () => {
    if (typeof onClick === 'function' && !disabled && !loading) {
      onClick();
    }
  };

  const classNames = clsx(
    s['Button'],
    s[`Button--${type}`],
    s[`Button--${align}`],
    `${big ? s['Button--big'] : ''}`,
    `${small ? s['Button--small'] : ''}`,
    `${small ? s['Button--disabled'] : ''}`,
    className,
  );

  // Render functional Button (default)
  return (
    <button type="button" className={classNames} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
