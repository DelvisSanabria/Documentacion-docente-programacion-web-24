/*
    Se comoce como operadores de comparacion a los simbolos que nos permiten
    realizar operaciones binarias(entre 2 elementos) de comparacion.
*/


// Igual que == : Devuelve true si los elementos son iguales 
// (No toma en cuenta el tipo de dato, solo el valor).

//true
console.log(1 == "1");

//false
console.log(1 == 2);



// No es igual que != : Devuelve true si los operandos NO son iguales, es decir
// si son difetentes.

console.log( 1 != 1);
console.log( 1 != 2);
console.log( 1 != "1");
console.log( 1 != "2");


//Estrictamente igual que === : retorna true SI el valor y el tipo de dato ES EL MISMO.

let numero = 1;
let numero_2 = 2;
let caracter_1 = "1";
let numero_1 = 1;

console.log( 1 === "1") ; 
console.log( 1 === 1) ; 
console.log( 1 === 2) ; 
console.log( 1 === "2") ; 



//Desigualdad estricta !== : Retorna true SI el valor y/o el tipo de dato NO ES EL MISMO.

console.log( 1 !== 1);
console.log( "1" !== "1");
console.log( 1 !== "1");
console.log( 1 !== 2);
console.log( 1 !== "2");



//Mayor que > : Devuelve true si el operando izquierdo es mayor que el operando derecho.

console.log(2 > 1);
console.log(1 > 2);



//Menor que < : Devuelve true si el operando izquierdo es menor que el operando derecho.
console.log(2 < 1);
console.log(1 < 2);



//Mayor o igual que >= : Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.
console.log(2 >= 1 );
console.log(1 >= 2);
console.log(1 >= 1);



//Menor o igual que <= : Devuelve true si el operando izquierdo es menor o igual que el operando derecho.
console.log(2 <= 1);
console.log(1 <= 2);
console.log(1 <= 1);