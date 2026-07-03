import { type Request, type Response, type NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
    id: string;
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ 
            errors: [{ field: "auth", message: "Acceso denegado. No se proporcionó un token." }] 
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token as string, process.env.JWT_SECRET as string) as unknown as UserPayload;
        (req as any).user = { id: decoded.id }; 
        next(); 
    } catch (error) {
        return res.status(403).json({ 
            errors: [{ field: "auth", message: "Token inválido o expirado." }] 
        });
    }
};
