/******  VARIABLES Archivo 2  ******/

// ¿Que son?: Las variables son espacios de memoria que se utilizan para almacenar información.
// Esta informacion puede ser modificada dependiendo del tipo de variable en la que se haya almacenado.


// *** Extisten 3 tipos de variables ***

//var: Variable de alcance(scope) global / Se puede redeclarar y son accesibles desde cualquier parte de nuestro documento.
var variable1 = "Delvis Sanabria";
var numero1 = 10;
var numero2 = 50;
console.log("El valor de la variable1 es: " + variable1)
console.log(numero1 + numero2)

// Reasignando una variable
var variable1 = "Manuel Diaz";
console.log("El valor de la variable1 es: " + variable1)



//let: Variable de alcance(scope) limitado / Se puede reasirnar pero no redeclarar.
let nombre = "Edward Ventura";
let saldo = 9720;
console.log("Bienvenido " + nombre + " tu saldo es: " + saldo + "$");


// Reasignando los valores de las variables usando prompt()
// prompt(): es una funcion que nos permite introducir datos por teclado.

nombre = prompt("Ingresa tu nombre");
saldo = prompt("Ingresa el saldo que deseas");

// Mostramos los datos introducidos por el usuario que se almacenan en las variables ya existentes (reasignacion)

console.log("Bienvenido " + nombre + " tu saldo es: " + saldo + "$");
alert("Bienvenido " + nombre + " tu saldo es: " + saldo + "$");



// Raealizamos una calculadora utilizando variables de tipo let y prompt() para introducir datos por teclado.
// adicionalmente mostramos el resultado en consola.

let num1 = +prompt("Ingresa un numero");
//El operador "+" convierte el dato introducido en un numero ya que pront recoje strings
let num2 = +prompt("Ingresa otro numero");

console.log("total: " + (num1 + num2));




//const: al igual que let es te alcance(scope) limitado, no se puede mutar, ni reasignar.
const correo = "delvissivira@lexpin.online"
console.log(correo)

// Intentamos reasignar la variable de tipo constante "correo"

//correo = "correo@gmail.com"
//console.log(correo)




/* Ejercicio, agregar IVA a un monto */

let monto = +prompt("Ingresa un monto");
const IVA = 0.16;
const montoFinal = monto + (monto * IVA);

alert("El monto total a pagar es: " + montoFinal);





/* 
    EJERCICIO PARA PRACTICAR
    Realiza un programa que calcule el IMC de una persona. 
*/

// Utilizando prompt, y variables let y constantes.
// Formula del IMC: peso / (altura * altura)

/* 
    + suma
    - resta
    * multiplicacion
    / division
    ** potencia
*/