import { render, screen } from '@testing-library/react';
import { Text } from '@layouts/components/Text';
import {
  MOCK_TEXT_SIZE,
  MOCK_TEXT_BOLD,
  MOCK_TEXT_DECORATION,
  MOCK_TEXT_ALIGN
} from '../mocks/constants/layoutComponentMocks';

describe('Text UI 컴포넌트 테스트', () => {
  it('Text에 포함된 텍스트와 함께 Text가 렌더링된다.', () => {
    render(<Text>Text</Text>);
    const $text = screen.getByText('Text');
    expect($text).toBeInTheDocument();
    expect($text).toHaveTextContent('Text');
  });

  it.each(MOCK_TEXT_SIZE)('Text는 size($size)에 따라 다른 크기를 갖는다.', ({ size, expected }) => {
    render(<Text size={size}>{size}</Text>);
    const $text = screen.getByRole('paragraph');
    expect($text).toBeInTheDocument();
    expect($text).toHaveStyle({ fontSize: expected });
  });

  it.each(MOCK_TEXT_BOLD)('Text는 fontBold($fontBold)에 따라 다른 굵기를 갖는다.', ({ fontBold, expected }) => {
    render(<Text bold={fontBold}>{fontBold}</Text>);
    const $text = screen.getByRole('paragraph');
    expect($text).toBeInTheDocument();
    expect($text).toHaveStyle({ fontWeight: expected });
  });

  it.each(MOCK_TEXT_DECORATION)('Text는 decoration($decoration)에 따라 다른 선 모양을 갖는다.', ({ decoration }) => {
    render(<Text decoration={decoration}>{decoration}</Text>);
    const $text = screen.getByRole('paragraph');
    expect($text).toBeInTheDocument();
    expect($text).toHaveStyle({ textDecoration: decoration });
  });

  it.each(MOCK_TEXT_ALIGN)('Text는 align($align)에 따라 다른 시작 방향을 갖는다.', ({ align }) => {
    render(<Text align={align}>{align}</Text>);
    const $text = screen.getByRole('paragraph');
    expect($text).toBeInTheDocument();
    expect($text).toHaveStyle({ textAlign: align });
  });
});
