import Layout from '../comps/Layout';
import '../styles/globals.css'
import '../styles/header.css'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
