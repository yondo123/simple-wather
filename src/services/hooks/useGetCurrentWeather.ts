import { useSuspenseQuery } from '@tanstack/react-query';
import { getCurrentWeather } from '../api/getCurrentWeather';
import { RequestWeatherParams } from '../types';
import type { Weather } from '@weather/types';
import type { UseSuspenseQueryOptions } from '@tanstack/react-query';

export const useGetCurrentWeather = (
  params: RequestWeatherParams,
  options?: Omit<UseSuspenseQueryOptions, 'queryKey'>
) => {
  const { data, error } = useSuspenseQuery({
    queryKey: ['current-weather'],
    queryFn: () => getCurrentWeather(params),
    ...options
  });

  if (error) {
    throw new Error(error.message);
  }

  return data as Weather;
};
