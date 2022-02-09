import { ChakraProvider } from '@chakra-ui/react';
import '@client/assets/styles/tailwind.scss';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';

interface NextAppProps extends AppProps {
  appKey: string;
}

const NextApp = ({ Component, pageProps, appKey }: NextAppProps) => {
  return (
    <ChakraProvider>
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
