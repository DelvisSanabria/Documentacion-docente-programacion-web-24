/* 
    Try - Catch: es una estructura de control de excepciones que permite probar código para 
    detectar errores y, en caso de que se produzca una excepción, ejecutar un bloque de código 
    de manejo de excepciones para manejar el error.

    El bloque "try" contiene el código que se está probando para errores, y el bloque "catch"
    contiene el código que se ejecutará en caso de que se produzca una excepción.

    ¿Qué es una Excepción?
    Una excepción es un evento anormal (un tipo de error) que ocurre durante la ejecución de un programa y que interrumpe 
    el flujo normal de la ejecución, puede ser tratado por el programador para prevenir errores graves.

    Esto permite la continuidad ininterrumpida en la ejecucion del codigo en caso de existir
    algun error en el proceso.


    Excepciones comunes:

    - ReferenceError: Se produce cuando se hace referencia a una variable no definida.
    - TypeError: Se produce cuando un operador o función es invocado en un objeto que no es válido para ese tipo de operación o función.
    - SyntaxError: Se produce cuando hay un error de sintaxis en el código.
*/



//Ejemplo try-catch (Capturar el error al llamar variable no declarada);

// const miVariable = "Hola Mundo";

// try {
//     console.log( miVariable );
// }catch(error) {
//     console.log(`¡ERROR! ${error}`);
// }

// console.log("El programa sigue ejecutandose, por eso puedes leerme.");



/*
    "Finally" es una clausula opcional, no es una propiedad ni un método como tal, sino una parte presindible
    de la sintaxis de la estructura de control Try-Catch.

    Esta clausula se ejecuta siempre, independientemente de si se produce una excepción o no,
    y es útil para la limpieza de recursos.
*/

// const objeto = {
//     propiedad: "Hola Mundo"
// };

// Ejemplo try-catch-finally (Accediendo a una propiedad de un objeto que no existe);
function verPropiedad(){
    try {
        //Este objeto y esa propiedad no existen
        console.log(objeto.propiedad); // Aqui se produce el error
        return "Se ejecuto try" // Esta linea no se ejecuta
    }catch(error) {
        console.log(`Error: el objeto no existe. | ${error}`);
        return "Ocurrió una exepcion y se ejecuto catch."
    }finally {
        console.log("La ejecucion no se interrumpio gracias a Try-Catch");
    }
};

// console.log(verPropiedad());




// Ejercicio 1
// Realiza una funcion con try-catch que intente multiplicar 2 numeros y en caso de surgir
// una excepcion el bloque catch se mostrara cual fue la excepcion obtenida.
// una vez finalizado el try-catch la funcion debe retornar un mensaje que diga:
// La multiplicacion de (numero1) x (numero2) = (multiplicar).


let numero1 = 10;
let numero2 = 2;
// let multiplicacion = 5;

function multiplicar(){
    let multiplicacion;
    try{
        //scope local
        // let multiplicacion = numero1 * numero2;
        multiplicacion= numero1 * numero2;
        // La multiplicacion se realizo exitosamente
        console.log(`Total en el try: ${multiplicacion}`);
    }catch(error){
        console.log( error );
    }finally{
        console.log("Proceso finalizado sin interrupcion.");
    }
    //Se muestra un error por que la variable multiplicacion es de scope local
    return(`La multiplicacion de ${numero1} x ${numero2} = ${multiplicacion}`);
};

// console.log( multiplicar() );

// multiplicacion not found
// console.log(multiplicacion); 





// throw: es una palabra reservada que permite lanzar una excepcion personalizada.

// Ejemplo de uso de try-catch y throw
function validarEdad(edad){
    try{
        if(edad < 18){
            throw {
                nombre: "Edad no permitida",
                mensaje: "Eres menor de edad, no puedes ingresar",
                sugerencia: "Pide permiso a tus padres"
            };
        }else if(edad >= 75){
            throw {
                nombre: "Edad muy avanzada",
                mensaje: "Eres mayor de 75 años, no puedes ingresar por riesgo de salud",
                sugerencia: "Mejor quedate en casa, ya no estamos para esos trotes"
            }
        }else{
            console.log("Bienvenido al bar.");
        }
    }catch(error){
        if(error.nombre === "Edad no permitida"){
            console.error(error);
        }else if(error.nombre === "Edad muy avanzada"){
            console.warn(error);
        }
    }
};


validarEdad(15);
validarEdad(20);
validarEdad(80);


// Ejercicio para realizar en casa

/* 
    Realiza una funcion que permita detectar si un nombre contiene numeros, 
    
    - En caso de que el nombre contenga numeros la funcion debe lanzar una excepcion personalizada con el mensaje:
    "El nombre no debe contener numeros".
    
    - En caso de que el nombre no contenga numeros la funcion debe retornar un mensaje que diga:
    "El nombre está correcto".


    Emplea: try-catch, throw, if-else, funciones.
*/