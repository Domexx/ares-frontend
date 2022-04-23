import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import AvatarSelector from '@Cosmic/components/AvatarSelector';

function Index() {
  return (
    <AvatarSelector
      title="Choose your Avatar"
      avatars={[
        {
          look: 'hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=std&gesture=std&direction=2&head_direction=3&size=n',
          name: 'Raizer',
          motto: 'im Raizer',
        },
        {
          look: 'hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=std&gesture=std&direction=2&head_direction=3&size=n',
          name: 'Eevee',
          motto: 'im Katzen',
        },
        {
          look: 'hd-180-1.ch-255-66.lg-280-110.sh-305-62.ha-1012-110.hr-828-61&action=std&gesture=std&direction=2&head_direction=3&size=n',
          name: 'Eevee',
          motto: 'im Katzen',
        },
      ]}
    />
  );
}

export default withPageAuthRequired(Index);
