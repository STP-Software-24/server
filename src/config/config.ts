import dotenv from 'dotenv';
dotenv.config();
import { prod } from './prod';
import { dev } from './dev';
import { configObj } from '../types/config';

let config: configObj;

switch (process.env.NODE_ENV) {
    case 'production':
        config = prod;
        break;
    default:
        config = dev;
}

export default config;
