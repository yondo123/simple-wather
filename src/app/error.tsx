'use client';

import { Button, Heading, Text } from '@layouts/components';
import { errorPageContainerStyle } from './_styles/errorPageStyle';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  const errorMessage = error.message;

  return (
    <section css={errorPageContainerStyle}>
      <Heading>오류가 발생했어요.</Heading>
      <Text colorScheme="error" size="lg">
        {errorMessage}
      </Text>
      <Button
        onClick={() => {
          reset();
        }}
      >
        다시시도
      </Button>
    </section>
  );
};

export default Error;
