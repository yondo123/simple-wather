import { setupWorker } from 'msw';
import { handlers } from '@tests/mocks/api/handlers';

const worker = setupWorker(...handlers);
worker.start();

export default worker;
