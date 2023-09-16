import { Client } from 'pg';
import config from '../config/config';

let portNum: number = config.PORT !== undefined ? parseInt(config.PORT) : 5432;

export const dbClient = new Client({
    host: config.HOST,
    user: config.USER,
    port: portNum,
    password: config.PASSWORD,
    database: config.DATABASE,
});

export async function dbConnect() {
    await dbClient.connect();
    console.log('Connected to database');
}
