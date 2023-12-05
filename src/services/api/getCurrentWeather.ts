import { get } from '@shared/utils/httpRequest';
import { CLIENT_ID } from '@shared/constants/api';
import { Weather } from '@weather/types';
import { RequestWeatherParams } from '../types';

export const getCurrentWeather = async ({ lat, lon, units = 'metric' }: RequestWeatherParams): Promise<Weather> => {
  const weather = await get<Weather>('/data/2.5/weather/', {
    params: {
      lat,
      lon,
      units,
      appid: CLIENT_ID
    }
  });
  return weather;
};
