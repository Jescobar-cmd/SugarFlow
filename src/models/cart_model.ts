import { Schema, model } from 'mongoose';

const cartItemSchema = new Schema({
    productID: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1
    }
}, { _id: false }); 

const cartSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true 
    },
    items: [cartItemSchema] 
}, {
    timestamps: true 
});

export const CartModel = model('Cart', cartSchema);