/* @jsxImportSource react */
import { Inter } from 'next/font/google';
import { MswProvider } from '@libraries/msw/MswProvider';
import { GlobalStyle } from '@layouts/components/GlobalStyle';
import QueryProvider from '@libraries/react-query/Provider';
import { Container } from '@shared/components/Container';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simple Weather',
  description: '주요 도시의 날씨 정보를 제공합니다.'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <GlobalStyle>
      <QueryProvider>
        <body className={inter.className}>
          <MswProvider />
          <Container>{children}</Container>
        </body>
      </QueryProvider>
    </GlobalStyle>
  </html>
);

export default RootLayout;
