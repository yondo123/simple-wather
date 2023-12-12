import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EmotionThemeProviderMock } from '../mocks/contexts/EmotionThemeProvider';
import { Button } from '@layouts/components/Button';
import { Search } from '@layouts/icons/Search';
import { getColorFromToken } from '@layouts/utils';
import type { ButtonProps } from '@layouts/types';

const renderButton = (children: React.ReactNode, buttonProps?: Omit<ButtonProps, 'children'>) => {
  render(
    <EmotionThemeProviderMock>
      <Button {...buttonProps}>{children}</Button>
    </EmotionThemeProviderMock>
  );
};

describe('Button UI 컴포넌트 테스트', () => {
  it('Button에 포함된 텍스트와 함께 Button이 렌더링된다.', () => {
    renderButton('button');
    const $button = screen.getByRole('button');
    expect($button).toBeInTheDocument();
    expect($button).toHaveTextContent('button');
  });

  it('solid 형태의 Button은 전달한 colorScheme 배경색을 갖는다.', () => {
    const colorScheme = 'primary';
    const colorHex = getColorFromToken(colorScheme);
    renderButton('button', {
      colorScheme: 'primary'
    });
    const $button = screen.getByRole('button');
    expect($button).toBeInTheDocument();
    expect($button).toHaveStyle(`background-color: ${colorHex}`);
  });

  it('ghost 형태의 Button은 투명한 배경을 갖는다.', () => {
    renderButton('button', {
      variant: 'ghost'
    });
    const $button = screen.getByRole('button');
    expect($button).toBeInTheDocument();
    expect($button).toHaveStyle('background-color: transparent');
  });

  it('비활성화되지 않은 Button은 click 이벤트를 수행한다.', async () => {
    const onClickMock = jest.fn();
    renderButton('Solid Button', {
      onClick: onClickMock
    });
    const $button = screen.getByRole('button');
    await userEvent.click($button);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('비활성화된 Button은 click 이벤트를 수행하지 않는다.', async () => {
    const onClickMock = jest.fn();
    renderButton('Disabled Button', {
      onClick: onClickMock,
      disabled: true
    });
    const $button = screen.getByRole('button');
    await userEvent.click($button);
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it('Icon을 갖는 Button은 내부에 해당 Icon이 표시된다.', () => {
    render(
      <EmotionThemeProviderMock>
        <Button icon={<Search />}>With Icon</Button>
      </EmotionThemeProviderMock>
    );
    const $button = screen.getByRole('button');
    const $svgIcon = screen.getByRole('img');

    expect($button).toBeInTheDocument();
    expect($svgIcon).toBeInTheDocument();
  });
});
