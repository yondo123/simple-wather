import styled from '@emotion/styled';
import { mediaQuery } from '@layouts/responsive';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 224px;
  height: 224px;
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  > h1 {
    margin: 0;
  }
  ${mediaQuery.lg} {
    width: 200px;
    height: 200px;
  }
  ${mediaQuery.sm} {
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 32px;
    width: 100%;
    height: 100%;
  }
`;
