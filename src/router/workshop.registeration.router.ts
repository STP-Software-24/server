import { Router } from 'express';
import { mwValidateWorkshopParticipant } from '../middleware/validation/workshop-validation.middleware';
import { addWorkshopParticipant, assignUniqueCode, getAllWorkshopParticipants, sendToAllWorkshopParticipants } from '../controller/workshop.registeration.controller';

const workshopRegisterationRouter = Router();

workshopRegisterationRouter
    .post(
        '/add-participant',
        mwValidateWorkshopParticipant,
        addWorkshopParticipant,
    )
    .get('/all-participants', getAllWorkshopParticipants)
    .get('/send-emails',sendToAllWorkshopParticipants)
    .get('/assign-codes', assignUniqueCode);

export default workshopRegisterationRouter;
