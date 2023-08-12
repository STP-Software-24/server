import { Request, Response } from 'express';
import { addMember } from '../model/members.recruitment.model';

//TODO: ADD DTO
// TODO: ADD VALIDATION
export async function registerMemberApplication(req: Request, res: Response) {
    const member = req.body;
    try {
        const addedMember = addMember(member);
        res.json({ status: 'success', data: addedMember });
    } catch (error) {
        res.json({
            status: 'failure',
            data: (error as Error).message,
        });
    }
}
