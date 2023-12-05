'use client';

import { useId } from 'react';
import { useTheme } from '@emotion/react';
import { Button } from './Button';
import { Hidden } from './Hidden';
import { inputTextWrapperStyle, inputTextBaseStyle, createInputDisabledStyle } from '../styles/inputTextStyle';
import { getColorFromToken } from '../utils';
import type { ColorToken } from '../types';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  colorScheme?: ColorToken;
  submitIcon?: React.ReactNode;
}

export const TextInput = ({
  id,
  labelText = 'Input Label',
  submitIcon,
  colorScheme = 'primary',
  ...restProps
}: InputTextProps) => {
  const { colors } = useTheme();
  const tempId = useId();
  const borderColor = getColorFromToken(colorScheme);
  const inputTextId = id ?? tempId;
  const disabledStyle = createInputDisabledStyle(colors.disabled);
  const inputTextStyle = inputTextBaseStyle(colors.font, borderColor);
  return (
    <div css={inputTextWrapperStyle}>
      <Hidden>
        <label htmlFor={inputTextId}>{labelText}</label>
      </Hidden>
      <input css={[inputTextStyle, disabledStyle]} type="text" id={inputTextId} {...restProps} />
      {submitIcon && (
        <Button variant="ghost" type="submit" icon={submitIcon}>
          {submitIcon}
        </Button>
      )}
    </div>
  );
};
