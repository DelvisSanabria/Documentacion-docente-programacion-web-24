import { Router } from "express";

const postRoutes = Router()

//Rutas POST
postRoutes.post("/users", (req, res) => {
  const {name, age} = req.body
  res.status(201).json({message: `Estamos creando el usuario ${name} con la edad ${age}`});
})

export default postRoutes