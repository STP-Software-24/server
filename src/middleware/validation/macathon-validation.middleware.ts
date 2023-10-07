import { NextFunction, Request, Response } from 'express';
import { sendFailure } from '../../utils/custom-response-handler';
import { dbGetMacathonTeamByName } from '../../model/macathon.registeration.model';
import { validateMacathonParticipant } from '../../utils/validation/macathon.validation';

export async function mwCheckTeamExists(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        let { team_name } = req.body;
        if (!team_name) team_name = req.params.team_name;
        const team = await dbGetMacathonTeamByName(team_name);
        if (!team.rowCount) throw new Error(`${team_name} Team doesn't exist`);
        return next();
    } catch (error) {
        return sendFailure(res, 400, (error as Error).message);
    }
}

export async function mwCheckTeamNameAvailable(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        let { team_name } = req.body;
        if (!team_name) team_name = req.params.team_name;
        const team = await dbGetMacathonTeamByName(team_name);
        if (team.rowCount) throw new Error(`${team_name} Team name is already taken`);
        return next();
    } catch (error) {
        return sendFailure(res, 400, (error as Error).message);
    }
}

export function mwValidateMacathonParticipant(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const participant = req.body;
        validateMacathonParticipant(participant);
        return next();
    } catch (error) {
        return sendFailure(res, 400, (error as Error).message);
    }
}
