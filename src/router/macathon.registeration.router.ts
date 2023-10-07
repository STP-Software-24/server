import { Router } from 'express';
import { mwValidateWorkshopParticipant } from '../middleware/validation/workshop-validation.middleware';
import {
    addWorkshopParticipant,
    getAllWorkshopParticipants,
} from '../controller/workshop.registeration.controller';
import {
    mwCheckTeamExists,
    mwCheckTeamNameAvailable,
    mwValidateMacathonParticipant,
} from '../middleware/validation/macathon-validation.middleware';
import {
    addMacathonTeamLeader,
    addMacathonTeamMember,
    getAllMacathonParticipants,
    getMacathonTeamMembers,
} from '../controller/macathon.registeration.controller';

const macathonRegisterationRouter = Router();

macathonRegisterationRouter
    .post(
        '/add-team-leader',
        mwValidateMacathonParticipant,
        mwCheckTeamNameAvailable,
        addMacathonTeamLeader,
    )
    .post(
        '/add-team-member',
        mwValidateMacathonParticipant,
        mwCheckTeamExists,
        addMacathonTeamMember,
    )
    .get('/team/:team_name', getMacathonTeamMembers)
    .get('/all-participants', getAllMacathonParticipants);

export default macathonRegisterationRouter;
