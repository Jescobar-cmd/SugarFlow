
import { Router } from 'express';
import { AuthController } from '../controllers/auth_Login.js';
import { validate } from '../middlewares/validation_account.js'; 
import LoginUserSchema from '../validations/login.js'; 
import CreationUserSchema from '../validations/account_Creation.js';
const router = Router();

router.post('/login', 
    validate(LoginUserSchema), 
    AuthController.login       
);
router.post('/register', 
    validate(CreationUserSchema), 
    AuthController.register
);

export default router;