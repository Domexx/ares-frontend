import React from 'react';
import Button from '../../elements/Button';
import Logo from '../../elements/Logo';
import Avatar, { Props as AvatarProps } from './Avatar/Avatar';
import s from './AvatarSelector.module.css';

import { ReactComponent as CreateIcon } from '../../assets/static/images/Avatar-Selection/CreateIcon.svg';

export type Props = {
  title: string;
  avatars: AvatarProps[];
};

const AvatarSelector: React.FC<Props> = ({ title, avatars }) => {
  const avatarList = avatars.map((avatar, index) => {
    // eslint-disable-next-line react/no-array-index-key
    return <Avatar look={avatar.look} name={avatar.name} motto={avatar.motto} key={index} />;
  });

  return (
    <div className={`${s['AvatarSelector']} u-grid`}>
      <div className={s['AvatarSelector-logo']}>
        <Logo />
      </div>
      <h1 className={s['AvatarSelector-title']}>{title}</h1>
      <div className={s['AvatarSelector-list']}>{avatarList}</div>
      <Button className={s['AvatarSelector-button']}>
        Create new Character <CreateIcon />
      </Button>
    </div>
  );
};

export default AvatarSelector;
