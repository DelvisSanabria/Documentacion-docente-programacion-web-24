import { Router } from "express";
import { getUsers, createUser, updateUser,deleteUser,generateUsers } from "../controllers/userControllers.js";
const userRoutes = Router()

//Nos trae a todos los usuarios
userRoutes.get("/", getUsers)

//crea un nuevo usuario
userRoutes.post("/create-user", createUser)

//actualiza un usuario
userRoutes.patch("/update/:id", updateUser)

//elimina un usuario
userRoutes.delete("/delete/:id", deleteUser)

//genera usuarios de prueba
userRoutes.post("/faker", generateUsers)

export default userRoutes
