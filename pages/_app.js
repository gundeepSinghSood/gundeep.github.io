import Head from 'next/head'
import { PageTransition } from 'next-page-transitions';
import { GlobalStyles } from "../util/styleComponentUtil/globalStyles";
import '../public/styles/vendor/index.css';
import '../public/styles/resetCss/reset.css';

import Layout from '../components/templates/Layout';
import Loader from '../components/Loader';

const TIMEOUT = 100

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Hacker News App</title>
    </Head>
      <PageTransition
        timeout={TIMEOUT}
        classNames="page-transition"
        loadingComponent={<Loader />}
        loadingDelay={500}
        loadingTimeout={{
          enter: TIMEOUT,
          exit: 0,
        }}
        loadingClassNames="loading-indicator"
      >
      <Layout>
        <GlobalStyles/>
        <Component {...pageProps} />
      </Layout>
      </PageTransition>
     </>
  )
}

export default MyApp
