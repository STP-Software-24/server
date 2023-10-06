import { NextFunction, Request, Response } from 'express';
import { WorkshopParticipant } from '../../types/workshop-participants';
import { sendFailure } from '../../utils/custom-response-handler';
import { validateWorkshopParticipants } from '../../utils/validation/workshop.validation';

export function mwValidateWorkshopParticipant(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const participant = req.body;
        validateWorkshopParticipants(participant);
        return next();
    } catch (error) {
        return sendFailure(res, 400, (error as Error).message);
    }
}
