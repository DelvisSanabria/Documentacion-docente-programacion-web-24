/* 
Archivo 8

    ¿Que es la consola?
    console es un objeto global que proporciona métodos para interactuar con la consola del entorno de ejecución. 
    Este objeto es ampliamente utilizado para depurar y registrar información durante el desarrollo de aplicaciones, 
    ya sea en el navegador o en entornos como Node.js.
*/


// console.log: Muestra un mensaje en la consola.
console.log('Hola, mundo!');


// console.error: Se utiliza para mostrar mensajes que indican un error.
console.error('¡Esto es un error!');


// console.warn: Se utiliza para mostrar mensajes que indican un aviso.
console.warn('¡Cuidado!');


// console.info: Se utiliza para mostrar información adicional.
console.info('Información adicional.');


// console.debug: Se utiliza para mostrar mensajes de depuración.
console.debug('Mensaje de depuración.');


// console.assert(): Imprime un mensaje de error si la afirmación proporcionada es falsa.
// de lo contrario, no imprime nada.
console.assert(5 > 10, 'El primer número no es mayor que el segundo.');


// console.count(): Registra el número de veces que se llama a console.count() para una etiqueta específica.
for (let i = 0; i < 5; i++) {
    console.count('Iteración');
}


// console.countReset(): Restablece el contador para la etiqueta especificada.
console.countReset('Iteración');


// console.dir(): Muestra una lista interactiva de las propiedades de un objeto.
const persona = {
    nombre: 'Nestor', 
    apellido: "Benavides" ,
    pais: "Venezuela"
};

console.dir(persona);



// console.group(): Crea un nuevo grupo en la consola.
console.group('Grupo de mensajes');
    console.log('Mensaje 1');
    console.warn('Mensaje 2');
    console.error('Mensaje 3');
    console.debug('Mensaje 4');
console.groupEnd(); 



// console.time(): Inicia un temporizador con un nombre específico.

console.time('Tiempo transcurrido');

// Código para medir el tiempo (incrementar el valor de una variable con for)
// let contador = 0;
// for (let i = 0; i < 100000; i++) {
//     contador += 1;
//     console.log(contador);
// };

console.timeEnd('Tiempo transcurrido');


// console.trace(): Imprime una traza de pila.
function funcionA() {
    funcionB();
}
function funcionB() {
    console.trace();
}

function funcionC() {
    funcionA();
}

funcionC();



// console.table: Muestra una tabla de datos en formato filas y columnas.
const productos = [
    {
        nombre: 'Producto 1', 
        precio: 100, 
        descripcion: "Esta es la descripcion", 
        stock: 20
    },
    {
        nombre: 'Producto 2', 
        precio: 200, 
        descripcion: "Esta es la descripcion", 
        stock: 20
    },
    {
        nombre: 'Producto 3', 
        precio: 300, 
        descripcion: "Esta es la descripcion", 
        stock: 20
    },
    {
        nombre: 'Producto 4', 
        precio: 400, 
        descripcion: "Esta es la descripcion", 
        stock: 20
    },
    {
        nombre: 'Producto 5', 
        precio: 500, 
        descripcion: "Esta es la descripcion", 
        stock: 20
    },
    {
        nombre: 'Producto 6', 
        precio: 600, 
        descripcion: "Esta es la descripcion", 
        stock: 20
    },
    {
        nombre: 'Producto 7', 
        precio: 700, 
        descripcion: "Esta es la descripcion", 
        stock: 20
    },
    {
        nombre: 'Producto 8', 
        precio: 800, 
        descripcion: "Esta es la descripcion", 
        stock: 20
    },
    {
        nombre: 'Producto 9', 
        precio: 900, 
        descripcion: "Esta es la descripcion", 
        stock: 20
    },
    {
        nombre: 'Producto 10',
        precio: 1000, 
        descripcion: "Esta es la descripcion", 
        stock: 20
    }
];

console.table(productos);



// console.clear(): Limpia la consola.
console.clear();
console.log("La consola ha sido limpiada.");