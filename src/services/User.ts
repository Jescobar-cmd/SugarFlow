import {z} from 'zod';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user_model.js';
import CreationUserSchema from '../validations/account_Creation.js';
import LoginUserSchema from '../validations/login.js';

// 

type registerInput= z.infer<typeof CreationUserSchema>;
type validateInput= z.infer<typeof LoginUserSchema>;

export const AuthUser = {
    registerUser: async (data: registerInput)=>{
        const existingUser = await UserModel.findOne({email: data.email.toLocaleLowerCase() });
            if (existingUser){
                throw new Error("El correo electrónico ya está registrado");
            }
        const hashPassword = await bcrypt.hash(data.password,10);

        const newUser = await UserModel.create({
            username: data.username,
            email: data.email.toLocaleLowerCase(),
            password: hashPassword
        })

        return {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email
        };
    },

    validateUser: async (data: validateInput)=>{
        // valida existencia de email para inicio de sesion
        const veryfyUserAccount = await UserModel.findOne({email: data.email.toLocaleLowerCase()});
            if (!veryfyUserAccount){
                throw new Error(" Creedenciales Invalidas ")
            }
        const ValidatePassword = await bcrypt.compare( data.password,veryfyUserAccount.password)
            if (ValidatePassword == false){
                throw new Error (" Las credenciales son incorrectas ")
            }
            else {
                const token = jwt.sign(
                    { id: veryfyUserAccount._id },       
                    process.env.JWT_SECRET as string,   
                    { expiresIn: '1d' }                  
            );
            return { token };
            }
    }
}

    
    