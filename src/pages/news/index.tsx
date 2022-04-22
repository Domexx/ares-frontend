import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Layout from '@Cosmic/components/Layout';

function Index() {
  return (
    <Layout title="News">
      <h1>news</h1>
    </Layout>
  );
}

export default withPageAuthRequired(Index);
