import styled from '@emotion/styled';

export const BannerWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 320px;
  padding: 16px 0;
  background-color: ${({ theme }) => theme.colors.primary};
`;
