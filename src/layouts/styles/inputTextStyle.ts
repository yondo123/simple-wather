/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { mediaQuery } from '../responsive';

export const inputTextWrapperStyle = css`
  position: relative;
  width: 720px;
  > button {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }
  ${mediaQuery.lg} {
    width: 100%;
  }
  ${mediaQuery.sm} {
    font-size: 14px;
  }
`;

export const inputTextBaseStyle = (color: string, borderColor: string) => css`
  width: 100%;
  margin: 0;
  padding: 16px 12px;
  font-weight: 700;
  line-height: 0;
  color: ${color};
  background-color: '#ffffff';
  border: 2px solid ${borderColor};
  border-radius: 12px;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  ::placeholder {
    color: ${color};
  }
  :focus-visible {
    border-color: ${borderColor};
    outline: none;
  }
`;

export const createInputDisabledStyle = (disabledColor: string) => css`
  :disabled {
    border-style: none;
    background-color: ${disabledColor};
    cursor: not-allowed;
  }
`;
