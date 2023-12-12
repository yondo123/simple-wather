import { rest } from 'msw';
import { DUMMY_WEATHER, DUMMY_GEOCODING } from './constants';

export const getWeather = (isError?: boolean) => {
  return rest.get('/data/2.5/weather/', (_, res, ctx) => {
    if (isError) {
      return res(ctx.status(500));
    }

    return res(ctx.status(200), ctx.json(DUMMY_WEATHER));
  });
};

export const getGeocoding = (isError?: boolean) => {
  return rest.get('/mock/geocoding', (_, res, ctx) => {
    if (isError) {
      return res(ctx.status(500));
    }

    return res(ctx.status(200), ctx.json(DUMMY_GEOCODING));
  });
};

export default [getWeather(), getGeocoding()];
