import { validationResult } from "express-validator";
import { Request, Response, NextFunction} from 'express';

export function validateRequestSchema(req:Request, res:Response, next:NextFunction) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    let message = result.array()[0].msg;

    for (let i = 1; i < result.array().length; i++) {
      message += ` - ${result.array()[i].msg}`;
    }

    return res.status(400).json({ error: message });
  }
  next();
}
