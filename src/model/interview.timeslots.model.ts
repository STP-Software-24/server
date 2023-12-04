import { QueryResult } from 'pg';
import { dbClient } from '../services/database';
import {
    InterviewReservationDto,
    InterviewTimeSlotDto,
} from '../types/interviewer.timeslot';

export async function dbAddTimeSlot(timeSlotData: InterviewTimeSlotDto) {
    const insertQuery = `INSERT INTO interview_timeslots (interviewer_name,interviewer_email, start_time, end_time)
    VALUES ($1, $2, $3, $4)`;

    const values = [
        timeSlotData.interviewer_name,
        timeSlotData.interviewer_email,
        timeSlotData.start_time,
        timeSlotData.end_time,
    ];

    try {
        return await dbClient.query(insertQuery, values);
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function addReservationToTimeSlot(
    reservationData: InterviewReservationDto,
) {
    const insertQuery = `INSERT INTO timeslots_reserved (interviewee_id, timeslot_id)
    VALUES ($1, $2)`;

    const values = [
        reservationData.interviewee_id,
        reservationData.timeslot_id,
    ];
    try {
        return await dbClient.query(insertQuery, values);
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function dbGetAllTimeSlots() {
    const selectQuery = `SELECT it.id AS timeslot_id, it.interviewer_name, it.start_time, it.end_time, 
                       tr.interviewee_id, wp.fullname AS interviewee_name, wp.email AS interviewee_email
                FROM interview_timeslots it
                LEFT JOIN timeslots_reserved tr ON it.id = tr.timeslot_id
                LEFT JOIN workshop_participants wp ON tr.interviewee_id = wp.unique_code`;

    try {
        return (await dbClient.query(
            selectQuery,
        )) as QueryResult<InterviewTimeSlotDto>;
    } catch (error) {
        throw new Error((error as Error).message);

    }
}
