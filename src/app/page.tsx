/* @jsxImportSource react */
import { WeatherSearchForm } from './_components/WeatherSearchForm';
import { WeatherHistory } from './_components/WeatherHistory';
import { TopBanner } from './_components/TopBanner';

const Home = async () => {
  return (
    <>
      <TopBanner>
        <WeatherSearchForm />
      </TopBanner>
      <WeatherHistory />
    </>
  );
};

export default Home;
