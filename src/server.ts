import http from 'http';
import api from './api';
import config from './config/config';
import { dbConnect } from './services/database';

//Setting up the server
const server = http.createServer(api);

//Handling The Absence of port number in environment file
let portNum: number = config.PORT !== undefined ? parseInt(config.PORT) : 5432;

//Listening on the specified port number
//Connection to the data base
(async () => {
    await dbConnect();
    server.listen(portNum, () => {
        console.log(`Server is listening on port ${portNum}`);
    });
})();
