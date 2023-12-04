import { Router } from 'express';
import { mwValidateWorkshopParticipant } from '../middleware/validation/workshop-validation.middleware';
import { addWorkshopParticipant, assignUniqueCode, getAllWorkshopParticipants, sendTestToParticipants, sendToAllWorkshopParticipants, validateWorkshopParticipant } from '../controller/workshop.registeration.controller';

const workshopRegisterationRouter = Router();

workshopRegisterationRouter
    .post(
        '/add-participant',
        mwValidateWorkshopParticipant,
        addWorkshopParticipant,
    )
    .post('/validate-code', validateWorkshopParticipant)
    .get('/all-participants', getAllWorkshopParticipants)
    .get('/send-test-emails',sendTestToParticipants)

    // .get('/send-emails',sendToAllWorkshopParticipants)
    // .get('/assign-codes', assignUniqueCode);

export default workshopRegisterationRouter;
