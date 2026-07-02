import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, maxLength: 100 },
    price: { type: Number, required: true, min: 1000 },
    category: { 
        type: String, 
        required: true, 
        enum: ["chocolates", "cupcakes", "donas", "tortas", "detalles personalizados", "postres frios"] 
    },
    imageUrl: { type: String, required: true }
}, {
    timestamps: true
});

export const ProductModel = model('Product', productSchema,'products');