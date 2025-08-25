/* 
Archivo 18

    El operador de propagación (...), comúnmente conocido como "spread operator", es un operador introducido en ECMAScript 6 (ES6 /ES2015) 
    que se utiliza para descomponer elementos de un iterable (como un array) o para fusionar múltiples elementos en una 
    estructura de datos.
*/


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const array4 = [10, 11, 12];


// Pensariamos que para unir todos los valores de varios array en uno nuevo podriamos hacer algo asi:
const array5 = [array1, array2, array3, array4];
console.log(array5);
// Pero esto nos devolveria un array de arrays, no un array con todos los valores de los arrays originales.
// Es decir una matriz de 4x3, donde cada fila es un array y cada columna es un valor de los arrays originales.
// Para acceder a un valor en especifico de esta matriz, usamos la notacion de corchetes [][].
console.log(array5[1][1]);
/*
    0/0 0/1 0/2
    1/0 1/1 1/2
    2/0 2/1 2/2
    3/0 3/1 3/2
*/



// Para unir todos los valores de varios array en uno nuevo, usamos el spread operator (...):
const array6 = [...array1, ...array2, ...array3, ...array4];
console.log(array6);

//No es util solo para unir arrays, sino que tambien podemos usarlo para unir objetos.
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };
const objeto3 = { e: 5, f: 6 };
const objeto4 = { g: 7, h: 8 };

// Uniendo objetos con el spread operator
const objetoFinal = { ...objeto1, ...objeto2, ...objeto3, ...objeto4 };
console.log(objetoFinal);  

// Esto nos devuelve un objeto con todas las propiedades de los objetos originales.
// Si hay propiedades con el mismo nombre, el último objeto que se propaga sobrescribirá
// las propiedades anteriores con el mismo nombre.
// Por ejemplo, si objeto1 y objeto2 tienen una propiedad "a", el valor de "a" en objetoFinal será el valor de la propiedad "a" de objeto2.