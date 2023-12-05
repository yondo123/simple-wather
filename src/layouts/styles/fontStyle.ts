import { css } from '@emotion/react';
import type { FontAlign, FontBold, FontDecoration, Size, FontStyle } from '../types';

const xxlFontStyle = css`
  font-size: 48px;
  line-height: 64px;
  letter-spacing: -0.02em;
  font-weight: 700;
`;

const xlFontStyle = css`
  font-size: 36px;
  line-height: 48px;
  letter-spacing: -0.02em;
  font-weight: 700;
`;

const largeFontStyle = css`
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.01em;
  font-weight: 700;
`;

const mediumFontStyle = css`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  font-weight: 700;
`;

const smallFontStyle = css`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.005em;
`;

const createFontSizeStyle = (size: Size) => {
  switch (size) {
    case 'xxl':
      return css(xxlFontStyle);
    case 'xl':
      return css(xlFontStyle);
    case 'lg':
      return css(largeFontStyle);
    case 'sm':
      return css(smallFontStyle);
    default:
      return css(mediumFontStyle);
  }
};

export const createBaseFontStyle = (
  size: Size,
  color: string,
  bold: FontBold,
  decoration: FontDecoration,
  align: FontAlign,
  fontStyle: FontStyle
) => [
  {
    margin: 0,
    textDecoration: decoration,
    textAlign: align,
    fontWeight: bold,
    fontStyle,
    color
  },
  createFontSizeStyle(size)
];
