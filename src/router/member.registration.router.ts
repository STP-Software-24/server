import { Router } from 'express';
import {
    getAllUserApplication,
    registerUserApplication,
    checkEmailExists,
    checkPhoneNumberExists,
    createUserValidator,
    checkPhoneValidator,
    checkEmailValidator,
} from '../controller/member.registration.controller';

import { validateRequestSchema } from '../utils/validate.request.schema';
const memberRegistrationRouter = Router();

memberRegistrationRouter
    .post(
        '/add-user',
        createUserValidator,
        validateRequestSchema,
        registerUserApplication,
    )
    .get(
        '/check-email',
        checkEmailValidator,
        validateRequestSchema,
        checkEmailExists,
    )
    .get(
        '/check-phone',
        checkPhoneValidator,
        validateRequestSchema,
        checkPhoneNumberExists,
    )
    .get('/get-users', getAllUserApplication);

export default memberRegistrationRouter;
