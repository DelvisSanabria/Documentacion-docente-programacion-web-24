//importamos el modelo que debemos seguir y el cual usaremos para tener acceso
//al documento "User" en la base de datos
import User from "../models/userModel.js";
import mongoose from "mongoose";
import {faker} from "@faker-js/faker"


//obtener todos los usuarios 

export const getUsers = async (req, res) => {
  try {
    const ageQuery = req.query.age ? { age: req.query.age, isDelete: false } : {};
    const users = await User.find(ageQuery);
    if (users.length === 0) {
      res.status(404).json({ message: "No se encontraron usuarios" });
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//crear Usuario
export const createUser = async (req, res) => {
  const {name, email, age} = req.body;

  const user = {
    name,
    email,
    age
  }
  try {
    const newUser = new User(user);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

//Actualizar Usuario

export const updateUser = async (req, res) => {
  try {
    //convertir el ID plano que nos llega en un ID valido de mongoose
    const user = new mongoose.Types.ObjectId(`${req.params.id}`);
    const updateUser = await User.findByIdAndUpdate(user, req.body, {new: true});
    if(!updateUser) return res.status(404).json({message: "No se encontro el usuario"})
    else res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

//Eliminar usuario

export const deleteUser = async (req, res) => {
  try {
    const user = new mongoose.Types.ObjectId(`${req.params.id}`);
    const deleteUser = await User.findByIdAndDelete(user);
    if(deleteUser) res.status(200).json({message: "Se elimino el usuario"});
    else return res.status(404).json({message: "No se encontro el usuario"})
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

//Ruta de SoftDelete

export const softDeletedUser = async (req, res) => {
  const { isDelete } = req.body
  try {
    const user = new mongoose.Types.ObjectId(`${req.params.id}`);
    const updateUser = await User.findByIdAndUpdate(user, isDelete, {new: true});
    if(!updateUser) return res.status(404).json({message: "No se encontro el usuario"})
    else res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

//Si queremos probar nuestra aplicacion con datos de prueba, hacemos lo siguiente:

/* 

Faker
Qué es: Faker es una librería que te permite generar datos falsos de manera rápida y sencilla. Es muy útil para pruebas, cuando necesitas simular datos en una aplicación (como nombres, direcciones, correos electrónicos, etc.) sin tener que depender de datos reales.
Por qué se usa: Se usa para crear datos falsos en masa para probar aplicaciones, poblar bases de datos de prueba, o hacer pruebas de rendimiento con grandes volúmenes de datos. Esto es particularmente útil en las primeras etapas del desarrollo o cuando no tienes datos reales.

Usando Faker

Para instalarlo:

npm i @faker-js/faker

//para usarlo
import { faker } from '@faker-js/faker';

Este código importa el módulo faker desde la librería @faker-js/faker. La versión moderna de Faker está disponible a través de este paquete, y te permite usar distintas funciones para generar datos falsos, como nombres, correos electrónicos, direcciones, números, etc.

documentation: https://fakerjs.dev/
*/

//Crear usuarios con faker

export const generateUsers = async (req, res) => {
  const users = [];
  for (let i = 0; i < 10; i++) {
    users.push({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 100 }),
    });
  }
  try {
    const insertUsers = await User.insertMany(users);
    /* 
      
      User.insertMany(users): Aquí estamos utilizando Mongoose para insertar un array de usuarios falsos en la base de datos MongoDB. insertMany es una función de Mongoose que inserta múltiples documentos en una sola operación, lo cual es eficiente cuando trabajas con grandes cantidades de datos.

      Respuestas HTTP:

      Si los datos se insertan correctamente en la base de datos, responde con un estado 201 (Creado) y envía los datos insertados en formato JSON.
      Si hay algún error durante la inserción, se captura en el bloque catch y se envía una respuesta con el estado 500 (Error del servidor) junto con el mensaje del error.

      */
    res.status(201).json(insertUsers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

/* 

Detalles de los datos generados:
faker.person.fullName(): Genera un nombre completo falso.
Ejemplo de salida: John Doe
faker.internet.email(): Genera un correo electrónico falso.
Ejemplo de salida: john.doe@example.com
faker.number({ min: 18, max: 65 }): Genera un número aleatorio, en este caso simula la edad de un usuario, limitando el rango entre 18 y 65 años.
Ejemplo de salida: 29

*/