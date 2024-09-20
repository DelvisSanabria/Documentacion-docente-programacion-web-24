/*
    Se comoce como operadores aritmeticos a los simbolos que nos permiten
    realizar operaciones matematicas, sumar, restar, Multiplicar, Dividir.
*/

//Ejemplo:

//Suma
console.log(5 + 5);

//Resta
console.log(5 - 4);

//Multiplicacion
console.log(5 * 5); 
    
//Division
console.log(10 / 2);


//Tambien existen operadores aritmeticos para operaciones mas complejas


//Incremento: Agrega uno a su operando.
let numero = 5;
numero++;
numero;

//Decremento: Resta uno de su operando. 
let numero2 = 10;
numero2--;
numero2;


//Negacion Unitaria: Devuelve el negativo de su operando.
let negado = 5;
negado = -negado;
negado;

//Positivo Unitario: Intenta convertir el operando en un número, si aún no lo es.
let positivo = -6;
+positivo; // 6

//Exponenciacion / Potencia: Calcula la base a la potencia del exponente
let potencia = 5 ** 2;
potencia;

console.log(5 ** 6);
/*
    1) 5: 5
    2) 5 x 5: 25
    3) 25 x 5: 125
    4) 125 x 5: 625
    5) 625 x 5: 3125
    6) 3125 x 5: 15625
*/

//Módulo: devuelve el resto de la división entre dos números. 
//(Se usa comunmente para determinar numeros pares e impares)
let resultado = 10 % 2;
resultado;
resultado = 10 % 3;
resultado;