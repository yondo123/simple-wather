/* @jsxImportSource react */
import fetchGeocoding from '@services/fetch/fetchGeocoding';
import { Weather } from './_components/Weather';

interface ServerPageProps {
  pageParams: { slug: string[] };
  searchParams: { [key: string]: string | undefined };
}

const page = async ({ searchParams }: ServerPageProps) => {
  const city = searchParams?.city || '';
  const geocoding = await fetchGeocoding(city);

  return <Weather geoCoding={geocoding[0]} />;
};

export default page;
