import {createServer} from 'http';

const server = createServer((req, res) => {
  res.statusCode = 200;

  // Esto determina el tipo de la respuesta

  //respuesta con un JSON
  res.setHeader('Content-Type', 'application/json');

  //respuesta con un HTML
  //res.setHeader('Content-Type', 'text/html');


  //aqui respondemos con JSON
  res.end(JSON.stringify({saludo: 'Hola chicos desde mi JSON'}));

  //aquui respondemos con HTML

  //res.end(`<html><body><h1>Hola chicos desde mi HTML</h1></body></html>`);
})

server.listen(3001, () => {
  console.log('Servidor corriendo en el puerto 3001');
  console.log("ingresa a: http://localhost:3001");
})