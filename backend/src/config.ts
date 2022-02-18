import 'dotenv/config';

export const SERVER_HOST = process.env.HOST || "0.0.0.0";
export const SERVER_PORT = Number(process.env.PORT) || 6556;
export const LOG_LEVEL = process.env.LOG_LEVEL || 'debug';
