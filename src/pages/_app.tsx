import type { AppProps } from 'next/app';
import { StyleProvider } from '../styles';
import { Provider } from 'react-redux';
import { store } from '@stores/index';
import { QueryClient, QueryClientProvider } from 'react-query';

const query = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <Provider store={store}>
        <QueryClientProvider client={query}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </StyleProvider>
  );
}
