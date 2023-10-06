import { Response } from 'express';

export function sendFailure(
    res: Response,
    statusCode: number,
    message: any,
) {
    res.status(statusCode).json({
        status: 'failure',
        message,
    });
}

export function sendSuccess(
    res: Response,
    statusCode: number,
    message: any,
) {
    res.status(statusCode).json({
        status: 'success',
        message,
    });
}
