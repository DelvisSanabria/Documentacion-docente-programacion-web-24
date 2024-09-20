/*
    ¿Que es un Callback?
        Un callback es una función que se pasa a otra función como argumento o parametro
        y se invoca después de que algún evento o proceso ha terminado, de alli 
        el nombre callback que significa: llamar de vuelta.

        Es decir, la funcion receptora cuando es iniciada, recibe una funcion que viene definida 
        en los parametros y es iniciada o llamada dentro de la misma funcion receptora.
*/


// Ejemplo de uso de callback es el metodo map de los arreglos
// El metodo map recibe una funcion como parametro y esta funcion es ejecutada por cada elemento del arreglo

const numeros = [1, 2, 3, 4, 5];

const numerosDuplicados = numeros.map(
    function(numero){
        return numero * 2;
    }
);


// console.log(`Los numeros originales son: ${numeros}`);
// console.log(`Los numeros duplicados son: ${numerosDuplicados}`);







// En este ejemplo, primero definimos una funcion que recibe como parametros un array, un dato y un callback.

function agregar(miArray, datos, miCallback){
    //Realizo un proceso con el array recibido como parametro.
    miArray.push(datos);

    // Despues de hacer el proceso ejecuto el callback que es recibido por parametros,
    // este realizara un proceso con los resultados obtenidos en las lineas superiores
    // de la funcion agregar(), el proceso que realiza el callback se define al llamar
    // la funcion agregar().
    miCallback();
};



// Defino el array que sera enviado por parametros.
let nombres = ["Jean","Carlos","Jose"];


// Defino la funcion que sera enviada como callback.
function mostrarNombres(){
    console.log("Agregamos un nuevo nombre al array.");
    console.log(nombres);
}

function otraFuncion(){
    nombres.map(
        function(nombre){
            console.log(nombre);
        }
    )
}


// Ejecutamos la funcion agregar().
// El primer parametro es el array nombres.
// El segundo parametro es el dato que sera agregado al array. 
// El tercer parametro es un callback, una funcion.
// Esta funcion va a llamar de vuelta (callback) va a ser ejecutada despues de que la funcion agregar() termine de ejecutarse.
// agregar(nombres, "Diego", mostrarNombres);
// agregar(nombres, "Gabriel", mostrarNombres);
// agregar(nombres, 2024, mostrarNombres);
// agregar(nombres, document.body, otraFuncion);





// *** Ejemplo 2 *** (Realizar diferentes operaciones con un callback) 

// En este ejemplo se crea una funcion "operacion" que recibira 2 parametros numericos y un callback,
// en su interior solo hay un retorno, en el cual asignará los 2 parametros (num1 y num2) recibidos dentro 
// del callback y lo ejecuta.


function operacion(num1, num2, miCallback){
    console.log(miCallback(num1, num2));
}


// Definimos las funciones que seran enviadas como callback.

// Sumar
function sumar(param1, param2){
    return `La suma de ${param1} y ${param2} es: ${param1 + param2}`;
}

// Restar
function restar(param1, param2){
    return `La resta de ${param1} y ${param2} es: ${param1 - param2}`;
}

// Multiplicar
function multiplicar(param1, param2){
    return `La multiplicacion de ${param1} y ${param2} es: ${param1 * param2}`;
}

// Dividir
function dividir(param1, param2){
    return `La division de ${param1} y ${param2} es: ${param1 / param2}`;
}

// Exponenciacion
function exponenciacion(param1, param2){
    return `La exponenciacion de ${param1} elevado a ${param2} es: ${param1 ** param2}`;
}

// Es par?
function esPar(param1, param2){
    return `El numero ${param1} es par: ${param1 % 2 === 0}`;
}



// Ejecutamos la funcion operacion() con diferentes callbacks.
operacion(10, 5, sumar);
operacion(10, 5, restar);
operacion(10, 5, multiplicar);
operacion(10, 5, dividir);
operacion(10, 3, exponenciacion);
operacion(10, null, esPar);




/*** EJEMPLO 3 ***/
// Elabora una funcion que permita añadir elementos a un carrito mediante llamado de callbacks recursivo.


let carrito = "🛒";

function agregarAlCarrito(callback){
    setTimeout(()=>{
        carrito += "🍎";
        callback();
    },1000);
};



agregarAlCarrito(
    function mostrarCarrito(){
        console.log(carrito);
        agregarAlCarrito(
            function mostrarCarrito(){
                console.log(carrito);
                agregarAlCarrito(
                    function mostrarCarrito(){
                        console.log(carrito);
                        agregarAlCarrito(
                            function mostrarCarrito(){
                                console.log(carrito);
                                agregarAlCarrito(
                                    function mostrarCarrito(){
                                        console.log(carrito);
                                        agregarAlCarrito(
                                            function mostrarCarrito(){
                                                console.log(carrito);
                                                agregarAlCarrito(
                                                    function mostrarCarrito(){
                                                        console.log(carrito);
                                                        agregarAlCarrito(
                                                            function mostrarCarrito(){
                                                                console.log(carrito);
                                                                agregarAlCarrito(
                                                                    function mostrarCarrito(){
                                                                        console.log(carrito);
                                                                        agregarAlCarrito(
                                                                            function mostrarCarrito(){
                                                                                console.log(carrito);
                                                                            }
                                                                        )
                                                                    }
                                                                )
                                                            }
                                                        )
                                                    }
                                                )
                                            }
                                        )
                                    }
                                )
                            }
                        )
                    }
                )
            }
        )
    }
);



/*
    Hay varias razones por las que los callbacks pueden ser difíciles de entender:

    Conceptualización: Los callbacks son un concepto abstracto y pueden ser difíciles 
    de comprender para aquellos que están empezando en programación, incluso para los
    programadores con experiencia, toma algo de tiempo y practica dominarlos.


    Naturaleza asíncrona: Los callbacks son un mecanismo para controlar la asincronía, 
    lo cual puede ser un tema un poco desafiante para algunos programadores.


    Complejidad: A veces, los callbacks pueden ser parte de código complejo y anidado, lo que puede hacer 
    que sea difícil entender qué está sucediendo.


    Ausencia de una estructura definida: Los callbacks no siguen una estructura definida como, por ejemplo, 
    las funciones o los bucles, por lo que a veces pueden ser difíciles de seguir y rastrear.


    Sin embargo, con práctica y estudio, los callbacks pueden ser una herramienta muy útil tanto en JavaScript
    como en otros lenguajes de programación. 
    
    NOTA: Es importante practicar con ejemplos y código propio para comprender realmente cómo funcionan.

    Te invito a que crees tus propios ejercicios y trates de escribir codigo conforme tu nivel de conocimiento
    lo permita, es normal si las primeras veces no obtienes el resultado deseado y sientes frustracion,
    pero no te rindas por eso, con el tiempo comenzaras a ver como poco a poco el concepto de callback 
    se vuelve parte de tu experiencia.
*/