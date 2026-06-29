import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const ConexionDB = async () => {
    try {
        if (!process.env.MONGO_URI){
            throw new Error(" La variable MONGO_URI no existe. Configúrala en el archivo .env ");
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log(" Conexion Exitosa ");
    } catch (error) {
        console.log(" La conexion fallo ",error);
        process.exit(1);
    }
}


mongoose.connection.on('error', (err) => {
    console.error(" Error en la conexión a MongoDB:", err);
});

mongoose.connection.on('disconnected', () => {
    console.warn(" Perdimos la conexión a MongoDB. Intentando reconectar...");
});

mongoose.connection.on('reconnected', () =>{
    console.log(" La conexion ha sido reestablecida! ")
});

export default ConexionDB;  