import { Router } from 'express';
import {
    getAllUserApplication,
    registerUserApplication,
    checkEmailExists,
    checkPhoneNumberExists,
} from '../controller/member.registration.controller';

const memberRegistrationRouter = Router();

memberRegistrationRouter
    .post('/add-user', registerUserApplication)
    .get('/check-email', checkEmailExists)
    .get('/check-phone', checkPhoneNumberExists)
    .get('/get-users', getAllUserApplication);

export default memberRegistrationRouter;
