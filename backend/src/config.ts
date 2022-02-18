import 'dotenv/config';

export const SERVER_PORT = Number(process.env.PORT) || 3001;
export const LOG_LEVEL = process.env.LOG_LEVEL || 'debug';
