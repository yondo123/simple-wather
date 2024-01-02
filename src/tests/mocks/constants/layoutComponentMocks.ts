import type { Size, FontBold, FontDecoration, FontAlign } from '@/layouts/types';

export const MOCK_TEXT_SIZE = [
  { size: 'xxl', expected: '48px' },
  { size: 'xl', expected: '36px' },
  { size: 'lg', expected: '20px' },
  { size: 'md', expected: '16px' },
  { size: 'sm', expected: '14px' }
] as {
  size: Size;
  expected: string;
}[];

export const MOCK_TEXT_BOLD = [
  { fontBold: 'extra', expected: 900 },
  { fontBold: 'semi', expected: 700 },
  { fontBold: 'medium', expected: 500 },
  { fontBold: 'light', expected: 300 }
] as {
  fontBold: FontBold;
  expected: number;
}[];

export const MOCK_TEXT_DECORATION = [
  { decoration: 'none' },
  { decoration: 'line-through' },
  { decoration: 'overline' },
  { decoration: 'underline' }
] as {
  decoration: FontDecoration;
}[];

export const MOCK_TEXT_ALIGN = [{ align: 'start' }, { align: 'end' }, { align: 'center' }, { align: 'justify' }] as {
  align: FontAlign;
}[];
