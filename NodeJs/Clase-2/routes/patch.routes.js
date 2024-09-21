import { Router } from "express";

const patchRoutes = Router()

//Rutas PATCH

patchRoutes.patch("/users/:id", (req,res) => {
  const {id} = req.params
  const { name } = req.body
  res.status(200).json({message: `Usuario con ID: ${id} actualizado a  nombre: ${name}`});
})

export default patchRoutes