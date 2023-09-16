import { configObj } from './configType';

export const prod: configObj = {
    PORT: process.env.PORT,
    USER: process.env.PROD_USERNAME,
    HOST: process.env.PROD_HOST,
    DATABASE: process.env.PROD_DB,
    PASSWORD: process.env.PROD_PASSWORD,
};
