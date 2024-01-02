import { css } from '@emotion/react';
import type { FontAlign, FontBold, FontDecoration, Size, FontStyle } from '../types';

const xxlFontStyle = css`
  font-size: 48px;
  line-height: 64px;
  letter-spacing: -0.02em;
`;

const xlFontStyle = css`
  font-size: 36px;
  line-height: 48px;
  letter-spacing: -0.02em;
`;

const largeFontStyle = css`
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.01em;
`;

const mediumFontStyle = css`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
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

const createFontBoldStyle = (bold: FontBold) => {
  if (typeof bold === 'number') {
    return bold;
  }
  switch (bold) {
    case 'extra':
      return 900;
    case 'semi':
      return 700;
    case 'medium':
      return 500;
    case 'light':
      return 300;
    default:
      return 400;
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
    fontWeight: createFontBoldStyle(bold),
    fontStyle,
    color
  },
  createFontSizeStyle(size)
];
