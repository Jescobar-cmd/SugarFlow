import { type Request, type Response } from 'express';
import { AuthUser } from '../services/User.js'; 

export const AuthController = {
    register: async (req: Request, res: Response) => {
        try {
            const user = await AuthUser.registerUser(req.body);
            return res.status(201).json(user);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    },

    login: async (req: Request, res: Response) => {
        try {
            const result = await AuthUser.validateUser(req.body);
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(401).json({ message: error.message });
        }
    }
};