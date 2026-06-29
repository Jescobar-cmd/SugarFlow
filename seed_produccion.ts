import 'dotenv/config';
import mongoose from 'mongoose';
import { ProductModel } from './src/models/products_model.js'; 

const productosReales = [
    { name: "Donas de amor y amistad", category: "donas", price: 22000, description: "Donas de chocolate blanco decoradas con relleno de crema", imageUrl: "PENDIENTE_IMAGEN" },
    { name: "Donas de chocolate", category: "donas", price: 25000, description: "Donas Reina de chocolate con relleno de crema", imageUrl: "PENDIENTE_IMAGEN" },
    { name: "Donas de Salsa de mora", category: "donas", price: 20000, description: "Dona recubierta con salsa de mora", imageUrl: "PENDIENTE_IMAGEN" },
    { name: "monster postres", category: "chocolates", price: 30000, description: "Postre de chocolate con relleno de crema y diseño de Halloween", imageUrl: "PENDIENTE_IMAGEN" },
    { name: "Cupcake Dia del Padre", category: "cupcakes", price: 28000, description: "Cupcakes de chocolate blanco decorados con relleno de crema", imageUrl: "PENDIENTE_IMAGEN" },
    { name: "Dinocupcake", category: "cupcakes", price: 30000, description: "Cupcakes de chocolate con relleno de crema", imageUrl: "PENDIENTE_IMAGEN" },
    { name: "Mickey Cupcake", category: "cupcakes", price: 25000, description: "Cupcakes diseño de mickey, de chocolate", imageUrl: "PENDIENTE_IMAGEN" },
    { name: "Cupcakes del Oceano", category: "cupcakes", price: 18000, description: "Cupcakes de chocolate blanco decorados con relleno de crema", imageUrl: "PENDIENTE_IMAGEN" },
    { name: "Coronas sabor Fresa", category: "detalles personalizados", price: 40000, description: "Arreglo de coronas sabor fresa con chocolates", imageUrl: "PENDIENTE_IMAGEN" },
    { name: "Coronas sabor Limon", category: "detalles personalizados", price: 40000, description: "Arreglo de coronas sabor limon con chocolates", imageUrl: "PENDIENTE_IMAGEN" },
    { name: "Corona con arreglo de Helados", category: "detalles personalizados", price: 50000, description: "Arreglo de coronas con helados y chocolates", imageUrl: "PENDIENTE_IMAGEN" },
    { name: "Arreglo de Wiskey", category: "detalles personalizados", price: 65000, description: "Arreglo de Whiskey personalizado", imageUrl: "PENDIENTE_IMAGEN" },
    { name: "Donas de Cumpleaños", category: "donas", price: 30000, description: "Donas de cumpleaños con relleno de crema", imageUrl: "PENDIENTE_IMAGEN" },
    { name: "Chescake de Mango", category: "postres frios", price: 20000, description: "Cheesecake de mango con base en galleta triturada", imageUrl: "PENDIENTE_IMAGEN" },
    { name: "Torta de Maracuya y chocolate", category: "postres frios", price: 55000, description: "Delicioso cheesecake cubierto por salsa", imageUrl: "PENDIENTE_IMAGEN" },
    { name: "Frappes", category: "postres frios", price: 16000, description: "Bebida fría de café con leche y hielo", imageUrl: "PENDIENTE_IMAGEN" },
    { name: "Paleta de San Valentin", category: "postres frios", price: 8000, description: "Postre frío de chocolate rosado con relleno", imageUrl: "PENDIENTE_IMAGEN" },
    { name: "Paquete de 3 Paletas dia del padre", category: "postres frios", price: 20000, description: "Postre frío relleno de fresa y decorado", imageUrl: "PENDIENTE_IMAGEN" }
];

async function subirProductos() {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Conectado a MongoDB para migración...");
        
        const count = await ProductModel.countDocuments();
        if (count > 0) {
            console.log("¡La base de datos ya tiene productos! No se realizó ninguna inserción.");
        } else {
            await ProductModel.insertMany(productosReales);
            console.log(`¡Éxito! Se insertaron ${productosReales.length} productos.`);
        }
        process.exit(0);
    } catch (error) {
        console.error("Error en la migración:", error);
        process.exit(1);
    }
}

subirProductos();