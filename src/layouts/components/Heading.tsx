'use client';

import { createBaseFontStyle } from '../styles/fontStyle';
import { getColorFromToken } from '../utils';
import type { ColorToken, Size, FontBold, FontAlign, FontDecoration, FontStyle } from '../types';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  size?: Size;
  colorScheme?: ColorToken;
  bold?: FontBold;
  align?: FontAlign;
  decoration?: FontDecoration;
  fontStyle?: FontStyle;
}

export const Heading = ({
  children,
  colorScheme = 'font',
  size = 'xl',
  bold = 700,
  align = 'start',
  decoration = 'none',
  fontStyle = 'normal',
  ...headingProps
}: HeadingProps) => {
  const color = getColorFromToken(colorScheme);
  const baseFontStyle = createBaseFontStyle(size, color, bold, decoration, align, fontStyle);

  return (
    <>
      {size === 'xxl' && (
        <h1 css={baseFontStyle} {...headingProps}>
          {children}
        </h1>
      )}
      {size === 'xl' && (
        <h2 css={baseFontStyle} {...headingProps}>
          {children}
        </h2>
      )}
      {size === 'lg' && (
        <h3 css={baseFontStyle} {...headingProps}>
          {children}
        </h3>
      )}
      {size === 'md' && (
        <h4 css={baseFontStyle} {...headingProps}>
          {children}
        </h4>
      )}
      {size === 'sm' && (
        <h5 css={baseFontStyle} {...headingProps}>
          {children}
        </h5>
      )}
    </>
  );
};
