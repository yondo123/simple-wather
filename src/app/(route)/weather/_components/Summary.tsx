'use client';

import Image from 'next/image';
import { formatTimestampToDate } from '@shared/utils/date';
import { Heading, Text, Stack } from '@layouts/components';
import { BannerWrapper } from '../_styles/bannerStyle';

interface SummaryProps {
  weatherImageUrl: string;
  city: string;
  timestamp: number;
}

export const Summary = ({ city, weatherImageUrl, timestamp }: SummaryProps) => {
  return (
    <BannerWrapper>
      <Image
        priority
        style={{ border: '1px solid #e3e3e3', borderRadius: '50%', backgroundColor: 'white' }}
        alt={`${city} weather`}
        src={`https://openweathermap.org/img/wn/${weatherImageUrl}@4x.png`}
        width={100}
        height={100}
      />
      <Stack align="start">
        <Heading size="xxl" colorScheme="neutral">
          {city}
        </Heading>
        <Text size="lg" colorScheme="neutral">
          {formatTimestampToDate(timestamp)}
        </Text>
      </Stack>
    </BannerWrapper>
  );
};
