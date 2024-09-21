import { Router } from "express";

const deleteRoutes = Router()

//Ruta Delete

deleteRoutes.delete("/users/:id", (req, res) => {
  const {id} = req.params
  res.status(200).json({message: `Estamos eliminando el usuario con ID: ${id}`});
})

export default deleteRoutes