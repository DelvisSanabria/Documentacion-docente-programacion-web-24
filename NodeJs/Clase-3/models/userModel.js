import mongoose from "mongoose";

/* 

Puedes definir un esquema (schema) para un recurso en MongoDB usando Mongoose. Un esquema define cómo será el "formato" de tus documentos en MongoDB.


https://mongoosejs.com/docs/index.html
*/


/* 

Aquí estamos creando un esquema para un usuario con tres campos: name, email, y age. Mongoose se asegurará de que los datos enviados a MongoDB sigan esta estructura.

*/

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  isDelete: {
    type: Boolean,
    default: false
  }
});

/* 

¿Qué hace? Crea un modelo llamado User a partir del esquema definido anteriormente. Este modelo se utilizará para interactuar con la colección de usuarios en la base de datos.

*/
const User = mongoose.model("User", userSchema);
export default User;