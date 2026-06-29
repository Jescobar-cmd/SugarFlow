import { type Request, type Response, type NextFunction } from 'express';
import { ZodObject } from 'zod';

export const validate= (schema: ZodObject) => 
    (req:Request, res: Response, next: NextFunction)=> {
        const resultAccount = schema.safeParse(req.body);
            if (!resultAccount.success) {
                return res.status(400).json({ errors: resultAccount.error.issues });
            }
            next();
        }