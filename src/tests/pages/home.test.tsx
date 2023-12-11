import { ThemeProvider } from '@emotion/react';
import theme from '@libraries/emotion/theme';
import { render, screen } from '@testing-library/react';
import HomePage from '@app/page';
import { AppRouterContextProviderMock } from '../mocks/contexts';

const renderHomePage = () =>
  render(
    <AppRouterContextProviderMock router={{}}>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </AppRouterContextProviderMock>
  );

describe('홈 페이지 테스트', () => {
  it('페이지가 정상적으로 렌더링 된다.', () => {
    renderHomePage();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('메인 페이지에는 검색 영역이 존재한다.', () => {
    renderHomePage();
    expect(screen.getByLabelText('Input Label')).toBeInTheDocument();
  });

  it('메인 페이지에는 배너 영역이 존재한다.', () => {
    renderHomePage();
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
