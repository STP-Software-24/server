import { QueryResult } from 'pg';
import { dbClient } from '../services/database';
import { WorkshopParticipant } from '../types/workshop-participants';
import { sendFailure } from '../utils/custom-response-handler';

export async function dbAddWorkshopParticipant(
    participant: WorkshopParticipant,
) {
    try {
        const insertQuery = `INSERT INTO workshop_participants (
            fullname, 
            email,  
            phone_number, 
            university, 
            faculty, 
            graduation_year, 
            workshop,
            workshop_second_pref,
            q1,
            q2,
            q3,
            q4,
            q5,
            q6,
            q7,
            q8
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
            $15,
            $16
            )`;

        const values = [
            participant.fullname,
            participant.email,
            participant.phone_number,
            participant.university,
            participant.faculty,
            participant.graduation_year,
            participant.workshop,
            participant.workshopSecondPref,
            participant.q1,
            participant.q2,
            participant.q3,
            participant.q4,
            participant.q5,
            participant.q6,
            participant.q7,
            participant.q8
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
            email,  
            phone_number, 
            university, 
            faculty, 
            graduation_year, 
            workshop,
            workshop_second_pref
            q1,
            q2,
            q3,
            q4,
            q5,
            q6,
            q7,
            q8
            FROM workshop_participants
        `;
        
        return (await dbClient.query(
            selectQuery,
        )) as QueryResult<WorkshopParticipant>;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
