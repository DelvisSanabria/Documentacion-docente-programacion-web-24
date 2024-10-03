/* 

Instalar:

npm install supertest mongodb-memory-server

supertest: es una dependecia para probar tus APIs.

mongodb-memory-server: es una dependecia para crear un servidor de base de datos en memoria.

*/

import request from 'supertest';
/* 

request: supertest es una biblioteca que permite realizar peticiones HTTP y simular cómo interactuarían los usuarios con tu API. Usaremos esto para hacer peticiones HTTP a tu servidor.

*/

import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
/* 

MongoMemoryServer: Es una versión de MongoDB que se ejecuta en memoria, lo que significa que los datos no se guardan permanentemente y desaparecen una vez que terminan los tests. Esto permite realizar tests en un entorno aislado.

*/
import { app } from '../config/index.js';  // Archivo que contiene la configuración de express
import User from '../models/userModel.js';

let mongoServer;

beforeAll(async () => {
  // Configura MongoDB en memoria antes de correr los tests
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  // Verifica si no hay una conexión activa antes de intentar conectar
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(uri);
  }
});

/* 

MongoMemoryServer.create(): Se crea una instancia de MongoDB en memoria para realizar las pruebas. El servidor se inicializa y devuelve una URI que se utiliza para conectar a MongoDB.
mongoServer.getUri(): Obtiene la URI de la aplicación de MongoDB que se utilizará para realizar las pruebas.
mongoose.connect(uri): Si no hay una conexión existente a MongoDB, se realiza la conexión a la base de datos en memoria.

*/

afterAll(async () => {
  // Cierra la conexión de mongoose y detén el servidor de memoria después de los tests
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

/* 

Después de que todas las pruebas terminen, se:
dropDatabase(): Elimina toda la base de datos (en memoria).
close(): Cierra la conexión con MongoDB.
stop(): Detiene el servidor de MongoDB en memoria.

*/

beforeEach(async () => {
  // Limpiar la colección de usuarios antes de cada test
  await User.deleteMany({});
});

/* 

Antes de cada prueba, se eliminan todos los documentos de la colección de User. Esto asegura que las pruebas sean consistentes y no afectadas por los datos de pruebas anteriores.

*/

/* 

describe: Agrupa múltiples tests relacionados bajo un mismo bloque, en este caso, pruebas relacionadas con los controladores de usuario.

*/
describe('test de mis controladores de usuario', () => {
  
  // Test para crear un usuario
  it('test de creacion de usuario', async () => {
    // Datos del usuario de prueba
    const newUser = {
      name: 'william Dafoe',
      email: 'actor@gmail.com',
      age: 35
    };

    // Realizamos una petición POST a la ruta de creación de usuario
    const res = await request(app)
      .post('/users/createUser')
      .send(newUser);

    // Verificaciones
    expect(res.statusCode).toBe(201); // Verifica que el status sea 201 (Creado)
    expect(res.body).toMatchObject({
      name: newUser.name,
      email: newUser.email
    });
    
  });

  /* 
  
  newUser: Se define un objeto con los datos del usuario que queremos crear.
  request(app).post('/users/createUser'): Se realiza una petición POST a la ruta de creación de usuario (/users/createUser), simulando la acción de un usuario que está registrando un nuevo usuario.
  send(newUser): Se envía el objeto newUser como parte del cuerpo de la petición.
  Verificaciones:
    expect(res.statusCode).toBe(201): Verifica que el código de estado de la respuesta sea 201, lo cual indica que el usuario fue creado correctamente.
    expect(res.body).toMatchObject({...}): Verifica que la respuesta incluya el name y el email que acabamos de enviar.

  */

  // Test para obtener todos los usuarios
  it('testear de obtener todos los usuarios', async () => {
    // Creamos un usuario directamente en la base de datos antes de probar la API
    const user = new User({
      name: 'usuario-1',
      email: 'miusuario@gmail.com',
      age: 25
    });
    await user.save();

    // Realizamos una petición GET a la ruta de obtener usuarios
    const res = await request(app).get('/users');

    // Verificaciones
    expect(res.statusCode).toBe(200); // Verifica que el status sea 200 (Éxito)
    expect(res.body).toHaveLength(1); // Verifica que el cuerpo de la respuesta contenga 1 usuario
    expect(res.body[0].name).toBe(user.name); // Verifica que el nombre del usuario sea el esperado
  },10000);
});

/* 

user: Se crea un usuario directamente en la base de datos (sin hacer una petición HTTP) usando el modelo User. Esto simula que ya existe un usuario en la base de datos.
await user.save(): Guarda el usuario en la base de datos.
request(app).get('/users'): Realiza una petición GET a la ruta /users, solicitando todos los usuarios.
Verificaciones:
expect(res.statusCode).toBe(200): Verifica que el código de estado de la respuesta sea 200, lo que significa éxito.
expect(res.body).toHaveLength(1): Verifica que el cuerpo de la respuesta contenga exactamente un usuario (ya que solo guardamos uno en la base de datos).
expect(res.body[0].name).toBe(user.name): Verifica que el nombre del usuario en la respuesta coincida con el nombre del usuario guardado.

*/

/*

Proyecto opcional de Jest:

-Realizar pruebas unitarias a todos los middlewares y controladores de su propio proyecto final de
NodeJS

*/