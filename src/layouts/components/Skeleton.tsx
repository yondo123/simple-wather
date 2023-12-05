'use client';

import { createSkeletonStyle } from '../styles/skeletonStyle';
import { getColorFromToken } from '../utils';
import type { SkeletonProps } from '../types';

export const Skeleton = (props: SkeletonProps) => {
  const { animation, colorScheme = 'neutral', circle, height, rounded, width } = props;
  const backgroundColor = getColorFromToken(colorScheme);
  const skeletonStyle = createSkeletonStyle({
    height,
    width,
    animation,
    backgroundColor,
    circle,
    rounded
  });

  return (
    <div css={skeletonStyle}>
      <span css={{ opacity: 0 }}>skelton</span>
    </div>
  );
};
