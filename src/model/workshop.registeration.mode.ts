import { QueryResult } from 'pg';
import { dbClient } from '../services/database';
import { WorkshopParticipant } from '../types/workshop-participants';
import { sendFailure } from '../utils/custom-response-handler';

export async function dbAddWorkshopParticipant(
    participant: WorkshopParticipant,
) {
    try {
        const insertQuery = `insert INTO workshop_participants (
            fullname, 
            national_id, 
            email,  
            phone_number, 
            university, 
            faculty, 
            graduation_year, 
            q1,
            q2,
            q3,
            q4,
            q5,
            q6,
            q7
        ) 
        VALUES 
        (
            $1, 
            $2, 
            $3, 
            $4,
            $5,
            $6,
            $7,
            $8,
            $9,
            $10,
            $11,
            $12,
            $13,
            $14,
            )`;

        const values = [
            participant.fullname,
            participant.national_id,
            participant.email,
            participant.phone_number,
            participant.university,
            participant.faculty,
            participant.graduation_year,
            participant.q1,
            participant.q2,
            participant.q3,
            participant.q4,
            participant.q5,
            participant.q6,
            participant.q7,
        ];

        return await dbClient.query(insertQuery, values);
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function dbGetAllWorkshopParticipants() {
    try {
        const selectQuery = `SELECT  
            fullname, 
            national_id, 
            email,  
            phone_number, 
            university, 
            faculty, 
            graduation_year, 
            q1,
            q2,
            q3,
            q4,
            q5,
            q6,
            q7
            FROM workshop_participants
        `;
        return (await dbClient.query(
            selectQuery,
        )) as QueryResult<WorkshopParticipant>;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
