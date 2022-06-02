import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Layout from '@Ares/components/Layout';

function Index() {
  return <Layout title="Dashboard" />;
}

export default withPageAuthRequired(Index);
