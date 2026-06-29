import {z} from 'zod';
import { userRules } from './rules.js';

const LoginUserSchema = z.object({
    email: userRules.emailRule,
    password: userRules.passwordRule
})

export default LoginUserSchema;