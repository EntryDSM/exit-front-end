import { ThemeProvider, Global } from '@emotion/react';
import { ReactNode } from 'react';
import { global } from './global';
import { theme } from './theme';

export const StyleProvider = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <Global styles={global} />
    {children}
  </ThemeProvider>
);
