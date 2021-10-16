import dotenv from 'dotenv';
import path from "path";

const x = path.join(__dirname, "./../../.env");

dotenv.config({ path: x });

if (!process.env.PORT) {
    process.exit(1);
}

export const serverConfig =
{
    port: parseInt(process.env.PORT as string) || 5000,
    host: process.env.HOST || '0.0.0.0',
    database: { 'uri': 'mongodb://localhost/testdb' }
}