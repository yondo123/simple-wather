'use client';

import { useEffect } from 'react';

export const MswProvider = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line global-require
        require('@libraries/msw/setupBrowser');
      }
    }
  }, []);

  return null;
};
