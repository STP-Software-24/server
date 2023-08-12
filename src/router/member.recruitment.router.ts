import { Router } from 'express';
import { addMember } from '../model/members.recruitment.model';
import { registerMemberApplication } from '../controller/member.recruitment.controller';

const memberRecruitmentRouter = Router();

memberRecruitmentRouter
.post('/', registerMemberApplication);

export default memberRecruitmentRouter;
