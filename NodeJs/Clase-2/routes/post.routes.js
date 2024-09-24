import { Router } from "express";
import { saludo } from "../middlewares/midleware.js";

const postRoutes = Router()

//Rutas POST
postRoutes.post("/users", saludo, (req, res) => {
  const {name, age} = req.body
  res.status(201).json({message: `Estamos creando el usuario ${name} con la edad ${age}`});
})

export default postRoutes