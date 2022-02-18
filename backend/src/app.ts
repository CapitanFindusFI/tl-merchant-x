import express from 'express';
import { SERVER_PORT } from './config';
import logger from './logger';

const app = express();
const log = logger();

app.listen(SERVER_PORT, () => {
  log.info(`Server running on port: ${SERVER_PORT}`);
});
