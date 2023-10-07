import { Router } from 'express';
import { mwValidateWorkshopParticipant } from '../middleware/validation/workshop-validation.middleware';
import { addWorkshopParticipant, getAllWorkshopParticipants } from '../controller/workshop.registeration.controller';

const workshopRegisterationRouter = Router();

workshopRegisterationRouter
    .post(
        '/add-participant',
        mwValidateWorkshopParticipant,
        addWorkshopParticipant,
    )
    .get('all-participants', getAllWorkshopParticipants);

export default workshopRegisterationRouter;
