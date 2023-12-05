import styled from '@emotion/styled';

export const BannerWrapper = styled.header`
  height: 320px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
