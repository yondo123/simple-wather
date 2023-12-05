'use client';

import { Stack, Heading } from '@layouts/components';
import { BannerWrapper } from '../_styles/bannerStyle';

export const TopBanner = ({ children }: { children: React.ReactNode }) => (
  <BannerWrapper>
    <Stack justify="center" align="center" spacing={16}>
      <Heading size="xxl" colorScheme="neutral">
        🌤️ Simple Weather App
      </Heading>
      {children}
    </Stack>
  </BannerWrapper>
);
