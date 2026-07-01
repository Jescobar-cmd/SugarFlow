import { type Request,type Response } from 'express';
import { ProductModel } from '../models/products_model.js';

export const getProducts = async (req: Request, res: Response)=>{
    try {
        const resProducts = await ProductModel.find()
        return res.status(200)
        res.json(resProducts);
    } catch (error) {
        return res.status(500).json({ message: "Error al obtener los productos" });
    }
}