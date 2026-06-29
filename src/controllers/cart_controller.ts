import {type Request,type Response } from 'express';
import { CartService } from '../services/cart_service.js';

export const CartController = {
    async addToCart(req: Request, res: Response) {
        try {
            const userId = (req as any).user.id; 
            const { productID, quantity } = req.body;
            
            const cart = await CartService.addItem(userId, productID, quantity);
            res.status(200).json(cart);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
};