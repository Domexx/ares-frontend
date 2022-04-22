import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Layout from '@Cosmic/components/Layout';

function Index() {
  return <Layout title="Dashboard" />;
}

export default withPageAuthRequired(Index);
