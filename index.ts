import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ConexionDB from './src/config/db.js';
import authRoutes from './src/routes/auth.routes.js';
import cartRoutes from './src/routes/cart.routes.js';
import productRoutes from './src/routes/product.routes.js';
dotenv.config();

const app = express();
app.use(express.json()); 

app.use(cors({ origin: "*" })); 
app.use(express.json()); 
ConexionDB();

app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/product', productRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(` Servidor activo y escuchando en el puerto ${PORT}`);
});