import express from 'express';
import router from './router/router';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { checkEmailExists } from './controller/member.registration.controller';
const api = express();
/*
// Adding Swagger Api-Documentation Options
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'STP Organization Event',
            version: '1.0.0',
            description: 'API-Documentation',
        },
    },
    apis: ['./router/*.js'],
};
const swaggerSpecs = swaggerJsDoc(options);
api.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
*/
//Applying Cors
api.use(cors());
api.use(express.json());
api.use('/', router);

export default api;
