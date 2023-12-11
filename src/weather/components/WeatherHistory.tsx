'use client';

import { Heading } from '@layouts/components/';
import { Empty } from '@shared/components/Empty';
import { WeatherHistoryWrapper } from '../styles/weatherHistoryStyle';

export const WeatherHistory = () => (
  <WeatherHistoryWrapper role="main">
    <Heading size="lg">Recent</Heading>
    <Empty message="최근 조회한 날씨 데이터가 없어요!" />
  </WeatherHistoryWrapper>
);
