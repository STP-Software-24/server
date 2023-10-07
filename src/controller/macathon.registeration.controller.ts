import { Request, Response } from 'express';
import { sendFailure, sendSuccess } from '../utils/custom-response-handler';
import {
    dbAddWorkshopParticipant,
    dbGetAllWorkshopParticipants,
} from '../model/workshop.registeration.mode';
import {
    sendMacathonRegisterationEmail,
    sendWorkshopRegisterationEmail,
} from '../utils/mail.templates';
import { WorkshopParticipant } from '../types/workshop-participants';
import { MacathonParticipant } from '../types/macathon.registeration';
import {
    dbAddMacathonParticipant,
    dbGetAllMacathonParticipants,
    dbGetMacathonTeamByName,
} from '../model/macathon.registeration.model';
import { MacathonRoleEnum } from '../utils/enums/macathon.enum';

export async function addMacathonTeamMember(req: Request, res: Response) {
    try {
        const participant: MacathonParticipant = req.body;

        console.log({ participant });

        await dbAddMacathonParticipant(
            participant,
            MacathonRoleEnum.TEAM_MEMBER,
        );
        await sendMacathonRegisterationEmail(participant.email);
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

export async function addMacathonTeamLeader(req: Request, res: Response) {
    try {
        const participant: MacathonParticipant = req.body;

        console.log({ participant });

        await dbAddMacathonParticipant(
            participant,
            MacathonRoleEnum.TEAM_LEADER,
        );
        await sendMacathonRegisterationEmail(participant.email);
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

export async function getMacathonTeamMembers(req: Request, res: Response) {
    try {
        const { team_name } = req.params;
        const teamParticipants = await dbGetMacathonTeamByName(team_name);
        sendSuccess(res, 200, teamParticipants.rows);
    } catch (error) {
        sendFailure(res, 500, (error as Error).message);
    }
}

export async function getAllMacathonParticipants(req: Request, res: Response) {
    try {
        const participants = await dbGetAllMacathonParticipants();
        sendSuccess(res, 200, participants.rows);
    } catch (error) {
        sendFailure(res, 500, (error as Error).message);
    }
}
