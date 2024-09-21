import express, { json } from 'express';

const app = express();
const port = 3001;

app.use(json());

app.get("/", (req, res) => {
  res.status(200).send(JSON.stringify({saludo: 'Hola chicos desde mi JSON'}))
})

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})