import type { Weather, GeoCoding } from '@weather/types';

export const DUMMY_WEATHER: Weather = {
  coord: { lon: 139, lat: 35 },
  weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
  base: 'stations',
  main: {
    temp: 296.15,
    feels_like: 296.15,
    temp_min: 210.15,
    temp_max: 293.15,
    pressure: 1013,
    humidity: 53,
    sea_level: 1013,
    grnd_level: 1013
  },
  visibility: 10000,
  wind: { speed: 1.34, deg: 207, gust: 3.13 },
  snow: { '1h': 0 },
  clouds: { all: 0 },
  dt: 1623945,
  sys: {
    type: 1,
    id: 8074,
    country: 'JP',
    sunrise: 1623916467,
    sunset: 1623967801
  },
  timezone: 32400,
  id: 1851632,
  name: 'Shuzenji',
  cod: 200
};

export const DUMMY_GEOCODING: GeoCoding = {
  lat: 35.02,
  lon: 139.01,
  name: 'Shuzenji',
  country: 'JP',
  state: ''
};
