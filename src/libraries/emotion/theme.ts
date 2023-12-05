import { Theme } from '@emotion/react';
import { Colors } from '@layouts/colors';
import type { ColorToken } from '@layouts/types';

type ColorValue = (typeof Colors)[keyof typeof Colors]; // Object 값을 타입으로 사용하고 싶을 때

export interface ThemeType {
  colors: Record<ColorToken, ColorValue>;
}

const theme: Theme = Object.freeze({
  colors: Colors
});

export interface ThemeColors {
  theme: Record<keyof typeof theme.colors, string>;
}

export default theme;
