import { configObj } from '../types/config';

export const dev: configObj = {
    PORT: 5432,
    USER: process.env.DEV_USERNAME,
    HOST: process.env.DEV_HOST,
    DATABASE: process.env.DEV_DB,
    PASSWORD: process.env.DEV_PASSWORD,
};
