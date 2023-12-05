import { css } from '@emotion/react';

export const createVariantStyle = (variant: 'solid' | 'ghost', backgroundColor: string) => {
  if (variant === 'ghost') {
    return css({
      backgroundColor: 'transparent',
      border: 'none',
      ':hover:not([disabled])': {
        color: backgroundColor
      }
    });
  }
  return css({
    backgroundColor
  });
};

export const createBaseStyle = (borderColor: string) =>
  css({
    width: 'fit-content',
    height: '32px',
    padding: '0 12px',
    border: `1px solid ${borderColor}`,
    borderRadius: '4px',
    fontWeight: 700,
    cursor: 'pointer',
    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.5
    }
  });

export const createWithIconStyle = () =>
  css({
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  });
