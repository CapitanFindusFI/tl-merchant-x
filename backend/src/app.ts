import express from 'express';
import { SERVER_PORT } from './config';
import Logger from './lib/logger';
import RootController from "./controllers/root"
import HealthcheckController from "./controllers/healthcheck"
import PokemonController from "./controllers/pokemon"
import errorHandler from './middlewares/error-handler';

const app = express();
const logger = Logger.getLogger()

app.use("/", RootController);
app.use("/healthcheck", HealthcheckController);
app.use("/pokemon", PokemonController);

app.use(errorHandler)

app.listen(SERVER_PORT, () => {
  logger.info(`Server running on port: ${SERVER_PORT}`);
});
