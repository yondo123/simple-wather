'use client';

import { useGetCurrentWeather } from '@services/hooks/useGetCurrentWeather';
import { GeoCoding } from '@weather/types';
import { WeatherCard } from '@weather/components/WeatherCard';
import { Summary } from './WeatherSummary';
import { DetailPageContainer } from '../styles/weatherDetailPageStyle';

interface DetailProps {
  geocoding: GeoCoding;
}

export const WeatherDetail = ({ geocoding }: DetailProps) => {
  const lat = geocoding.lat.toString();
  const lon = geocoding.lon.toString();
  const { weather, dt, wind, main } = useGetCurrentWeather({ lat, lon, units: 'metric' });
  return (
    <>
      <Summary city={geocoding.name} timestamp={dt} weatherImageUrl={weather[0].icon} />
      <DetailPageContainer>
        <WeatherCard label="풍향" value={wind.deg.toString()} />
        <WeatherCard label="날씨" value={weather[0].description} />
        <WeatherCard label="체감 온도" value={main.feels_like.toString()} />
        <WeatherCard label="최고 기온" value={main.temp_max.toString()} />
        <WeatherCard label="최저 기온" value={main.temp_min.toString()} />
        <WeatherCard label="습도" value={main.humidity.toString()} />
      </DetailPageContainer>
    </>
  );
};
