import {z} from 'zod';
import { userRules } from './rules.js';

const CreationUserSchema= z.object({
    username: userRules.UsernameRule,
    email: userRules.emailRule,
    password: userRules.passwordRule
})

export default CreationUserSchema;