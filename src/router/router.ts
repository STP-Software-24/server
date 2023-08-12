import { Router } from 'express';
import memberRecruitmentRouter from './member.recruitment';

const router = Router();

router.use('/member-recruitment', memberRecruitmentRouter);
export default router;
