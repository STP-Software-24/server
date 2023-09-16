import { Request, Response } from 'express';
import {
    dbAddUser,
    dbGetAllUsers,
    dbEmailExists,
    dbPhoneExists,
} from '../model/member.registration.model';
import { OrganizationUser } from '../types/member.registration';

export async function registerUserApplication(req: Request, res: Response) {
    const user = req.body as OrganizationUser;
    try {
        const addUser = await dbAddUser(user);
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
