import { css } from '@emotion/react';
import { mediaQuery } from '../responsive';
import type { FlexToken } from '../types';

const FLEX_MAP: Record<FlexToken, string> = Object.freeze({
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  stretch: 'stretch'
});

export const createBaseFlexStyle = (justifyContent: FlexToken, alignItems: FlexToken) => css`
  display: flex;
  justify-content: ${FLEX_MAP[justifyContent]};
  align-items: ${FLEX_MAP[alignItems]};
`;

export const createFlexDirectionStyle = (direction: string, wrap: string) => css`
  flex-direction: ${direction};
  flex-wrap: ${wrap};
`;

export const createFlexGapStyle = (gap: string | number) => {
  if (typeof gap === 'number') {
    return css`
      gap: ${gap}px;
    `;
  }
  return css`
    gap: ${gap};
  `;
};

export const responsiveFlexStyle = css`
  ${mediaQuery.sm} {
    flex-direction: column;
  }
`;
