import express from 'express';
import router from './router/router';
import cors from 'cors';

const api = express();
api.use(cors());
api.use(express.json());
api.use('/', router);

export default api;
