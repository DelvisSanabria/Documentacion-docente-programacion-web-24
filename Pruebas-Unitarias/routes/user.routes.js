// routes/userRoutes.js
import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser, generateFakeUsers } from '../controllers/userController.js';

const userRouter = express.Router();

//GET /users?age=25
userRouter.get('/', getUsers); // Obtener todos los usuarios (con query params)

//GET /users/64ab5f7be0a8173f4f0039fa
userRouter.get('/:id', getUserById); // Obtener un usuario por ID

//POST /users/createUser

//Content-Type: application/json

/* {
  "name": "Juan Perez",
  "email": "juan.perez@example.com",
  "age": 30
} */

userRouter.post('/createUser', createUser); // Crear un usuario

//PATCH /users/update/64ab5f7be0a8173f4f0039fa
//Content-Type: application/json

/* {
  "name": "Juan Actualizado",
  "age": 31
} */

userRouter.patch('/update/:id', updateUser); // Actualizar un usuario por ID

//DELETE /users/delete/64ab5f7be0a8173f4f0039fa
userRouter.delete('/delete/:id', deleteUser); // Eliminar un usuario por ID

//POST / users/faker
userRouter.post('/faker', generateFakeUsers); // Generar 10 usuarios falsos con Faker

export default userRouter;
