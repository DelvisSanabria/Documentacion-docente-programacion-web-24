import express, { json } from 'express';
import  userRouter  from '../routes/user.routes.js';
import mongoose from 'mongoose';
import { config } from "dotenv";
config({ path: "./Config/.env" });
import cors from 'cors';

// Crear el servidor
export const app = express();

const corsOptions = {
  origin: ["http://localhost:3001"],  // Dominios permitidos
  optionsSuccessStatus: 200,  // Código de éxito para respuestas preflight OPTIONS
  methods: "GET,PATCH,POST,DELETE,PUT",  // Métodos HTTP permitidos
  allowedHeaders: ["Content-Type", "Authorization"],  // Headers permitidos
};

const port = process.env.PORT;

// Middlewares
app.use(cors(corsOptions)); // Aplica la configuración de CORS a la aplicación
app.use(json());




// Conectar a MongoDB

// DB Connection
try {
  mongoose.connect(process.env.DATABASE_URL);
} catch (error) {
  console.log(error);
}

// Rutas
app.use("/users", userRouter);

//iniciar el servidor

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});