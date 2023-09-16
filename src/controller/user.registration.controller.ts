import { Request, Response } from 'express';
import { dbAddUser,dbGetAllUsers,dbEmailExists } from '../model/user.registration.model';
import { sendRegisterationEmail } from '../utils/mail.templates';
import { RecruitmentMember } from '../types/members.recruitment';

//TODO: ADD DTO
// TODO: ADD VALIDATION
export async function registerMemberApplication(req: Request, res: Response) {
    const member = req.body as RecruitmentMember;
    try {
        const addedMember = await dbAddMember(member);
        await sendRegisterationEmail(member.email)
        res.status(200).json({ status: 'success', data: addedMember });
    } catch (error) {
        res.status(409).json({
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
        res.status(500).json({
            status: 'failure',
            data: (error as Error).message,
        });
    }
}
