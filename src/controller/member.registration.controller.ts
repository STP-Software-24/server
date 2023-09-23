import { Request, Response } from 'express';
import {
    dbAddUser,
    dbGetAllUsers,
    dbEmailExists,
    dbPhoneExists,
} from '../model/member.registration.model';
import { OrganizationUser } from '../types/member.registration';
import { body } from 'express-validator';
import { sendEmail } from '../services/mailer';

export const createUserValidator = [
    body('name')
        .not()
        .isEmpty()
        .withMessage("Name Can't be empty")
        .isString()
        .isAlpha()
        .withMessage('Name Can Contains letters Only'),

    body('email')
        .not()
        .isEmpty()
        .withMessage("Email Can't be empty")
        .isEmail()
        .withMessage('Write Your Email Correctly'),

    body('phone_number')
        .not()
        .isEmpty()
        .withMessage('Phone Number Cannot be empty')
        .matches(/^(010|011|012|015)\d{8}$/)
        .withMessage('Write your Phone Number Correctly'),

    body('area_of_residence')
        .not()
        .isEmpty()
        .withMessage("Name Can't be empty")
        .isString()
        .withMessage('Write Area of Residence Correctly'),
];


//This Controller is responsible for Adding new Users from the application
//firstly we need to get the user data from the req
export async function registerUserApplication(req: Request, res: Response) {
    console.log('hello');
    const user = req.body as OrganizationUser;
    try {
        const addUser = await dbAddUser(user);
        await sendEmail(user.email,'Level Up 2.0 Orientation Day | Ain Shams Event',`Dear Future Engineer,

Hope this email finds you in good health and spirit.

Firstly, warm congratulations to you for being accepted into the Engineering faculty at Ain Shams University. Secondly, Thank you for being interested in attending the Orientation Day with STP this year. We hope you have an amazing time.

We would like to remind you that the event is Completely Free. You do not have to pay anything to attend.

Please make sure that you have joined the WhatsApp group that was in the form you filled out before, in order to keep updated with any news and if you have any questions for easier communication. If you have not joined yet, You can message us on Facebook to send you the group link.

We are excited to see you there!!

https://chat.whatsapp.com/IQew0pdD3LK51NKWsMdgKX

Best Wishes,
--
STP Team

https://www.stp-org.com/`)
        res.status(200).json({ status: 'success', data: addUser });
    } catch (error) {
        res.status(409).json({
            status: 'failure',
            data: (error as Error).message,
        });
    }
}

export async function getAllUserApplication(req: Request, res: Response) {
    try {
        const members = await dbGetAllUsers();
        res.json(members.rows);
    } catch (error) {
        res.status(500).json({
            status: 'failure',
            data: (error as Error).message,
        });
    }
}

export async function checkEmailExists(req: Request, res: Response) {
    const email = req.body as string;
    try {
        const emailExists = await dbEmailExists(email);
        if (emailExists.rowCount !== 0) {
            throw new Error('This Email Already Exists');
        }
        res.status(200).json('This is a valid email');
    } catch (error) {
        res.status(500).json({
            status: 'failure',
            data: (error as Error).message,
        });
    }
}

export async function checkPhoneNumberExists(req: Request, res: Response) {
    const phoneNumber = req.body as string;
    try {
        const PhoneExists = await dbPhoneExists(phoneNumber);
        if (PhoneExists.rowCount !== 0) {
            throw new Error('This Phone Already Exists');
        }
        res.status(200).json('This is a valid phone');
    } catch (error) {
        res.status(500).json({
            status: 'failure',
            data: (error as Error).message,
        });
    }
}
