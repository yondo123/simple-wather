import { ThemeProvider } from '@emotion/react';
import theme from '@libraries/emotion/theme';

export const EmotionThemeProviderMock = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
