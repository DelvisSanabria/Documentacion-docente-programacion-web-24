/* 
    Las funciones import y export se utilizan para importar y exportar código de otros módulos en JavaScript. 
    
    ¿Que son módulos?
    - Son archivos (de JavaScript) que contienen funcionalidades, estas se pueden importar y exportar de forma independiente.
*/


import {sumar, restar, dividir, multiplicar} from './Export.js';
import {calcularRaizCuadrada, esPar, exponenciar} from './Export2.js'


console.log(`La suma de 5 + 5 es: ${sumar(5, 5)}`);
console.log(`La resta de 17 - 5 es: ${restar(17, 5)}`);
console.log(`La división de 20 / 5 es: ${dividir(20, 5)}`);
console.log(`La multiplicación de 5 * 5 es: ${multiplicar(5, 5)}`);

console.log(`La raíz cuadrada de 25 es: ${calcularRaizCuadrada(25)}`);
console.log(`¿El número 4 es par?: ${esPar(4)}`);
console.log(`El resultado de elevar 2 a la 4 es: ${exponenciar(2, 4)}`);

