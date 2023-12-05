import type { Breakpoint } from './types';

const breakpoints: Breakpoint = {
  sm: 0,
  md: 600,
  lg: 900
};
const breakpoint: Breakpoint = {
  ...breakpoints
};

export const mediaQuery: Record<keyof Breakpoint, string> = {
  sm: `@media (max-width: ${breakpoint.md}px)`,
  md: `@media (max-width: ${breakpoint.md}px)`,
  lg: `@media (max-width: ${breakpoint.lg}px)`
};
