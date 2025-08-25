/* 
Archivo 26
    Las funciones import y export se utilizan para importar y exportar código de otros módulos en JavaScript. 
    
    ¿Que son módulos?
    - Son archivos (de JavaScript) que contienen funcionalidades, estas se pueden importar y exportar de forma independiente.

    La forma de exportar es:
    1. Exportar por defecto (default): Solo puede haber una exportación por defecto en un módulo.
    2. Exportar funciones o variables específicas: Se pueden exportar múltiples funciones o variables desde un módulo.
*/

export function sumar(a, b) { return +a + +b; };

export function restar(a, b) { return a - b; };

export function dividir(a, b) { return a / b; };

export function multiplicar(a, b) { return a * b; };


// Metodo 2: Exportar funciones
// Exportamos las funciones para poder utilizarlas en otros módulos.
// export { calcularRaizCuadrada, sumar, restar, dividir, multiplicar, exponenciar, esPar }; 