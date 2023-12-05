'use client';

import { css } from '@emotion/react';

const containerStyle = css`
  margin: 0 auto;
  max-width: 1280px;
`;

export const Container = ({ children }: { children: React.ReactNode }) => <main css={containerStyle}>{children}</main>;
