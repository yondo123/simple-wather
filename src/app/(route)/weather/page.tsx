/* @jsxImportSource react */
import fetchGeocoding from '@services/fetch/fetchGeocoding';
import { WeatherDetail } from '@weather/components/WeatherDetail';

interface ServerPageProps {
  pageParams: { slug: string[] };
  searchParams: { [key: string]: string | undefined };
}

const page = async ({ searchParams }: ServerPageProps) => {
  const city = searchParams?.city || '';
  const geocoding = await fetchGeocoding(city);

  return <WeatherDetail geocoding={geocoding[0]} />;
};

export default page;
