import { QueryResult } from 'pg';
import { dbClient } from '../services/database';
import { WorkshopParticipant } from '../types/workshop-participants';
import { sendFailure } from '../utils/custom-response-handler';
import { MacathonParticipant } from '../types/macathon.registeration';
import { MacathonRoleEnum } from '../utils/enums/macathon.enum';

export async function dbAddMacathonParticipant(
    participant: MacathonParticipant,
    role: MacathonRoleEnum,
) {
    try {
        const insertQuery = `INSERT INTO macathon_participants (
            fullname, 
            national_id, 
            email,  
            phone_number, 
            university, 
            faculty, 
            graduation_year, 
            team_name,
            role,
            q1,
            q2
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
            $11
            )`;

        const values = [
            participant.fullname,
            participant.national_id,
            participant.email,
            participant.phone_number,
            participant.university,
            participant.faculty,
            participant.graduation_year,
            participant.team_name,
            role,
            participant.q1,
            participant.q2,
        ];

        return await dbClient.query(insertQuery, values);
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function dbGetMacathonTeamByName(teamName: string) {
    try {
        const selectQuery = `SELECT  
        fullname, 
        national_id, 
        email,  
        phone_number, 
        university, 
        faculty, 
        graduation_year, 
        team_name,
        role,
        q1,
        q2
        FROM macathon_participants
        WHERE team_name = '${teamName}'
    `;
        return (await dbClient.query(
            selectQuery,
        )) as QueryResult<MacathonParticipant>;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function dbGetAllMacathonParticipants() {
    try {
        const selectQuery = `SELECT  
            fullname, 
            national_id, 
            email,  
            phone_number, 
            university, 
            faculty, 
            graduation_year, 
            team_name,
            role,
            q1,
            q2
            FROM macathon_participants
        `;
        return (await dbClient.query(
            selectQuery,
        )) as QueryResult<MacathonParticipant>;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
