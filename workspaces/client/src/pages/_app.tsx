import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react';
import '@client/assets/styles/tailwind.scss';
import Page from '@client/components/Page';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const customTheme = extendTheme(
  withDefaultColorScheme({ colorScheme: 'teal' })
);

interface NextAppProps extends AppProps {
  appKey: string;
}

const NextApp = ({ Component, pageProps, appKey }: NextAppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <title>Next.js application</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Next.js and Nest.js monorepo" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Page>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </Page>
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

NextApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const appKey = process.env.APP_KEY || '';

  return { ...appProps, appKey };
};

export default NextApp;
