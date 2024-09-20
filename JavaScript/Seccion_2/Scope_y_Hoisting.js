/*
    Iniciemos con un ejemplo:

    Hay una fiesta de niños y una caja de juguetes.

    Si el niño de la casa donde se realiza la fiesta (El cumpleañero) tiene la caja de juguetes en su habitación, 
    solo las personas que en su habitación podrán jugar con los juguetes de la caja. 
    En este caso, la caja de juguetes tiene un scope (Alcance) local en la fiesta.

    Pero si el niño lleva la caja de juguetes al patio, todos los niños presentes podrán jugar 
    con los juguetes de la caja. 
    En este caso, la caja de juguetes tiene un scope (Alcence) global en la fiesta.

    Para resumir, el scope local se refiere a algo que solo se puede acceder en un lugar específico, 
    como la habitación del niño, mientras que el scope global se refiere a algo que se puede acceder
    desde otros lugares, como el patio con otros niños.
*/



// Ejemplo 1

let variableGlobal = "Diego";


function imprimirNombre(){
    let variableLocal = "Rodriguez";

    console.log(`La Variable global es: ${variableGlobal}`);
    console.log(`La Variable local es: ${variableLocal}`);

    console.log(`Mi nombre es ${variableGlobal} ${variableLocal}`);
};

imprimirNombre();

let variableLocal = "Rodriguez 2";

console.log(variableGlobal);
console.log(variableLocal);




// Ejemplo 2


const nombre = "Guillermo";

function saludar(usuario){
    const apellido = "Gonzalez";
    console.log(`Hola ${usuario} ${apellido}`);

    function saludar2(nombreUsuario, apellidoUsuario, grupo){
        const pais = "Colombia";

        console.log(nombre);
        console.log(apellido);
        console.log(pais);

        console.log(`Hola ${nombreUsuario} ${apellidoUsuario} de ${pais} estas en el grupo ${grupo}`);
    };

    saludar2(usuario, apellido, "15");


    console.log(nombre);
    console.log(apellido);
    // console.log(pais);
};

saludar(nombre);


console.log(nombre);
// console.log(apellido);
// console.log(pais);







/*
    Hoistin

    ¿Que es el Hoisting?
    El "hoisting" es un comportamiento en JavaScript donde las declaraciones de variables y 
    funciones son movidas al inicio de su ámbito de ejecución durante la fase de compilación 
    del código, antes de que el código sea realmente ejecutado. 
    
    Esto significa que aunque en el código fuente una variable o función sea declarada más tarde, 
    en tiempo de ejecución su declaración es "elevada" al principio del ámbito en el que se encuentran.


    En palabras simples, el hoisting se aplica a las variables y funciones declaradas en el documento
    cuando el codigo se encuantra en la fase de ejecucion, haciendo que no se puedan llamar a las variables
    antes de su declaracion, pero esto no sucede con las funciones declaradas (Si con las funciondes de expresion).



    Esto tiende a ser algo confuso, pero se puede comprender la escencia del hoisting si se entiende lo siguiente:
    - Las variables no se pueden llamar antes de ser declaradas, ni las funciones de expresion.
    - Las funciones pueden ser llamadas sin importar que sean declaradas antes o despues.
*/


let clase = "Clase de JavaScript";

const miSaludo = function(){
    console.log("Hola, que tal?");
}


misaludo2("Diego");

function misaludo2(nombre){
    console.log(`Hola, ${nombre}`);
}

miSaludo();
console.log(clase);
