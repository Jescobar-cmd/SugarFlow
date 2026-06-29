import {z} from 'zod';

export const userRules= { 
    UsernameRule: z.string().min(3).max(32),
    emailRule : z.string().email(" El correo electronico es invalido "),
    passwordRule : z
        .string()
        .min(12, "La longitud es seguridad: mínimo 12 caracteres") 
        .max(128, " La contraseña demasiado larga ")
        .refine((val) => !val.toLowerCase().includes("password"), {
            message: "La contraseña no puede ser la palabra 'password'",
        })
        .transform((val) => val.trim())
}

export const ProductsRules= {
    nameRule: z.string(),
    descriptionRule:z.string().max(100),
    priceRule: z.number().positive(" El precio tiene que ser mayor a  1000 "),
    categoryRule: z.enum(["chocolates", "cupcakes","donas" , "tortas" , "detalles personalizados", "postres frios"]),
    imageUrlRule: z.string().url("Debe ser una URL válida")
}

