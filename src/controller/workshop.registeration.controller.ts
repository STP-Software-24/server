import { Request, Response } from 'express';
import { sendFailure, sendSuccess } from '../utils/custom-response-handler';
import {
    dbAddWorkshopParticipant,
    dbGetAllWorkshopParticipants,
    dbGetWorkshopParticipantByUniqueCode,
} from '../model/workshop.registeration.mode';
import { sendNewWorkshopTestEmail, sendWorkshopRegisterationEmail, sendWorkshopTestEmail } from '../utils/mail.templates';
import { WorkshopParticipant } from '../types/workshop-participants';
import { nanoid } from 'nanoid';
import { dbClient } from '../services/database';
import { generateEightCharCode } from '../utils/unique-codes';

export async function addWorkshopParticipant(req: Request, res: Response) {
    try {
        const participant: WorkshopParticipant = {
            ...req.body,
            uniqueCode: generateEightCharCode(),
        };

        console.log({ participant });

        await dbAddWorkshopParticipant(participant);
        await sendWorkshopRegisterationEmail(
            participant.email,
            participant.workshop,
            participant.uniqueCode,
        );
        await sendNewWorkshopTestEmail(
            participant.email
        );
        sendSuccess(res, 201, 'Participant Added Successfuly');
    } catch (error) {
        let errorMsg = (error as Error).message;
        let statusCode = 500;
        if (errorMsg.includes('unique')) {
            errorMsg = `Can't register twice with the same Phone or Email`;
            statusCode = 400;
        }
        sendFailure(res, statusCode, errorMsg);
    }
}

export async function getAllWorkshopParticipants(req: Request, res: Response) {
    try {
        const participants = await dbGetAllWorkshopParticipants();
        sendSuccess(res, 200, participants.rows);
    } catch (error) {
        sendFailure(res, 500, (error as Error).message);
    }
}

export async function sendToAllWorkshopParticipants(
    req: Request,
    res: Response,
) {
    try {
        const participants = await dbGetAllWorkshopParticipants();
        const recepients = [];
        for (const row of participants.rows) {
            recepients.push(row.email);
            await sendWorkshopRegisterationEmail(
                row.email,
                row.workshop,
                row.uniqueCode,
            );
        }
        sendSuccess(res, 200, recepients);
    } catch (error) {
        sendFailure(res, 500, (error as Error).message);
    }
}

export async function validateWorkshopParticipant(
    req: Request,
    res: Response,
){
    try {
        const { uniqueCode } = req.body;
        const participant = await dbGetWorkshopParticipantByUniqueCode(uniqueCode);
        if(participant.rowCount > 0) {
            sendSuccess(res, 200, participant.rows[0].fullname);
        } else {
            sendFailure(res, 401, 'Invalid Unique Code');
        }
    } catch (error) {
        sendFailure(res, 500, (error as Error).message);
    }
}

export async function assignUniqueCode(req: Request, res: Response) {
    try {
        const tuples = await dbGetAllWorkshopParticipants();
        for (const tuple of tuples.rows) {
            const uniqueCode = generateEightCharCode();

            await dbClient.query(
                `UPDATE workshop_participants SET unique_code = '${uniqueCode}' WHERE phone_number = '${tuple.phone_number}'`,
            );
        }

        sendSuccess(res, 200, 'Assigned');
    } catch (error) {
        sendFailure(res, 500, (error as Error).message);
    }
}

export async function sendTestToParticipants(req: Request, res: Response) {
    try {
        const participants = await dbGetAllWorkshopParticipants();
        const recepients = [];
        for (const row of participants.rows) {
            recepients.push(row.email);
            await sendWorkshopTestEmail(
                row.email
            );
            
        }
        sendSuccess(res, 200, recepients);
    } catch (error) {
        sendFailure(res, 500, (error as Error).message);
    }
}


