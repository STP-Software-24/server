import { Request, Response } from 'express';
import { sendEmail } from '../services/mailer';
import { emailToAllDTO } from '../types/emails';
import { dbGetAllMembersApplication } from '../model/members.recruitment.model';
import { RecruitmentMember } from '../types/members.recruitment';

export async function sendCustomEmailToAll(req: Request, res: Response) {
    const { subject, text } = req.body as emailToAllDTO;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm;
    let remainingRecepients: RecruitmentMember[] = [];
    try {
        const recepients = await dbGetAllMembersApplication();
        let count = recepients.rowCount;
        for(const recepient of recepients.rows) {
            if(!recepient.email.trim().match(emailRegex)){
                remainingRecepients.push(recepient);
                continue;
            };
            await sendEmail(recepient.email, subject, text);
            count--;
            console.log(`Emails Remaining to be send ${count}`);
        }
        res.status(200).json({
            status: 'OK',
            data: `Emails Remaining to be send ${count} to ${remainingRecepients?.map((member) => member.email)}`,
        });
    } catch (error) {
        res.status(500).json({
            status: 'ERROR',
            message: (error as Error).message,
        });
    }
}
