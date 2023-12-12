import AxiosMockAdapter from 'axios-mock-adapter';
import { ErrorBoundary } from 'react-error-boundary';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import { axiosInstance } from '@libraries/axios/configure';
import { WeatherDetail } from '@weather/components/WeatherDetail';
import { EmotionThemeProviderMock, QueryClientProviderMock, queryClient } from '../mocks/contexts';
import { DUMMY_GEOCODING, DUMMY_WEATHER } from '../mocks/api/constants';

const renderWeatherDetail = () =>
  render(
    <EmotionThemeProviderMock>
      <QueryClientProviderMock>
        <ErrorBoundary fallback={<div role="note">날씨 정보를 불러오는데 실패했습니다.</div>}>
          <WeatherDetail geocoding={DUMMY_GEOCODING} />
        </ErrorBoundary>
      </QueryClientProviderMock>
    </EmotionThemeProviderMock>
  );

describe('날씨 상세 컴포넌트 테스트 (<Weather Detail/>)', () => {
  const axiosMock = new AxiosMockAdapter(axiosInstance);

  beforeAll(() => {
    axiosMock.reset();
  });

  afterEach(() => {
    cleanup();
    axiosMock.restore();
  });

  it('날씨 상세 컴포넌트에는 날씨 요약 배너가 표시된다.', async () => {
    axiosMock.onGet('/data/2.5/weather/').reply(200, DUMMY_WEATHER);

    renderWeatherDetail();
    await waitFor(() => {
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });
  });

  it('날씨 상세 컴포넌트에는 6개(기상, 풍향, 체감온도, 최고 기온, 최저 기온, 습도)의 날씨 정보가 표시된다. ', async () => {
    axiosMock.onGet('/data/2.5/weather').reply(200, DUMMY_WEATHER);
    const weather = DUMMY_WEATHER.weather[0].description;
    const deg = DUMMY_WEATHER.wind.deg;
    const feelsLike = DUMMY_WEATHER.main.feels_like;
    const tempMax = DUMMY_WEATHER.main.temp_max;
    const tempMin = DUMMY_WEATHER.main.temp_min;
    const humidity = DUMMY_WEATHER.main.humidity;

    renderWeatherDetail();

    await waitFor(() => {
      expect(screen.getAllByRole('listitem')).toHaveLength(6);

      expect(screen.getByText(/풍향/)).toBeInTheDocument();
      expect(screen.getByText(deg)).toBeInTheDocument();

      expect(screen.getByText(/날씨/)).toBeInTheDocument();
      expect(screen.getByText(weather)).toBeInTheDocument();

      expect(screen.getByText(/체감 온도/)).toBeInTheDocument();
      expect(screen.getByText(feelsLike)).toBeInTheDocument();

      expect(screen.getByText(/최고 기온/)).toBeInTheDocument();
      expect(screen.getByText(tempMax)).toBeInTheDocument();

      expect(screen.getByText(/최저 기온/)).toBeInTheDocument();
      expect(screen.getByText(tempMin)).toBeInTheDocument();

      expect(screen.getByText(/습도/)).toBeInTheDocument();
      expect(screen.getByText(humidity)).toBeInTheDocument();
    });
  });

  it('날씨 정보 API에서 오류가 발생하면 에러 메시지가 표시된다.', async () => {
    axiosMock.onGet('/data/2.5/weather').reply(200, DUMMY_WEATHER);
    renderWeatherDetail();

    await waitFor(() => {
      expect(screen.getByRole('note').textContent).toBe('날씨 정보를 불러오는데 실패했습니다.');
    });
  });
});
