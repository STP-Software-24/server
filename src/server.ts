import http from 'http';
import api from './api';
import config from './config/config';
import { dbConnect } from './services/database';
import dotenv from 'dotenv';
dotenv.config();

//Setting up the server
const server = http.createServer(api);

//Listening on the specified port number
//Connection to the database
(async () => {
    await dbConnect();
    server.listen(process.env.PORT, () => {
        console.log(`Server is listening on port ${process.env.PORT}`);
    });
})();
