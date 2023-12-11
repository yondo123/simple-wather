import Router from 'next/router';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EmotionThemeProviderMock, AppRouterContextProviderMock } from '../mocks';
import { WeatherSearchForm } from '@weather/components/WeatherSearchForm';

const PLACEHOLDER_TEXT = 'Example seoul, tokyo..';
const renderSearchForm = (push?: () => void) =>
  render(
    <AppRouterContextProviderMock router={{ push }}>
      <EmotionThemeProviderMock>
        <WeatherSearchForm />
      </EmotionThemeProviderMock>
    </AppRouterContextProviderMock>
  );

describe('날씨 검색 폼 테스트', () => {
  it('검색 폼이 정상적으로 렌더링 된다.', () => {
    renderSearchForm();
    const $submitButton = screen.getByRole('button');
    const $inputText = screen.getByPlaceholderText(PLACEHOLDER_TEXT);

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect($inputText).toBeInTheDocument();
    expect($submitButton).toBeInTheDocument();
  });

  it('검색 폼에 아무것도 입력하지 않았을 때 Placeholder가 표시된다.', () => {
    renderSearchForm();
    const $inputText = screen.getByPlaceholderText(PLACEHOLDER_TEXT);
    expect($inputText).toBeInTheDocument();
  });

  it('초기 검색 값은 빈 값으로 표시된다.', () => {
    renderSearchForm();
    const $inputText = screen.getByPlaceholderText(PLACEHOLDER_TEXT);
    expect($inputText).toBeInTheDocument();
    expect($inputText).toHaveValue('');
  });

  it('돋보기 아이콘을 클릭하면 폼이 제출된다.', async () => {
    const pushMock = jest.fn();
    renderSearchForm(pushMock);

    const $submitButton = screen.getByRole('button');
    expect($submitButton).toBeInTheDocument();

    await userEvent.click($submitButton);
    expect(pushMock).toHaveBeenCalled();
  });

  it('Enter 입력을 수행하면 폼이 제출된다.', async () => {
    const pushMock = jest.fn();
    renderSearchForm(pushMock);

    const $inputText = screen.getByPlaceholderText(PLACEHOLDER_TEXT);
    await userEvent.type($inputText, '{enter}');

    expect(pushMock).toHaveBeenCalled();
  });
});
