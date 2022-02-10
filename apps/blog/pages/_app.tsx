import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.less';
import { Header } from '@nx-test/header'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to blog!</title>
      </Head>
      <Header/>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
