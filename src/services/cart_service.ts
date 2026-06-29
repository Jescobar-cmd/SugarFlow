import { CartModel } from '../models/cart_model.js';

export const CartService = {
    async addItem(userId: string, productID: string, quantity: number) {
        let cart = await CartModel.findOne({ userID: userId });

        if (!cart) {
            cart = await CartModel.create({ userID: userId, items: [] });
        }
        const itemIndex = cart.items.findIndex((item: any) => item.productID.toString() === productID);

        if (itemIndex > -1) {
            const currentItem = cart.items[itemIndex];
            if (currentItem) {
                currentItem.quantity += quantity;
            }
            } else {
            cart.items.push({ productID, quantity } as any);
            }
        return await cart.save();
    }
};