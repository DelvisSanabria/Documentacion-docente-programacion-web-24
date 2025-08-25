//Archivo 13

// Los strings o cadenas de caracteres cuentan con metodos para ser manipulados, estos metodos son funciones especiales
// que nos permiten realizar operaciones para modificar las cadenas de caracteres o strings.
// entre los principales metodos se encuentran:


let saludo = " Hola Mundo, esto es un mensaje de PRUEBA  ";


//  length: No es un metodo, es una propiedad que devuelve la longitud de una cadena. (No recibe parametros)
console.log( saludo.length );



//  toUpperCase() y toLowerCase(): convierten una cadena a mayúsculas o minúsculas, respectivamente. (No reciben parametros)
console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());



//  indexOf() y lastIndexOf(): buscan un valor específico en una cadena y devuelven su posición.
console.log(saludo.indexOf("e"));
console.log(saludo.lastIndexOf("e"));




//  slice(): extrae una porción de una cadena, Recibe dos parámetros (desde, hasta).
console.log(saludo.slice(16, 21));




//  replace(): reemplaza un valor específico en una cadena con otro valor.
console.log(saludo.replace("Mundo","Planeta"));




//  concat(): une dos o más cadenas.
console.log(saludo.concat(",Esto se acaba de concatenar"));




//  split(): divide una cadena en un array de subcadenas, su argumento sirve para delimitar la cadena original.
// Es decir el argumento indica donde se haran los cortes en la cadena.

const fragmentos = saludo.split(" ");
console.log(fragmentos);




// join(): permite unir los elementos de un array de caracteres en una nueva cadena, recibe como parametro
// el separador con el cual se uniran las partes.
const fragmentosUnidos = fragmentos.join(" - ");
console.log(fragmentosUnidos); 




//  trim(): elimina los espacios en blanco al principio y al final de una cadena. (No recibe parametros)

console.log(saludo);
console.log(saludo.trim());






//  startsWith() y endsWith(): determinan si una cadena comienza o termina 
//  con un sufijo(Secuencia al inicio) o prefijo(Secuencia al final) específico.

const mensaje = "Hola, te saludo cordialmente, mi nombre es Diego";

console.log(mensaje.startsWith("Hola"));
console.log(mensaje.endsWith("Diego"));





// Ejemplo usando varios metodos

const saludo2 = "  Hola Mundo esto es un mensaje de PRUEBA  ";
console.log(saludo2);


// Convertimos toda la cadena en mayúsculas
const saludo2Mayusculas = saludo2.toUpperCase();


// Quitamos los espacios al inicio y fin
const saludoSinEspacios = saludo2Mayusculas.trim();
console.log(saludoSinEspacios);


// Dividimos la cadena en un array, cortando donde existan espacios.
const fragmentosDeSaludo = saludoSinEspacios.split(" ");
console.log(fragmentosDeSaludo);


// Unimos los elementos del array en una nueva cadena agregando "lexpin" en medio de cada palabra.
const saludoConLExpin = fragmentosDeSaludo.join(" lexpin ");
console.log(saludoConLExpin);


/*
    Ejercicios para realizar en casa:

    1: Elabora un programa que te permita encriptar un mensaje con 16 caracteres de cifrado.


    2:  Elabora un programa que te permita determinar si un correo electronico es "gmail", "hotmail" o "outlook".
        Posteriormente se debe mostrar el dominio del correo electronico en un mensaje.
        Si el correo no termina con alguna de las 3 extensiones previamente mencionadas, se debe informar al usuario que
        utilice un correo admitido por el sistema.

    3:  Elabora un programa que mida la seguridad de una contraseña basandose solamente en la longitud de la cadena.
        Si tiene 2 caracteres, la seguridad es 1. 
        Si tiene 3 caracteres, la seguridad es 3.
        Si tiene 4 caracteres, la seguridad es 5.
        Si tiene 5 caracteres, la seguridad es 7.
        Si tiene 6 caracteres, la seguridad es 9.
        Si tiene mas de 6 caracteres, la seguridad es 10.
*/