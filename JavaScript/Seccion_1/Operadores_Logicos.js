/*
    Se comoce como operadores logicos a los simbolos que nos permiten
    realizar operaciones binarias (true - false).

    Ejemplo:
*/

//  AND: devuelve true si AMBOS operandos son true;
//  de lo contrario, devuelve false.
true  && true;    // true 
true  && false;   // false
false && true;   // false
false && (4==4); // false
'uno' && 'dos';  // dos (ambos son true - retorna el ultimo valor)
false && 'uno';  // false
'uno' && false;  // false
'uno' && true;   // true (ambos son true - retorna el ultimo valor)


//  OR || : Devuelve true si ALGUNO de los operandos es true.
//  SI AMBOS SON FALSOS, devuelve false.
(5 == 5) || (4 == 3); // true
true  || false; // true
true  || true; // true
false || false; // false
false || true; // true
(1<2) || (5>1); // true


//  NOT ! : Devuelve false si su ÚNICO operando se puede convertir a true. 
//  de lo contrario, devuelve true.
!false; // true
!true; // false
!0;    // true
!1;    // false



/* ----- ACTIVIDAD PARA REALIZAR EN CLASE ----- */

// (Facil)
let uno = !true || false;
let dos = false && !false;
let tres = true && !false;

//(Medio)
let cuatro = (5 === 5) || (!true);
let cinco = (!0) || (5 < 0);
let seis = (3 > 4) && (!0);   

//Avanzado
let siete = ( ((false || true) && (!false && true) )) || (true && false)
let ocho = (6 === 3+3) && (9/3 >= 3);
let nueve = (!(!false) || ( ("1" == 1)) && (!false === true) ); 

//Hardcore
let diez = !(!true) === !( !( 5 >= 5 ) );
let once = !( true && (!true === !( !(8 === 4*2) )) );

//Ultra-Hardcore
let doce = !( true && (!true === !( !(16 === (4*2) + 8))) ) !== (false);

//Leyenda
let trece = !(((!(!(10 / 5 == "2") === false) != false) === ((5 * 5) <= (100 / 4))) && (!((1 + 1) !== (10 / 5)) !== (true)));


// Roto
let catorce = !(!(!(1)) && (50 * "0" === 0) !== (false) || !(("20"+24) === (4028/2)));

console.log(uno);
console.log(dos);
console.log(tres);
console.log(cuatro);
console.log(cinco);
console.log(seis);
console.log(siete);
console.log(ocho);
console.log(nueve);
console.log(diez);
console.log(once);
console.log(doce);
console.log(trece);




