import { Router } from 'express';
import {
    ReserveTimeSlot,
    createTimeSlot,
    getAllTimeSlots,
} from '../controller/interview.timeslots.controller';

const InterviewTimeSlotsRouter = Router();

InterviewTimeSlotsRouter.post('/add', createTimeSlot)
    .post('/reserve', ReserveTimeSlot)
    .get('/all', getAllTimeSlots);

export default InterviewTimeSlotsRouter;
