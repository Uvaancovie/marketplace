import '../src/app/globals.css';
import { Provider } from 'next-auth/client';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
