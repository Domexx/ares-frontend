import react from 'react;';
import AvatarSelector, { Props as AvatarSelectionProps } from '../../components/AvatarSelector/AvatarSelector';

export type Props = {
  avatarSelector: AvatarSelectionProps;
};

export const AvatarSelectionPage: React.FC<Props> = ({ avatarSelector }) => {
  return <AvatarSelector {...avatarSelector} />;
};
