import { Client } from 'pg';
import  config  from '../config/config';

const connectionString =
    'postgres://ofahmy1234:HcSZV9ulh4tL@ep-sparkling-scene-15350032.us-east-2.aws.neon.tech/neondb?sslmode=require';

export function getDbConnectionString() {
    while (!config.DB_CONNECTION_STRING) {}
    return config.DB_CONNECTION_STRING;
}

export const dbClient = new Client({
    connectionString: config.DB_CONNECTION_STRING,
});
export async function dbConnect() {
    await dbClient.connect();
    console.log('Connected to database');
}
