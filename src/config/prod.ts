
import { configObj } from '../types/config';

export const prod: configObj = {
    PORT: 5432,
    USER: process.env.PROD_USERNAME,
    HOST: process.env.PROD_HOST,
    DATABASE: process.env.PROD_DB,
    PASSWORD: process.env.PROD_PASSWORD,
};
