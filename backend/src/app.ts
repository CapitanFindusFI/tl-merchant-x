import express from 'express';
import { SERVER_PORT } from './config';
import Logger from './lib/logger';

const app = express();
const logger = Logger.getLogger()

app.listen(SERVER_PORT, () => {
  logger.info(`Server running on port: ${SERVER_PORT}`);
});
