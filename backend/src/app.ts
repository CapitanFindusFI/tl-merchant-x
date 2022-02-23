import express from 'express';
import cors from "cors";
import { SERVER_HOST, SERVER_PORT } from './config';
import Logger from './lib/logger';
import RootController from "./controllers/root"
import HealthcheckController from "./controllers/healthcheck"
import PokemonController from "./controllers/pokemon"
import ErrorMiddleware from './middlewares/error-middleware';

const app = express();
const logger = Logger.getLogger()

app.use(cors)

app.use("/", RootController);
app.use("/healthcheck", HealthcheckController);
app.use("/pokemon", PokemonController);

app.use(ErrorMiddleware)

app.listen(SERVER_PORT, SERVER_HOST, () => {
  logger.info(`Server running on: ${SERVER_HOST}:${SERVER_PORT}`);
});

process.on('SIGINT', function () {
  process.exit();
});