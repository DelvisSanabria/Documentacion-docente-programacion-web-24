import { Router } from "express"
import { getUser, users2 } from "../controllers/getControllers.js"

const getRoutes = Router()

//Rutas GET

getRoutes.get("/", (req, res) => {
  res.status(200).send(JSON.stringify({saludo: 'Hola bienvenidos a mi API'}))
})

getRoutes.get("/users", getUser)

getRoutes.get("/users/:id", users2)

export default getRoutes