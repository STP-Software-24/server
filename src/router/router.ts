import { Router } from 'express';
import memberRecruitmentRouter from './member.recruitment.router';
import memberRegistrationRouter from './member.registration.router';
import { dbClient } from '../services/database';
import emailRouter from './email.router';
import workshopRegisterationRouter from './workshop.registeration.router';
import macathonRegisterationRouter from './macathon.registeration.router';

const router = Router();

router.get('/health-check', async (req, res) => {
    try {
        await dbClient.query('SELECT NOW()');
        res.status(200).json({ message: 'OK' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// router.use('/member-recruitment', memberRecruitmentRouter);
// router.use('/member-registration', memberRegistrationRouter);
router.use('/workshop-registeration', workshopRegisterationRouter);
router.use('/interview-timeslots', workshopRegisterationRouter);
router.use('/macathon-registeration', macathonRegisterationRouter);

// router.use('/email', emailRouter);

export default router;
