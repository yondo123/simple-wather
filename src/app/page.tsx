/* @jsxImportSource react */
import { WeatherSearchForm } from '@weather/components/WeatherSearchForm';
import { WeatherHistory } from '@weather/components/WeatherHistory';
import { TopBanner } from './_components/TopBanner';

const Home = () => (
  <>
    <TopBanner>
      <WeatherSearchForm />
    </TopBanner>
    <WeatherHistory />
  </>
);

export default Home;
