import { Client } from 'pg';

const connectionString =
    'postgres://ofahmy1234:HcSZV9ulh4tL@ep-sparkling-scene-15350032.us-east-2.aws.neon.tech/neondb?sslmode=require';
export const dbClient = new Client({
    connectionString: connectionString,
});
export async function dbConnect() {
    await dbClient.connect();
    console.log('Connected to database');
}
