import http from 'http';
import api from './api';
import config from './config/config';
import { dbConnect } from './services/database';

const server = http.createServer(api);

let portNum: number = config.PORT !== undefined ? parseInt(config.PORT) : 5432;

(async () => {
    await dbConnect();
    server.listen(portNum, () => {
        console.log(`Server is listening on port ${portNum}`);
    });
})();
