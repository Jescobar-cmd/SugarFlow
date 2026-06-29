import { Router } from 'express';
import { CartController } from '../controllers/cart_controller.js';
import { validate } from '../middlewares/validation_productos.js';
import { CartSchemaZod } from '../validations/cart.js';
import { authenticate } from '../middlewares/validation_cart.js'; 

const router = Router();

router.post('/add', 
    authenticate, 
    validate(CartSchemaZod), 
    CartController.addToCart
);

export default router;