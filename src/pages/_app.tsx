import type { AppProps } from 'next/app';
import { StyleProvider } from '../styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <Component {...pageProps} />
    </StyleProvider>
  );
}
