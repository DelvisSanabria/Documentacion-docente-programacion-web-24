/*
Archivo 14

    Un array es un objeto que contiene una colección ordenada de valores. 
    Cada valor se almacena en una posición específica dentro del array, y se puede acceder a estos 
    mediante un índice numérico que determina su posicion.

    Los arrays en JavaScript son muy versátiles y se utilizan para almacenar y manipular datos de varios tipos, 
    como números, cadenas, objetos, etc. 
    
    Se pueden crear arrays vacíos o con elementos iniciales, y se pueden modificar y acceder a los elementos 
    de un array mediante métodos y propiedades específicas.
*/


const colores = ["Azul 🟦", "Verde 🟩", "Naranja 🟧", "Rojo 🟥"];

console.log(colores);


// Mostrando valores individuales del array
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
console.log(colores[3]);


// Reasignando un espacio del array.
colores[2] = "Morado 🟪";


console.log(colores);
console.log(colores[2]);




/* *******   Metodos de Arrays   ******* */

//length: Retorna la longitid de un array. (Metodo sin parametros)
console.log(`El array tiene ${colores.length} elementos`);




//push: Agrega elementos al final de un array. (recibe como parametros los elementos a agregar)

// Agragamos el color amarillo al array usando el metodo push
colores.push("Amarillo 🟨");


console.log(`El array tiene ${colores.length} elementos`);
console.log(colores);




//unshift: Agrega elementos al inicio de un array. (recibe como parametros los elementos a agregar)
colores.unshift("Cafe 🟫");
console.log(`El array tiene ${colores.length} elementos`);
console.log(colores);




//pop: Elimina solo 1 elemento al final de un array. (No recibe parametros)
colores.pop();
console.log(`El array tiene ${colores.length} elementos`);
console.log(colores);




//shift: Elimina solo 1 elemento al inicio de un array. (No recibe parametros)
colores.shift();
console.log(`El array tiene ${colores.length} elementos`);
// console.log(colores);




//index-of: Devuelve la posición de la primera aparición de un valor en un array partiendo del indice 0. 
// (Recibe como parametro el elemento a buscar)
console.log(colores.indexOf("Morado 🟪"));



// splice: Elimina elementos de un array. (Recibe como parámetros la ubicación de inicio y la cantidad de elementos a eliminar)
// console.log(colores);

const elemento = colores.indexOf("Morado 🟪");
console.log(elemento);

colores.splice(elemento, 1);
console.log(colores);



//¿Que es Iterar?: Iterar es el proceso de recorrer un conjunto de datos, como una lista o un array.
// Con el proposito de realizar una accion con cada elemento o valor.


/* Que son las funciones de orden superior:
    Las funciones de orden superior son aquellas que pueden recibir otras funciones como argumentos o devolverlas como resultado. 
    Estas funciones permiten crear código más modular y reutilizable, facilitando la manipulación de datos y la creación de estructuras más complejas.\

    entre las mas usadas en js tenemos a: 
    forEach, map, filter, find, every, some, sort, reverse, fill.

*/


/*  filter: es una función de los arrays que permite filtrar los elementos 
    mediante una función de retorno booleana. 

    La función de retorno booleana se aplica a cada elemento del array y solo los elementos 
    para los cuales la función devuelve true se incluyen en el nuevo array resultante.

    En pocas palabras, este método crea un nuevo array con todos los elementos que 
    pasan la prueba implementada por la función dada.
*/


//Ejemplo 1: Separar numeros pares e impares.
let numeros = [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1];



// Metodo 1: Filter con funcion externa y retorno explicito.
function pares(numero){
    return numero % 2 === 0;
};

let numeroPares = numeros.filter(pares);

console.log(numeroPares);



// Metodo 2: Filter con funcion anonima y retorno explicito.
let numeroPares2 = numeros.filter(
    function(numero){
        return numero % 2 === 0;
    }
);

console.log(numeroPares2);



// Metodo 3: Filter con funcion de flecha y retorno implicito.
let numeroPares3 = numeros.filter( numero => numero % 2 === 1);
console.log(numeroPares3);





//Ejemplo 2: Excluir uvas de un array.
let frutas = ["🍇","🍍","🍇","🍓","🍇","🍎","🍇", "🍐", "🍑", "🥝"]; 
console.log(frutas);



// Metodo 1: filter con funcion externa y retorno explicito.
function sacarUvas(fruta){
    return fruta !== "🍇";
}
const frutasSinUvas = frutas.filter(sacarUvas);
console.log(frutasSinUvas); 



// Metodo 2: filter con funcion anonima y retorno explicito.
const frutasSinUvas2 = frutas.filter( 
    function(fruta){ 
        return fruta !== "🍇"; 
});
console.log(frutasSinUvas2);




// Metodo 3: filter con funcion de flecha y retorno implicito.
const frutasSinUvas3 = frutas.filter( fruta => fruta !== "🍇");
console.log(frutasSinUvas3);





// Ejemplo 3: Obtener correos que terminan en "@gmail.com" usando filter() y endsWith()

let correos = [
    "juanito@yahoo.com",
    "pedrito@gmail.com",
    "rubencito@aol.com",
    "mariagarcia@gmail.com",
    "johndoe@gmail.com",
    "sophiasmith@gmail.com",
    "davidbrown@gmail.com",
    "emilywilson@gmail.com",
    "carlosrodriguez@yahoo.com",
    "lisajackson@yahoo.com",
    "michaelgonzalez@yahoo.com",
    "sandrabrown@yahoo.com",
    "alexanderdavis@yahoo.com",
    "sarahroberts@aol.com",
    "samuelthomas@aol.com",
    "jessicamiller@aol.com",
    "kevinlee@aol.com",
    "amandajones@aol.com"
];


// Metodo 1: Funcion externa con retorno explicito y endsWith()
function soloGmail(correo){
    return correo.endsWith("@gmail.com");
};
const correosGmail = correos.filter(soloGmail);
console.log(correosGmail);




// Metodo 2: Funcion anonima con retorno explicito y endsWith()
const correosGmail2 = correos.filter(
    function(correo){
        return correo.endsWith("@yahoo.com");
    }
);
console.log(correosGmail2);




// Metodo 3: Funcion de flecha con retorno implicito y endsWith()
const correosGmail3 = correos.filter( correo => correo.endsWith("@aol.com"));
console.log(correosGmail3);





// find: devuelve el valor del primer elemento del array que cumpla (retorne true) con la función definida. 
// Si ningún elemento cumple con la funcion (si retorna false), devuelve undefined.

/* Su estructura y forma de uso es la siguiente:
    array.find( funcionDeRetornoBooleana );
    
    La función de retorno booleana se aplica a cada elemento del array y solo el primer elemento 
    para el cual la función devuelve true se incluye en el resultado.
*/

// Ejemplo 1: Buscar el elemento que sea "🧀"
let comidas = ["🍖","🥩","🧀","🥓","🥙"];
const queso = comidas.find( comida => comida === "🧀");
console.log(queso);





// Ejemplo 2: Buscar el producto de nombre "Patito de hule".
const productos = [
    {
        nombre: "Peluche",
        precio: 50,
        stock: 100
    },
    {
        nombre: "Teclado",
        precio: 100,
        stock: 10
    },
    {
        nombre: "Microfono",
        precio: 70,
        stock: 60
    },
    {
        nombre: "Patito de Hule",
        precio: 50,
        stock: 100
    },
    {
        nombre: "Monitor",
        precio: 300,
        stock: 700
    },
    {
        nombre: "Audifonos",
        precio: 60,
        stock: 420
    }
];


const patitoDeHule = productos.find( producto => producto.nombre === "Patito de Hule");
console.log(patitoDeHule);




// Ejercicio para realizar en casa:
/* 
    Elabora un carrito de compras que permita:

    - Agregar productos de un menu (a un array).
    - Ver el carrito
    - Eliminar productos del carrito (del array).


    Es necesario usar: prompt, alert o console.log, arrays, metodos de array.
*/




// fill: Rellena el array con el elemento indicado desde un índice inicial hasta una posicion antes del indice final.
// Ejemplo: array.fill(elementoNuevo, posicionDeInicio, posicionFinal)

// Ejemplo 1: Reemplazar "🥑","🥦","🥕","🥩" por "🧁"

let compra = ["🧃","🧁","🥑","🥦","🥕","🥩","🍞"];

compra.fill("🧁" ,2, 6);

console.log(compra);




// Ejemplo 2: Quitar informacion a productos sin stock.

const articulos = [
    {
        nombre: "Peluche",
        precio: 50,
        stock: 100,
        estado: "Disponible"
    },
    {
        nombre: "Teclado",
        precio: 100,
        stock: 10,
        estado: "Disponible"
    },
    {
        nombre: "Microfono",
        precio: 70,
        stock: 60,
        estado: "Disponible"
    },
    {
        nombre: "Patito de Hule",
        precio: 50,
        stock: 0,
        estado: "Agotado"
    },
    {
        nombre: "Monitor",
        precio: 300,
        stock: 0,
        estado: "Agotado"
    },
    {
        nombre: "Audifonos",
        precio: 60,
        stock: 420,
        estado: "Disponible"
    }
];

console.log(articulos);


const articuloVacio = {
    nombre: "",
    precio: 0,
    stock: 0,
    estado: "S/N"
};

articulos.fill(articuloVacio,3,5);


console.log(articulos);






// every: devuelve true SI TODOS los elementos del array CUMPLEN con la función proporcionada,
// de lo contrario retorna false.

// Ejemplo 1:
let lista1 = [1,3,5,7,9,11];
let lista2 =[2,4,6,8,10];

// Usamos every para determinar si todo el contenido de ambos arrays son numeros pares.

// Metodo 1: Funcion declarada y retorno explicito.
function validarPar(numero){
    return numero % 2 === 0;
};
console.log( lista1.every(validarPar));
console.log( lista2.every(validarPar));


// Metodo 2: funcion de flecha y retorno implicito.
console.log( lista1.every(numero => numero % 2 === 0) );
console.log( lista2.every(numero => numero % 2 === 0) );




// Usamos every para determinar si todo el contenido de ambos arrays son numeros impares.

// Metodo 1: Funcion declarada y retorno explicito.
function validarPar(numero){
    return numero % 2 === 1;
};
console.log( lista1.every(validarPar));
console.log( lista2.every(validarPar));


// Metodo 2: funcion de flecha y retorno implicito.
console.log( lista1.every(numero => numero % 2 === 1) );
console.log( lista2.every(numero => numero % 2 === 1) );






// Ejemplo 2:
const invitados = [
    {
        nombre: "Delvis",
        apellido: "Sanabria",
        asistio: true
    },
    {
        nombre: "Victor",
        apellido: "Hernandez",
        asistio: true
    },
    {
        nombre: "Jesus",
        apellido: "Gorrin",
        asistio: true
    },
    {
        nombre: "Alejandro",
        apellido: "Diaz",
        asistio: true
    },
    {
        nombre: "Hugo",
        apellido: "Naveda",
        asistio: true
    }
]




// Metodo 1: every con funcion de flecha y retorno explicito.
function validarAsistencias(invitado){
    return invitado.asistio === true;
}
const todosAsistieron = invitados.every(validarAsistencias);

console.log(todosAsistieron);


// Metodo 2: every con funcion anonima y retorno explicito.
const todosAsistieron2 = invitados.every(
    function(invitado){
        return invitado.asistio === true
    }
);
console.log(todosAsistieron2);




// Metodo 3: every con funcion de flecha y retorno implicito.
const todosAsistieron3 = invitados.every(asistio => asistio.asistio === true);
console.log(todosAsistieron3);








// some: devuelve true si ALGUNO de los elementos cumple con la funcion proporcionada,
// de lo contrario devuelve false.


// let vegetales = ["🥦","🥕","🧅","🥬","🍫","🥔"];
let vegetales = ["🥦","🥕","🧅","🥬","🍆","🥔"];

//Ejemplo 1 (Alguno es NO es un vegetal?).
let noVegetal = vegetales.some(
    function(elemento){
        return elemento === "🍫";
    }
);

console.log(noVegetal);





// Ejemplo 2: Detectar si hay clientes sin pagar.


const clientes = [
    {
        nombre: "Delvis",
        pago: false
    },
    {
        nombre: "Victor",
        pago: true
    },
    {
        nombre: "Santiago",
        pago: true
    },
    {
        nombre: "Mauricio",
        pago: true
    }
];


// Metodo 1: Funcion declarada y retorno explicito

function validarPagos(parametro){
    return parametro.pago === false;
}
const algunoDebe = clientes.some(validarPagos);
console.log(algunoDebe);


// Metodo 2: Funcion de flecha y retorno implicito
console.log( clientes.some(parametro => parametro.pago === false) );








// forEach: Ejecuta una función para cada elemento del array.

const estudiantes = ["Guillermo", "Hugo", "Douglas", "Luis", "Victor", "Jesus Daniel", "Jesus Gorrin", "Edward", "Humberto","Diego", "Yaneisis"];

const saludos = [];

estudiantes.forEach(
    function(persona) {
        saludos.push(`Hola ${persona}, ¿cómo estás?`);
    }
);

console.log(saludos);



// sort: Ordena los elementos de un array localmente y devuelve el array ordenado.
let valores = [9,8,4,2,6,5,1,3,10,7,13,11,12,16,14,15];

// Orden ascendente
console.log( valores.sort( (a, b) => a - b) );

/* 
    Aquí está cómo funciona paso a paso:
    1- Se define el array valores con números desordenados.
    2- Se llama al método sort() en el array valores.
    3- Dentro del método sort(), se proporciona una función de comparación (a, b) => a - b. Esta función toma dos parámetros a y b, que representan dos elementos del array que se están comparando.
    4- La expresión a - b en la función de comparación indica al método sort() que los elementos deben ser ordenados de forma ascendente. Si el resultado de a - b es negativo, a se colocará antes que b. Si es positivo, b se colocará antes que a. Si es 0, se mantienen en el mismo orden.
    5- El método sort() ordena los elementos del array valores utilizando la función de comparación proporcionada.
    6- El array ordenado se imprime en la consola mediante console.log().
*/


// Orden descendente
console.log( valores.sort( (a, b) => b - a) );


// Ejemplo 2:
let nombres = ["Delvis", "Victor", "Hugo", "Mauricio", "Luis", "Jesus", "Santiago", "Humberto","David"];
nombres.sort();
console.log(nombres);






// reverse: Invierte el orden de los elementos de un array.
let nums = [1,2,3,4,5,6,7,8,9,10];
nums.reverse();
console.log(nums);








// map: Devuelve un nuevo array con los resultados de la función aplicada a cada elemento del array original.

// Metodo 1: Funcion declarada y retorno explicito
function saludar(persona){
    return `Hola ${persona}, ¿cómo estás?`
};
const saludos2 = estudiantes.map(saludar)
console.log(saludos2);


// Metodo 2: Funcion de flecha y retorno implicito
const saludos3 = estudiantes.map( persona => `Hola ${persona}, ¿cómo estás?`);
console.log(saludos3);