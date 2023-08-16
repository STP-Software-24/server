import { Router } from 'express';
import { sendCustomEmailToAll } from '../controller/email.controller';

const emailRouter = Router();

// emailRouter.post('/custom/all', sendCustomEmailToAll);

export default emailRouter;
