'use client';

import { Global, ThemeProvider } from '@emotion/react';
import theme from '@libraries/emotion/theme';
import globalStyle from '../resetStyle';

interface Props {
  children: React.ReactNode;
}

export const GlobalStyle = ({ children }: Props) => (
  <>
    <Global styles={globalStyle} />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
