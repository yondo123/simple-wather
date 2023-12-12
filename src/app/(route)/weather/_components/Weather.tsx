'use client';

import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import { Skeleton } from '@layouts/components/Skeleton';
import { WeatherDetail } from '@weather/components/WeatherDetail';
import type { GeoCoding } from '@/weather/types';

interface WeatherPageProps {
  geoCoding: GeoCoding;
}

const WeatherSkeleton = () => (
  <>
    <Skeleton height="320px" />
    <Skeleton height="100dvh" animation colorScheme="disabled" />
  </>
);

export const Weather = ({ geoCoding }: WeatherPageProps) => (
  <Suspense fallback={<WeatherSkeleton />}>
    <ErrorBoundary fallback={<div>날씨 정보를 불러오는데 실패했습니다.</div>}>
      <WeatherDetail geocoding={geoCoding} />
    </ErrorBoundary>
  </Suspense>
);
