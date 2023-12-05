import type { Unit } from '@weather/types';

export interface RequestWeatherParams {
  lat: string;
  lon: string;
  units: Unit;
}
