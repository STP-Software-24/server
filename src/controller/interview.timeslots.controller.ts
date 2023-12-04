import { Request, Response } from 'express';
import { InterviewReservationDto, InterviewTimeSlotDto } from '../types/interviewer.timeslot';
import { sendFailure, sendSuccess } from '../utils/custom-response-handler';
import { addReservationToTimeSlot, dbAddTimeSlot, dbGetAllTimeSlots } from '../model/interview.timeslots.model';

export async function createTimeSlot(req: Request, res: Response) {
    try {
        const timeSlotData = req.body as InterviewTimeSlotDto;
        const timeSlot = await dbAddTimeSlot(timeSlotData);
        sendSuccess(res, 201, timeSlot);
    } catch (error) {
        sendFailure(res, 500, (error as Error).message);
    }
}

export async function ReserveTimeSlot(req: Request, res: Response) {
    try {
        const reservationData = req.body as InterviewReservationDto;
        const reservation = await addReservationToTimeSlot(reservationData);
        sendSuccess(res, 201, reservation);
    } catch (error) {
        sendFailure(res, 500, (error as Error).message);
    }
}

export async function getAllTimeSlots(req: Request, res: Response) {
    try {
        const timeSlots = await dbGetAllTimeSlots();
        sendSuccess(res, 200, timeSlots.rows);
    } catch (error) {
        sendFailure(res, 500, (error as Error).message);
    }
}