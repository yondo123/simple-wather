'use client';

import { css } from '@emotion/react';

const hiddenStyle = css`
  visibility: hidden;
  height: 0;
  width: 0;
  overflow: hidden;
  position: absolute;
  left: -9999px;
`;

export const Hidden = ({ children }: { children: React.ReactNode }) => <div css={hiddenStyle}>{children}</div>;
