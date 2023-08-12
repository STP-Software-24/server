import { Router } from 'express';
import memberRecruitmentRouter from './member.recruitment.router';
import { dbClient } from '../services/database';

const router = Router();

router.get('/health-check',async (req, res) => {
    try {
        await dbClient.query('SELECT NOW()');
        res.status(200).json({ message: 'OK' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
router.use('/member-recruitment', memberRecruitmentRouter);

export default router;
