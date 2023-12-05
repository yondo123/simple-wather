import { css } from '@emotion/react';

export const errorPageContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  & > button {
    margin-top: 36px;
  }
`;
