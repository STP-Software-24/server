import { Client } from 'pg';
import config from '../config/config';

// export const dbClient = new Client({
//     host: config.HOST,
//     user: config.USER,
//     port: 5432,
//     password: config.PASSWORD,
//     database: config.DATABASE,
//     ssl: {
//         rejectUnauthorized: true,
//     },
// });
export const dbClient = new Client({
    connectionString: process.env.PROD_DB_CONNECTION_STRING
});

export async function dbConnect() {
    await dbClient.connect();
    console.log('Connected to database');
}
