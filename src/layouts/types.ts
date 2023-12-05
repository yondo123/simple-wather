type Colors = 'white' | 'black';
type BaseColors = 'primary' | 'secondary' | 'accent';
type StatusColors = 'success' | 'warning' | 'error' | 'info';
type ContentColors = 'neutral' | 'border' | 'font' | 'disabled';

export type Breakpoint = Record<'sm' | 'md' | 'lg', number>;
export type ColorToken = BaseColors | StatusColors | ContentColors | Colors;
export type Size = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

/** Typography */
export type FontBold = 'light' | 'medium' | 'semi' | 'extra' | number;
export type FontAlign = 'start' | 'end' | 'center' | 'justify';
export type FontDecoration = 'none' | 'underline' | 'line-through' | 'overline';
export type FontStyle = 'normal' | 'italic' | 'oblique';

/** Skeleton */
export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  circle?: boolean;
  rounded?: boolean;
  animation?: boolean;
  colorScheme?: ColorToken;
}

export type FlexToken = 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
