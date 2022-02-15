import { ChakraProvider } from '@chakra-ui/react';
import '@client/assets/styles/tailwind.scss';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import Head from 'next/head';

interface NextAppProps extends AppProps {
  appKey: string;
}

const NextApp = ({ Component, pageProps, appKey }: NextAppProps) => {
  return (
    <ChakraProvider>
      <Head>
        <title>Next.js application</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Next.js and Nest.js monorepo" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

NextApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const appKey = process.env.APP_KEY || '';

  return { ...appProps, appKey };
};

export default NextApp;
