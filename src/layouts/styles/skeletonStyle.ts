import { css, keyframes } from '@emotion/react';
import type { SkeletonProps } from '../types';

const keyframe = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`;

interface SkeletonStyleParams extends Omit<SkeletonProps, 'colorScheme'> {
  backgroundColor: string;
}

export const createSkeletonStyle = (skeletonProps: SkeletonStyleParams) => {
  const { animation, backgroundColor, circle, height, rounded, width } = skeletonProps;

  return css({
    ...(backgroundColor && { backgroundColor }),
    ...(circle && { borderRadius: '50%' }),
    ...(rounded && { borderRadius: '8px' }),
    ...(height && { height }),
    ...(width && { width }),
    ...(animation && { animation: `${keyframe} 1s linear infinite` })
  });
};
