import express, { json } from 'express';
import getRoutes from './routes/get.routes.js';
import postRoutes from './routes/post.routes.js';
import patchRoutes from './routes/patch.routes.js';
import deleteRoutes from './routes/delete.routes.js';

const app = express();
const port = 3001;

app.use(json());

app.use("/get", getRoutes)

app.use("/post", postRoutes)

app.use("/patch", patchRoutes)

app.use("/delete", deleteRoutes)

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})