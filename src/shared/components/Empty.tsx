'use client';

import { Text } from '@layouts/components/Text';
import styled from '@emotion/styled';

const EmptyWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

interface EmptyProps {
  message: string;
}

export const Empty = ({ message }: EmptyProps) => (
  <EmptyWrapper>
    <Text colorScheme="warning" size="lg">
      {message}
    </Text>
  </EmptyWrapper>
);
