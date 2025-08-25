/* 
Archivo 28

    ¿Qué es el asincronismo?
    El asincronismo es una técnica que permite a los programas ejecutar tareas de manera no bloqueante. 
    Esto permite que el programa puede continuar con otras tareas mientras se completa una tarea asíncrona, 
    en lugar de bloquearse y esperar a que se complete.

    El asincronismo es fundamental para mejorar la experiencia del usuario y mejorar la eficiencia del 
    programa, especialmente cuando se trata de tareas que pueden tardar un tiempo en completarse, como 
    las solicitudes de red y consumo de API´s.

    Hay varias formas de lograr el asincronismo, como promesas, async-await, setTimeout, setInterval
    y la utilización de eventos, cada uno de estos enfoques ofrece diferentes ventajas y desventajas 
    y puede ser apropiado en función del uso que se le quiera dar.

    Podemos concluir entonces, que el asincronismo es una técnica esencial para mejorar la experiencia 
    del usuario y la eficiencia del programa.
*/


// Ejemplo 1
// En este ejemplo utilizaremos la funcion setTimeout para simular una tarea asincrona.

// ¿Que es setTimeout(function, time)?
// setTimeout es una función que nos permite ejecutar una tarea después de un tiempo determinado,
// recibe como parametros una funcion y un tiempo de espera en milisegundos.

console.log("Numero 1");
console.log("Numero 2");

setTimeout(()=>{
    // Esta funcion se ejecutara despues de 5 segundos.

    // Aqui se imprime el valor de la variable contador.
    console.log("Numero 3");
},5000); // 5000 milisegundos = 5 segundos.

console.log("Numero 4");




// Ejemplo 2
// En este ejemplo utilizaremos la funcion setInterval para simular un cronometro.
// ¿Que es setInterval(function, time)?
// setInterval es una función que nos permite ejecutar una tarea repetidamente cada cierto tiempo,
// recibe como parametros una funcion (que se ejecutara repetidamente) y un tiempo de espera en milisegundos.

let contador = 0;

setInterval(()=>{
    // Esta funcion se ejecutara cada 1 segundo
     // Por lo que la variable contador aumentara en 1 cada segundo que pase.

    // Aqui se realiza el incremento de la variable contador.
    contador++;

     // Aqui se imprime el valor de la variable contador.
     console.log("Contador: ",contador);
},1000); // 1000 milisegundos = 1 segundo.



// Ejemplo 3
// En este ejemplo utilizaremos la funcion setInterval para realizar
// aumentar el valor de un contador cada cierto tiempo e imprimirlo en el DOM.

// Selecionamos el elemento del DOM que queremos modificar.
let contadorDOM = document.getElementById("contador");

// Capturamos los botones del DOM que utilizaremos.
let botonIniciar = document.getElementById("iniciar");
let botonDetener = document.getElementById("detener");
let botonReiniciar = document.getElementById("reiniciar");



// Creamos una variable que almacenara el valor del contador.
let tiempo = 0;

// En esta variable almacenaremos el incremento del contador para poder detenerlo con clearInterval.
let incremento; 

// Creamos una funcion que se ejecutara al presionar el boton iniciar.
function conteo(){
    // Aqui se remueve el evento del boton para evitar que se ejecute mas de una vez.
    botonIniciar.removeEventListener("click", conteo);

    // Aqui se cambia el color del boton para indicar que el cronometro esta desactivado.
    botonIniciar.setAttribute("style","background-color: red;");

    incremento = setInterval(()=>{
        // Aqui se realiza el incremento de la variable contador.
        tiempo++;

        // Aqui se imprime el valor de la variable contador.
        contadorDOM.innerText = tiempo;
    },1000);
};


// Creamos una funcion que se ejecutara al presionar el boton detener.
function detener(){
    // Añadimos el evento al boton iniciar para que reanude el cronometro.
    botonIniciar.addEventListener("click", conteo);

    // Cambiamos el color del boton para indicar que el cronometro esta activado.
    botonIniciar.setAttribute("style","background-color: green;");

    // Detenemos el conteo del cronometro.
    clearInterval(incremento);
};


// Creamos una funcion que se ejecutara al presionar el boton reiniciar.



// Añadimos un evento al boton para que ejecute la funcion cronometro.
botonIniciar.addEventListener("click", conteo);
botonDetener.addEventListener("click", detener);
botonReiniciar.addEventListener("click", ()=>{ tiempo = 0; contadorDOM.innerText = tiempo });






// Muy bien, ya nuestro cronometro esta funcionando, pero hay un problema...
// Si presionamos el boton mas de una vez, el cronometro se acelera,
// Ademas, no hay forma de detener el cronometro una vez que se ha iniciado,
// Ni de reiniciar el cronometro una vez que se ha detenido.

// Para solucionar estos problemas, necesitamos hacer uso de: 
// clearInterval y removeEventListener.

// Primero realizamos la logica que impide que se ejecute el evento si el contador ya esta corriendo.






// Ejemplo 4
// En este ejemplo utilizaremos la funcion setInterval para elaborar un reloj digital.
// Ademas utilizaremos el objeto Date para obtener la hora actual del sistema y aprenderemos a usar sus metodos.

// ¿Que es el objeto Date?
// Es un objeto que nos permite trabajar con fechas y horas en JavaScript, 
// permitiendonos obtener la fecha y hora actual del sistema.

// Selecionamos los elementos del DOM que queremos modificar.

const hora = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");


/* 
    Algunos metos del objeto Date:

    getFullYear() retorna el año actual
    get.day() retorna el dia actual de la semana, domingo = 0, lunes = 1, martes = 2, etc.
    getMonth() retorna el mes actual, enero = 1, febrero = 2, etc.
    getHours retorna la hora actual en formato 24h
    getMinutes() retorna los minutos actuales
    getSeconds() retorna los segundos actuales
    getMilliseconds retorna los milisegundos actuales
    getTime() retorna el tiempo en milisegundos desde 1970 (timestamp / unix time / epoch time)
    toDateString() retorna el dia-semana/mes/dia-mes/año actual
    toTimeString() retorna la hora:minutos:segundos:milisegundos actual
    toLocaleString() retorna la fecha y hora actual en formato local
    toLocaleDateString() retorna la fecha actual en formato local
    toLocaleTimeString() retorna la hora actual en formato local
    toISOString() retorna la fecha y hora actual en formato ISO
    toUTCString() retorna la fecha y hora actual en formato UTC
    toGMTString() retorna la fecha y hora actual en formato GMT
*/




// Creamos una funcion asincrona que se ejecutara cada 10 milisegundos.
setInterval(()=>{
    const horaActual = new Date();
    // Actualizamos los valores del reloj en el DOM.

    // Hora
    if(horaActual.getHours() < 10){
        hora.innerText = `0${horaActual.getHours()}`;
    }else{
        hora.innerText = horaActual.getHours();
    }

    // Minutos
    if(horaActual.getMinutes() < 10){
        minutos.innerText = `0${horaActual.getMinutes()}`;
    }else{
        minutos.innerText = horaActual.getMinutes();
    }

    // Segundos
    if(horaActual.getSeconds() < 10){
        segundos.innerText = `0${horaActual.getSeconds()}`;
    }else{
        segundos.innerText = horaActual.getSeconds();
    }

},1000);




// Ejemplo 5
// Forma mas practica de obtener la hora actual del sistema para un reloj digital.

const reloj = document.getElementById("reloj");

// Hora que se incremente cada 1s (tomando como referencia la hora del sistema operativo)
setInterval(() => reloj.innerText = new Date().toLocaleTimeString(), 1000);

// Fecha que se incremente cada 24h
document.getElementById("fecha").innerText = new Date().toLocaleDateString();
setInterval( () => document.getElementById("fecha").innerText = new Date().toLocaleDateString(), 86400);





//Tarea extra: Realiza un cronometro que capture horas, minutos y segundos y milisegundos.
// Este cronometro debe tener la capacidad de iniciar, detener, reiniciar el conteo y capturar un tiempo,
// los tiempos capturados se deben mostrar en una seccion llamadas "Tiempos capturados".