//Archivo 6

// Asignacion = : como bien su nombre indica se utiliza para asignar un valor.

let asignacion = "Delvis";
asignacion;

let numero1 = 1;
numero1;

let numero2 = 2;
numero2;

let caracter1 = "1";
caracter1;

//Array
let array = [1,2,3,4,5];
array;

//Objeto
let usuario = {
    nombre: "Delvis", 
    edad: 23, 
    pais: "Venezuela"
};
usuario;



// += asignar y sumar
numero1;
numero1 += 1; //Equivale a decir numero1 = numero1 + 1;
numero1;

console.log(numero1);


// -= asignar y restar
numero2;
numero2 -= 1; //Equivale a decir numero2 = numero2 - 1;
numero2;

console.log(numero2);

// *= asignar y multiplicar
let cinco = 5;
cinco *= 5; //Equivale a decir cinco = cinco * 5;
cinco;

console.log(cinco);

// /= asignar y dividir
numero1;
numero1 /= 5; //Equivale a decir numero1 = numero1 / 5;
numero1

console.log(numero1);


// %= modulo y asignar
numero2;
numero2 %= 2; //Equivale a decir numero2 = numero2 % 2;
numero2

console.log(numero2);

//Operadores especiales:
    
/* "…" (propagación spread(operator)) = Se utiliza para descomponer elementos de matrices u objetos, así como para combinar matrices o crear copias de objetos y matrices.  */
    
// Ejemplo 1:**

const numeros = [1,2,3,4,5];
    
// Descomponiendo un array mientras se imprime
console.log(...numeros); // Imprime: 1 2 3 4
    
// Ejemplo 2:
const numeros1 = [1,2,3];
const numeros2 = [4,5,6];
const numeros3 = [7,8,9];

// Usando el operador de propagacion (...) para combinar arrays
const numerosCombinados = [...numero1, ...numeros2, ...numeros3];

console.log(numerosCombinados); // Imprime: 1 2 3 4 5 6 7 8 9

/* ""."" (miembro) proporcionan acceso a las propiedades y métodos de un objeto. */
    
//Ejemplo:
    
// Usando el operador de miembro (.) para acceder a las propiedades de un objeto.
const persona = {
    nombre: "Delvis",
    apellido: "Sanabria",
    pais: "Venezuela"
};

// Accediendo a los valores especificos de un objetos
console.log(persona.nombre);   // Imprime: "Delvis"
console.log(persona.apellido); // Imprime: "Sanabria"
console.log(persona.pais);     // Imprime: "Venezuela"