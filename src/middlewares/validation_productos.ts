import { type Request, type Response, type NextFunction } from 'express';
import { type ZodTypeAny } from 'zod';

export const validate= (schema: ZodTypeAny) => 
    (req:Request, res: Response, next: NextFunction)=> {
        const resultProducts = schema.safeParse(req.body)
        if (!resultProducts.success) {
            return res.status(400).json({ 
                errors: resultProducts.error.issues.map(issue => ({
                    field: issue.path.join('.'),
                    message: issue.message
                })) 
            });
        }
        req.body=resultProducts.data;
        next();
    }