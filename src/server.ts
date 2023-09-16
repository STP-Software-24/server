import http from 'http';
import api from './api';
import { dbConnect } from './services/database';
import config from './config/config';

const server = http.createServer(api);

(async () => {
    //await dbConnect();
    server.listen(config.PORT, () => {
        console.log(`Server listening on port ${config.PORT}`);
    });
})();
