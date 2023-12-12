import '@testing-library/jest-dom';
import '@testing-library/react';
import { server } from '@libraries/msw/setupServer';

beforeAll(() => server.listen());

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(jest.fn());
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
