import express, { json } from 'express';
import {config} from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from '../routes/user.routes.js';
import cors from 'cors';

/* 

Dependencias Instaladas:

1. dotenv: Manejo de variables de entorno
¿Qué es dotenv?
dotenv es una pequeña biblioteca que permite cargar variables de entorno desde un archivo .env en Node.js. Las variables de entorno son configuraciones que puedes usar en tu aplicación sin tener que exponer valores sensibles en tu código (como URLs de bases de datos, claves de API, etc.).

¿Por qué usar dotenv? 
Separación de configuración y código: Evita codificar información sensible directamente en tus archivos.
Manejo seguro de datos sensibles: Guarda claves de API, URLs y otras credenciales en un archivo seguro.
Fácil configuración: Solo tienes que crear un archivo .env y usar las variables de entorno en tu código.


para instalar : npm install dotenv

2.Cors

cors
Qué es: cors es una librería que permite configurar el Cross-Origin Resource Sharing (CORS) en aplicaciones Node.js. CORS es una política de seguridad del navegador que controla las solicitudes HTTP entre diferentes dominios, protegiendo recursos para que no se accedan sin autorización desde un origen distinto al servidor.
Por qué se usa: Permite que tu API sea accesible desde diferentes orígenes (dominios), como cuando trabajas con una aplicación frontend que se aloja en un dominio distinto al backend.
Cómo se usa: Puedes especificar qué dominios tienen acceso a tu API y qué métodos HTTP están permitidos.


Ejemplo de cómo funciona cors:
Caso 1: Petición desde http://localhost:3001
Dominio permitido: La solicitud será permitida porque el dominio está en la lista de orígenes permitidos.
Método HTTP: Si la solicitud es, por ejemplo, un POST, también será permitida porque está en la lista de métodos permitidos.
Headers: Si la solicitud incluye los headers Content-Type y Authorization, se aceptará.
Caso 2: Petición desde http://sitioChungo.com
Dominio bloqueado: La solicitud será rechazada porque http://sitioChungo.com no está en la lista de orígenes permitidos. El navegador no completará la solicitud y la bloqueará antes de enviarla.
Preflight Request (Opciones OPTIONS):
Cuando se hace una solicitud con métodos distintos a GET o POST, o con ciertos encabezados personalizados como Authorization, el navegador realiza una solicitud preflight usando el método OPTIONS para verificar que el servidor permita esa solicitud.

Por ejemplo:

Si desde http://localhost:3000 haces una solicitud POST con un token en el encabezado Authorization, el navegador primero hará una solicitud OPTIONS al servidor para verificar si el método POST y el encabezado Authorization están permitidos. Si el servidor responde con el estado 200 y permite esos métodos y encabezados, entonces el navegador envía la solicitud real.

3. Mongoose: Interacción con MongoDB
¿Qué es Mongoose?
Mongoose es una biblioteca de Node.js que proporciona una solución elegante para trabajar con bases de datos MongoDB. Actúa como un ORM (Object-Relational Mapping) para MongoDB, lo que significa que te permite definir esquemas de datos, realizar validaciones y trabajar con datos de MongoDB utilizando un modelo orientado a objetos.

¿Por qué usar Mongoose?
Facilita la definición de esquemas de base de datos.
Ofrece validación automática de los datos.
Proporciona métodos fáciles de usar para trabajar con los documentos de MongoDB.
Permite crear relaciones entre colecciones.

*/

//como importar y usar dotenv

//como nuestras variables de entorno estan en un path diferente de la raiz
//del proyecto debemos entrar en las configuraciones de dotenv
// y configurar la propiedad path para darle la direccion donde estara nuestro
//archivo .env
config({path: './Config/.env'});

//configurar cors

const corsOption = {
  origin: ["http://localhost:3000"], //dominios permitidos
  optionsSuccessStatus: 200, // Código de éxito para respuestas preflight OPTIONS
  methods: ["GET", "POST", "PUT","PATCH", "DELETE"], // Métodos HTTP permitidos
  allowedHeaders: ["Content-Type", "Authorization"] // Headers permitidos
}

const app = express();
const port = process.env.PORT

try {
  mongoose.connect(process.env.DATABASE_URL);
} catch (error) {
  
}

/* 

¿Qué hace?
try...catch: Este bloque se utiliza para manejar posibles errores que puedan surgir durante la conexión.
mongoose.connect(): Intenta establecer una conexión a la base de datos MongoDB. El argumento process.env.DATABASE_URL es una variable de entorno que contiene la URL de conexión a tu base de datos en MongoDB. 

Las variables de entorno son una forma segura de almacenar información sensible como contraseñas o URLs.

Si ocurre un error: El código dentro del catch se ejecutará, lo que significa que se imprimirá un mensaje de error en la consola para que puedas identificar y solucionar el problema.

*/

//Middlewares
app.use(json());
app.use(cors(corsOption))

//Rutas
app.use("/users", userRoutes)

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})