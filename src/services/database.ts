import { Client } from 'pg';
import config from '../config/config';

export const dbClient = new Client({
    host: config.HOST,
    user: config.USER,
    port: 5432,
    password: config.PASSWORD,
    database: config.DATABASE,
});

export async function dbConnect() {
    await dbClient.connect();
    console.log('Connected to database');
}
