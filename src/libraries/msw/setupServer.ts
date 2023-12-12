import { setupServer } from 'msw/node';
import { handlers } from '@tests/mocks/api/handlers';

export const server = setupServer(...handlers);
