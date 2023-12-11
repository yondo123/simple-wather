'use client';

import { Text, Heading } from '@layouts/components';
import { CardContainer } from '../styles/weatherCardStyle';

interface WeatherCardProps {
  label: string;
  value: string;
}

export const WeatherCard = ({ label, value }: WeatherCardProps) => (
  <CardContainer>
    <Heading size="xxl">{label}</Heading>
    <Text colorScheme="info" size="xl">
      {value}
    </Text>
  </CardContainer>
);