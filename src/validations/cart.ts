
import { z } from 'zod';

export const CartSchemaZod = z.object({
    productID: z.string().length(24, "ID de producto inválido"),
    quantity: z.number().int().min(1, "Mínimo 1 unidad")
});
