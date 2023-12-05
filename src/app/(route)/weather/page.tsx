/* @jsxImportSource react */

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import fetchGeocoding from '@services/fetch/fetchGeocoding';
import getQueryClient from '@libraries/react-query/getQueryClient';
import { WeatherDetail } from './_components/WeatherDetail';
import { getCurrentWeather } from '@services/api/getCurrentWeather';
import { Suspense } from 'react';

interface ServerPageProps {
  pageParams: { slug: string[] };
  searchParams: { [key: string]: string | undefined };
}

const page = async ({ searchParams }: ServerPageProps) => {
  const queryClient = getQueryClient();
  const city = searchParams?.city || '';
  const geocoding = await fetchGeocoding(city);
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: async () =>
      getCurrentWeather({
        lat: geocoding[0].lat.toString(),
        lon: geocoding[0].lon.toString(),
        units: 'standard'
      })
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {/* <Suspense fallback={<h2>Loading..</h2>}> */}
      <WeatherDetail geocoding={geocoding[0]} />
      {/* </Suspense> */}
    </HydrationBoundary>
  );
};

export default page;
