import type { AppProps } from 'next/app';
import { StyleProvider } from '../styles';
import { Provider } from 'react-redux';
import { store } from '@stores/index';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const query = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <StyleProvider>
      <Provider store={store}>
        <QueryClientProvider client={query}>
          <ReactQueryDevtools />
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </StyleProvider>
  );
}
