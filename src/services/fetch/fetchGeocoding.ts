import { BASE_URL, CLIENT_ID } from '@shared/constants/api';
import { generateUrlParams } from '@shared/utils/httpRequest';
import { getErrorMessage } from '../utils';
import type { GeoCoding } from '@weather/types';

const fetchGeocoding = async (city: string): Promise<GeoCoding[]> => {
  const queryParameters = generateUrlParams({
    q: city,
    limit: '1',
    appid: CLIENT_ID
  });

  const requestUrl = `${BASE_URL}geo/1.0/direct?${queryParameters}`;
  const response = await fetch(requestUrl);
  const errorMessage = getErrorMessage(response.status);

  if (errorMessage) {
    throw new Error(errorMessage);
  }
  return response.json();
};

export default fetchGeocoding;
