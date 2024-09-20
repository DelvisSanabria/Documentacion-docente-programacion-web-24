// Importación de módulos ECMAScript
// El módulo 'os' permite obtener información del sistema operativo
import os from 'node:os'

// El módulo 'fs' permite trabajar con archivos del sistema operativo
//import fs from 'node:fs'

// Importación del módulo 'fs/promises' para manejar el sistema de archivos de manera asíncrona usando promesas
import fs from 'node:fs/promises'

// Importación de un módulo local, en este caso una función 'sum' desde './sum.js'
import sum from './sum.js'
import { start } from 'node:repl';

// Importación usando CommonJS (alternativa para compatibilidad con versiones antiguas de Node.js)
// const sum = require('./sum.js')

// Uso de la función 'sum' importada para sumar dos números
console.log("Resultado de la suma:", sum(1, 2));

// Uso del módulo 'os' para obtener y mostrar información del sistema operativo

console.log('Información del sistema operativo:')
console.log('-------------------')
console.log("Nuestro nombre es:", os.hostname()) // Devuelve el nombre de la computadora
console.log("Nuestra arquitectura es:", os.arch()) // Devuelve la arquitectura del procesador (x64, arm, etc.)
console.log("Nuestra plataforma es:", os.platform()) // Devuelve el sistema operativo (linux, win32, darwin, etc.)
console.log('CPUs', os.cpus()) // Devuelve la información de los procesadores
console.log("Nuestra versión es:", os.version()) // Devuelve la versión del sistema operativo
console.log("Nuestra memoria total es:", os.totalmem() / 1024 / 1024 / 1024, "GB") // Devuelve la memoria total del sistema en GB
console.log("Nuestra memoria libre es:", os.freemem() / 1024 / 1024 / 1024, "GB") // Devuelve la memoria libre en GB
console.log("Nuestro tiempo de encendido es:", os.uptime() / 60 / 60, "horas") // Devuelve el tiempo de actividad del sistema en horas


// Comprobar el tipo de archivo con fs.stat (promesa) usando 'await' en una función asíncrona
async function checkFileStats() {
  try {
    // Esperamos a que la promesa de fs.stat se resuelva
    const stats = await fs.stat("./Clase-1-os-fs-modo-de-exportar/MiTexto.txt");

    // Mostramos la información del archivo
    console.log("¿Es un archivo?:", stats.isFile()); // Si es un fichero
    console.log("¿Es un directorio?:", stats.isDirectory()); // Si es un directorio
    console.log("¿Es un enlace simbólico?:", stats.isSymbolicLink()); // Si es un enlace simbólico
    console.log("Tamaño del archivo en bytes:", stats.size); // Tamaño en bytes
  } catch (error) {
    console.error("Error al obtener los stats del archivo:", error); // Manejo de errores
  }
}

checkFileStats()

// Lectura y Escritura de Archivos utilizando el módulo 'fs/promises'

// Método de lectura asíncrona en paralelo usando Promises (lee tres archivos simultáneamente)
Promise.all([
  fs.readFile("./Clase-1-os-fs-modo-de-exportar/MiTexto.txt", "utf-8"),
  fs.readFile("./Clase-1-os-fs-modo-de-exportar/MiTexto2.txt", "utf-8"),
  fs.readFile("./Clase-1-os-fs-modo-de-exportar/MiTexto3.txt", "utf-8")
]).then(([text1, text2, text3]) => {
  console.log("El texto leído del archivo 1 es:", text1);
  console.log("El texto leído del archivo 2 es:", text2);
  console.log("El texto leído del archivo 3 es:", text3);
}).catch(error => {
  console.error("Error al leer los archivos:", error); // Captura errores en la lectura de archivos
});

// Escritura de archivos nuevos
// El método 'writeFile' crea o sobreescribe un archivo con el contenido especificado
fs.writeFile("./Clase-1-os-fs-modo-de-exportar/MiTexto4.txt", "Hola desde mi app de NodeJS")
  .then(() => console.log("Archivo MiTexto4.txt creado correctamente"))
  .catch(error => console.error("Error al crear MiTexto4.txt:", error));

fs.writeFile("./Clase-1-os-fs-modo-de-exportar/MiTexto5.txt", "Hola desde mi app de NodeJS")
  .then(() => console.log("Archivo MiTexto5.txt creado correctamente"))
  .catch(error => console.error("Error al crear MiTexto5.txt:", error));

// Eliminación de un archivo
// El método 'rm' elimina el archivo especificado
fs.rm("./Clase-1-os-fs-modo-de-exportar/MiTexto4.txt")
  .then(() => console.log("Archivo MiTexto4.txt eliminado correctamente"))
  .catch(error => console.error("Error al eliminar MiTexto4.txt:", error));

// Código comentado: Métodos alternativos para la lectura de archivos (comentados para no ejecutarlos)

// Lectura Sincrónica de archivos (bloquea el flujo de ejecución mientras se lee el archivo)
/*
const readFile = fs.readFileSync("./Clase-1-os-fs-modo-de-exportar/MiTexto.txt", "utf-8");
console.log("El texto leído es:", readFile);
*/

// Lectura Asíncrona con callbacks (obsoleta en favor de promesas o async/await)
/*
fs.readFile("./Clase-1-os-fs-modo-de-exportar/MiTexto.txt", "utf-8", (error, text) => {
  if (error) {
    console.error("Error al leer el archivo:", error);
  } else {
    console.log("El texto leído es:", text);
  }
});
*/

// Lectura Asíncrona con Promesas
/*
fs.readFile("./Clase-1-os-fs-modo-de-exportar/MiTexto.txt", "utf-8")
  .then(text => console.log("El texto leído es:", text))
  .catch(error => console.error("Error al leer el archivo:", error));
*/

// Lectura Asíncrona con Async/Await
/*
async function readFiles() {
  try {
    const archivo1 = await fs.readFile("./Clase-1-os-fs-modo-de-exportar/MiTexto.txt", "utf-8");
    console.log("El texto leído del archivo 1 es:", archivo1);

    const archivo2 = await fs.readFile("./Clase-1-os-fs-modo-de-exportar/MiTexto2.txt", "utf-8");
    console.log("El texto leído del archivo 2 es:", archivo2);

    const archivo3 = await fs.readFile("./Clase-1-os-fs-modo-de-exportar/MiTexto3.txt", "utf-8");
    console.log("El texto leído del archivo 3 es:", archivo3);
  } catch (error) {
    console.error("Error al leer los archivos:", error);
  }
}

readFiles();
*/
