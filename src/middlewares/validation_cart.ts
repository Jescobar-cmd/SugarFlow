
import { type Request,type Response, type NextFunction } from 'express';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    (req as any).user = { id: "test-user-id" }; 
    next();
};