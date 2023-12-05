'use client';

import {
  createBaseFlexStyle,
  createFlexGapStyle,
  createFlexDirectionStyle,
  responsiveFlexStyle
} from '../styles/stackStyle';
import type { FlexToken } from '../types';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  spacing?: number | string;
  align?: FlexToken;
  justify?: FlexToken;
  responsive?: boolean;
  wrap?: boolean;
}

export const Stack = ({
  children,
  direction = 'vertical',
  spacing = 0,
  justify = 'center',
  align = 'center',
  responsive = true,
  wrap = false,
  ...restProps
}: StackProps) => {
  const flexWrap = wrap ? 'wrap' : 'nowrap';
  const flexDirection = direction === 'horizontal' ? 'row' : 'column';
  const baseFlexStyle = createBaseFlexStyle(justify, align);
  const flexDirectionStyle = createFlexDirectionStyle(flexDirection, flexWrap);
  const flexGap = createFlexGapStyle(spacing);
  const responsiveStyle = responsive ? responsiveFlexStyle : null;
  return (
    <div css={[baseFlexStyle, flexDirectionStyle, flexGap, responsiveStyle]} {...restProps}>
      {children}
    </div>
  );
};
