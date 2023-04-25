import { Urbanist } from '@next/font/google';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Layout } from '@src/components/templates/layout/';
import './utils/globals.css';

const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <main className={`${urbanist.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
      <div id="portal" className={`${urbanist.variable} font-sans`} />
    </>
  );
};

export default appWithTranslation(App);
