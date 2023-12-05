import { BASE_URL, CLIENT_ID } from '@shared/constants/api';
import { getErrorMessage } from '../utils';
import type { RequestWeatherParams } from '../types';

const fetchCurrentWeather = async ({ units = 'standard', lat, lon }: RequestWeatherParams) => {
  const requestUrl = `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${CLIENT_ID}`;
  const response = await fetch(requestUrl);
  const errorMessage = getErrorMessage(response.status);

  if (errorMessage) {
    throw new Error(errorMessage);
  }
  return response.json();
};

export default fetchCurrentWeather;
