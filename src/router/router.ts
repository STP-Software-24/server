import { Router } from 'express';
import memberRecruitmentRouter from './member.recruitment.router';

const router = Router();

router.use('/member-recruitment', memberRecruitmentRouter);
export default router;
