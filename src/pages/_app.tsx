import type { AppProps } from 'next/app';
import { StyleProvider } from '../styles';
import { useRouter } from 'next/router';
import Header from '@components/header';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <StyleProvider>
      <Header pathname={pathname} />
      <Component {...pageProps} />
    </StyleProvider>
  );
}
