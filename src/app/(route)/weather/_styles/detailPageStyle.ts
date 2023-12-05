import styled from '@emotion/styled';
import { mediaQuery } from '@layouts/responsive';
export const DetailPageContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  height: 100%;
  width: 100%;
  ${mediaQuery.sm} {
    display: flex;
    flex-direction: column;
  }
`;
