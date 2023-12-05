'use client';

import { useTheme } from '@emotion/react';
import { Text } from './Text';
import { getColorFromToken, getTokenFromColor, getTextColorBasedOnBrightness } from '../utils';
import { createBaseStyle, createVariantStyle, createWithIconStyle } from '../styles/buttonStyle';
import type { ColorToken } from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'solid' | 'ghost';
  as?: React.ElementType;
  colorScheme?: ColorToken;
  rightIcon?: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button = ({
  children,
  variant = 'solid',
  as = 'button',
  colorScheme = 'success',
  rightIcon,
  icon,
  ...buttonProps
}: ButtonProps) => {
  const Component = as;
  const theme = useTheme();
  const backgroundColor = getColorFromToken(colorScheme);
  const textColor = getTextColorBasedOnBrightness(backgroundColor);
  const baseStyle = createBaseStyle(theme.colors.border);
  const variantStyle = createVariantStyle(variant, backgroundColor);

  if (icon) {
    return (
      <Component type="button" css={[baseStyle, variantStyle]} {...buttonProps}>
        {icon}
      </Component>
    );
  }

  if (rightIcon) {
    return (
      <Component type="button" css={[baseStyle, variantStyle, createWithIconStyle()]} {...buttonProps}>
        <Text colorScheme={getTokenFromColor(textColor)}>{children}</Text>
        <span>{rightIcon}</span>
      </Component>
    );
  }
  return (
    <Component type="button" css={[baseStyle, variantStyle]} {...buttonProps}>
      <Text colorScheme={getTokenFromColor(textColor)}>{children}</Text>
    </Component>
  );
};
