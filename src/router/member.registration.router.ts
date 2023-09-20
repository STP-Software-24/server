import { Router } from 'express';
import {
    getAllUserApplication,
    registerUserApplication,
    checkEmailExists,
    checkPhoneNumberExists,
    createUserValidator,
} from '../controller/member.registration.controller';

import { validateRequestSchema } from '../utils/validate.request.schema';
const memberRegistrationRouter = Router();

memberRegistrationRouter
    .post(
        '/add-user',
        //createUserValidator,
        //validateRequestSchema,
        registerUserApplication,
    )
    .get('/check-email', checkEmailExists)
    .get('/check-phone', checkPhoneNumberExists)
    .get('/get-users', getAllUserApplication);

export default memberRegistrationRouter;
