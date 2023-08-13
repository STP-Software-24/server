import { Request, Response } from 'express';
import { dbAddMember, dbGetAllMembersApplication } from '../model/members.recruitment.model';

//TODO: ADD DTO
// TODO: ADD VALIDATION
export async function registerMemberApplication(req: Request, res: Response) {
    const member = req.body;
    try {
        const addedMember = dbAddMember(member);
        res.json({ status: 'success', data: addedMember });
    } catch (error) {
        res.json({
            status: 'failure',
            data: (error as Error).message,
        });
    }
}

export async function getAllMembersApplication(req: Request, res: Response) {
    try {
        const members = await dbGetAllMembersApplication();
        // TODO: ADD DTO
        res.json(members.rows);
    } catch (error) {
        res.json({
            status: 'failure',
            data: (error as Error).message,
        });
    }
}
