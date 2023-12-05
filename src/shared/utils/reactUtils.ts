import type { ReactNode } from 'react';
import { Children, isValidElement } from 'react';

export const getComponentText = (children: ReactNode) => {
  let childText = '';
  if (children) {
    Children.forEach(children, child => {
      if (isValidElement(child)) {
        if (typeof child.props.children === 'string') {
          childText += child.props.children;
        } else {
          childText += getComponentText(child.props.children);
        }
      }
      if (typeof child === 'string') {
        childText += child;
      }
    });
  }
  return childText;
};
