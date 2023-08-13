import { Router } from 'express';
import { getAllMembersApplication, registerMemberApplication } from '../controller/member.recruitment.controller';

const memberRecruitmentRouter = Router();

memberRecruitmentRouter
.post('/', registerMemberApplication)
.get('/', getAllMembersApplication);

export default memberRecruitmentRouter;
