/*
Archivo 7

    Una expresión condicional es un conjunto de instrucciones que evalúan una expresión
    y solo se ejecutarán si dicha expresión es verdadera. 
    JavaScript admite dos expresiones condicionales: (if...else) y (switch).
*/



//if (Si)
// prompt: es una funcion nativa de JavaScript que muestra una ventana de entrada en el navegador.


// let numero = +prompt("Ingresa un numero","Primer placeholder de if");
// let otroNumero = +prompt("Ingresa otro numero","Segundo placeholder de if");

// //Si numero es  menor que otroNumero
// if (numero < otroNumero){
//     // Template String: permite mostrar texto y variables en una sola expresion, mediante la concatenacion simplificada.
//     // `` (backticks, comillas literales o comillas invertidas) facilita la concatenacion.
//     alert(`El numero ${numero} es menor que ${otroNumero}`);
//     alert("El numero " + numero + " es menor que " + otroNumero);
// }





//if-else
let numero2 = +prompt("Ingresa un numero","Primer place holder de If-else");
let otroNumero2 = +prompt("Ingresa otro numero","Segundo placeholder de If-else");

if (numero2 > otroNumero2){
    alert(`El numero ${numero2} es mayor que ${otroNumero2}`); 
}else{
    alert(`El numero ${numero2} es menor que ${otroNumero2}`);
}


//Operador Ternario
let numero2A = +prompt("Ingresa un numero","If-else Ternario");
let otroNumero2A = +prompt("Ingresa otro numero","If-else Ternario");

//                       "Si"                                                         "Sino"
(numero2A < otroNumero2A) ? alert(`El numero ${numero2A} es menor que ${otroNumero2A}`) : alert(`El numero ${numero2A} es mayor que ${otroNumero2A}`);




//if - else if - else (Si - Sino Si - Sino)
let uno = +prompt("Ingresa un numero","if - else if - else");
let dos = +prompt("Ingresa otro numero","if - else if - else");

if(uno > dos){
    alert(`El numero ${uno} es mayor a ${dos}`);
}else if(uno == dos){
    alert(`El numero es ${uno} es igual a ${dos}`);
}else{
    alert(`El numero ${uno} es menor ${dos}`);
}


// El mismo ejemplo de arriba pero adaptado con el operador ternario
let unoA = +prompt("Ingresa un numero","if - else if - else");
let dosA = +prompt("Ingresa otro numero","if - else if - else");

(unoA > dosA)
    ? alert(`El numero ${unoA} es mayor a ${dosA}`)
    : (unoA == dosA)
        ? alert(`El numero es ${unoA} es igual a ${dosA}`)
        : alert(`El numero ${unoA} es menor ${dosA}`);



/*
    Ejercicio extra 1: Realizar un algoritmo que valide si la suma de 2 numeros es mayor, igual o menor
    a la multiplicacion de otros 2 numeros.
*/


//Solucion ejercicio 1:
//         |        Primer prompt       | + |       Segundo prompt         |
let suma = +prompt("Suma, primer numero") + +prompt("Suma, segundo numero");
alert(`Total suma: ${suma}`);

let multiplicacion = +prompt("Multiplicacion, primer numero") * +prompt("Multiplicacion, segundo numero");
alert(`Total multiplicacion: ${multiplicacion}`);


// Evaluacion con If-else
if(suma > multiplicacion){
    alert(`El total de la suma (${suma}) es mayor al total de la multiplicacion (${multiplicacion})`);
}else if(suma === multiplicacion){
    alert(`El total de la suma (${suma}) es igual al total de la multiplicacion (${multiplicacion})`);
}else{
    alert(`El total de la suma (${suma}) es menor al total de la multiplicacion (${multiplicacion})`);
};

// Evaluacion con operador ternario
(suma > multiplicacion) 
    ? alert(`El total de la suma (${suma}) es mayor al total de la multiplicacion (${multiplicacion})`)
    : (suma === multiplicacion)
        ? alert(`El total de la suma (${suma}) es igual al total de la multiplicacion (${multiplicacion})`)
        : alert(`El total de la suma (${suma}) es menor al total de la multiplicacion (${multiplicacion})`);




/*
    Ejercicio extra 2: Realizar un algoritmo que valide si un usuario en un campo 
    es identico(===) a otro usuario en otro campo.
*/

//Solucion ejercicio 2:
let campo1 = prompt("Ingresa tu usuario");
let campo2 = prompt("Ingresa tu usuario nuevamente");

// Con if-else
if(campo1 === campo2){
    alert("El usuario coincide");
}else{
    alert("Usuarios distintos");
};

// Con ternario
(campo1 === campo2)
    ? alert("El usuario coincide")
    : alert("Usuarios distintos" );




/*Switch: Permite ejecutar un bloque de codigo basandose en casos.
    La sintaxis de switch consiste en una expresion a evaluar y en base a los resultados esperados,
    se desarrollan los casos a ejecutar (case), adicional se coloca break para evitar que se ejecuten los demas
    casos y default para una respuesta por defecto por si ningun caso se cumple.

    La palabra reservada switch se utiliza para evaluar un valor
    La palabra reservada case se utiliza para definir los posibles casos.
    La palabra reservada break se utiliza para romper el switch-case.
    La palabra reservada default se utiliza para definir un caso por defecto.
*/

// Ejemplo: Imagina que deseas imprimir un mensaje en base al dia de la semana.

const dia = prompt("Ingresa un dia de la semana");

switch(dia){
    case "lunes":
        alert("Es lunes");
        break;
    case "martes": 
        alert("Es martes");
        break;
    case "miercoles":
        alert("Es miercoles");
        break;
    case "jueves":
        alert("Es jueves");
        break;
    case "viernes":
        alert("Es viernes");
        break;
    case "sabado":
        alert("Es sabado");
        break;
    case "domingo":
        alert("Es domingo");
        break;
    default:
        alert("No es un dia de la semana");
};





/*
    Realiza un menu que permita elegir que clase de producto se desea comprar, y en base a la eleccion del usuario motrar
    el producto que selecciono.

    El menu debe contener 8 productos diferentes y en case de seleccionar un producto que no se muestre en la lista
    indicar que no se encuentra disponible.

    Utilizar: prompt y switch, No se deben utilizar variables.
*/

// switch(prompt(`
// Minimarket 🛒\n
// ¿Que desea comprar?:
// 1) Carne 🥩
// 2) Verduras 🥬
// 3) Frutas 🍎
// 4) Dulces 🧁
// 5) Bebidas 🥤
// 6) Productos de aseo personal 🧼
// 7) Medicamentos 💊
// 8) Papeleria ✉️
// 9) No veo lo que busco 🤷
// `)){
//     case "1":
//         alert("Has seleccionado Carne 🥩");
//         break;
//     case "2":
//         alert("Has seleccionado Verduras 🥬");
//         break;
//     case "3":
//         alert("Has seleccionado Frutas 🍎");
//         break;
//     case "4":
//         alert("Has seleccionado Dulces 🧁");
//         break;
//     case "5":
//         alert("Has seleccionado Bebidas 🥤");
//         break;
//     case "6":
//         alert("Has seleccionado Productos de aseo personal 🧼");
//         break;
//     case "7":
//         alert("Has seleccionado Medicamentos 💊");
//         break;
//     case "8":
//         alert("Has seleccionado Papeleria ✉️");
//         break;
//     case "9":
//         alert("Lo sentimos pronto tendremos mas productos 🛒");
//         break;
//     default:
//         alert("Lo sentimos el producto no se encuentra disponible");
// };


/* 
    Extension 1 del ejercicio anterior, utilizando el mismo menú mostrar 3 o 4 opciones de cada tipo de producto.
*/


switch(prompt(`
Minimarket 🛒\n
¿Que desea comprar?:
1) Carne 🥩
2) Verduras 🥬
3) Frutas 🍎
4) Dulces 🧁
5) Bebidas 🥤
6) Productos de aseo personal 🧼
7) Medicamentos 💊
8) Papeleria ✉️
9) No veo lo que busco 🤷
`)){
    case "1":
        alert("Has seleccionado Carne 🥩");
        let opcion = prompt(`Elige el tipo de carne:
        1: Cerdo 🐷
        2: Pollo 🐔
        3: Pescado 🐟
        4: Res 🐄
        `);

        // Manejando la respuesta con if-else
        if(opcion === "1"){
            alert("Has seleccionado Cerdo 🐷");
        }else if( opcion === "2"){
            alert("Has seleccionado Pollo 🐔");
        }else if(opcion === "3"){
            alert("Has seleccionado Pescado 🐟");
        }else if(opcion === "4"){
            alert("Has seleccionado Res 🐄");
        }else{
            alert("Lo sentimos el tipo de carne que indicas no se encuentra disponible");
        }
        break;
    case "2":
        alert("Has seleccionado Verduras 🥬");

        // Manejando la respuesta con switch
        switch(prompt(`
        Elige el tipo de verdura:
        1: Lechuga 🥬
        2: Zanahoria 🥕
        3: Brocoli 🥦
        4: Papa 🥔
        `)){
            case "1":
                alert("Has seleccionado Lechuga 🥬");
                break;
            case "2":
                alert("Has seleccionado Zanahoria 🥕");
                break;
            case "3":
                alert("Has seleccionado Brocoli 🥦");
                break;
            case "4":
                alert("Has seleccionado Papa 🥔");
                break;
            default:
                alert("Lo sentimos la verdura que indicas no se encuentra disponible");
        }
        break;
    case "3":
        alert("Has seleccionado Frutas 🍎");
        let respuesta = +prompt(`
        Elige el tipo de fruta:
        1: Manzana 🍏
        2: Cereza 🍒
        3: Pera 🍐
        4: Piña 🍍
        `);

        // Manejando la respuesta con Ternario
        respuesta === 1
            ? alert("Has seleccionado Manzana 🍏")
            : respuesta === 2
                ? alert("Has seleccionado Cereza 🍒")
                : respuesta === 3
                    ? alert("Has seleccionado Pera 🍐")
                    : respuesta === 4
                        ? ("Has seleccionado Pina 🍍")
                        : alert("Lo sentimos la fruta que indicas no se encuentra disponible");
        
        break;
    case "4":
        alert("Has seleccionado Dulces 🧁");
        break;
    case "5":
        alert("Has seleccionado Bebidas 🥤");
        break;
    case "6":
        alert("Has seleccionado Productos de aseo personal 🧼");
        break;
    case "7":
        alert("Has seleccionado Medicamentos 💊");
        break;
    case "8":
        alert("Has seleccionado Papeleria ✉️");
        break;
    case "9":
        alert("Lo sentimos pronto tendremos mas productos 🛒");
        break;
    default:
        alert("Lo sentimos el producto no se encuentra disponible");
};











/* ACTIVIDAD - Juego del semaforo.

    Crea un mensaje en pantalla que muestre 3 colores a elegir: 
    VERDE, AMARILLO, ROJO.
    Guarda la respuesta en una variable llamada color.

    Ejemplo: Elige un color para iniciar:
    1) VERDE
    2) AMARILLO
    3) ROJO
    OTRO) Opcion invalida


    Luego crea otro mensaje en pantalla que muestre una situacion con el color ingresado previamente
    y 3 opciones a elegir: Pasar normalmente, Acelerar y Esperar.
    Guarda la respuesta en una variable llamada accion.

    Ejemplo: 
        - El semaforo esta de color ROJO, ¿Que desea hacer?
        1) Pasar normalmente
        2) Acelerar
        3) Esperar
        OTRO) Opcion invalida


    Luego crea la logica con Switch-Case que evalue las respuestas ingresadas en el navegador
    y en base a ello inicie un caso.


    Si la luz es VERDE evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Bien hecho!, pasaste en el momento adecuado ✅, ¡Has ganado! 😁
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Oh no!, Aceleraste demasiado y chocaste 💥, ¡Has perdido! 😞
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! ❌
    - De lo contrario
        mostrar un mensaje que diga: Respuesta invalida.
    
    
    Si la luz es AMARILLO evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Oh no!, No aceleraste lo suficiente y te han chocado 💥, ¡Has perdido! ❌
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Bien hecho!, pasaste en el momento justo ✅, ¡Has ganado! 😁
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! 😞
    - De lo contrario
        mostrar un mensaje que diga: Respuesta invalida.


    Si la luz es ROJO evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Oh no!, Pasaste en el momento indebido ❌, ¡Has perdido! 😞
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Oh no!, Crusaste mientras autos en otra direccion pasaban y chocaste 💥, ¡Has Perdido! ❌
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Bien hecho!, Esperaste en el momento adecuado ✅, ¡Has ganado! 😁
    - De lo contrario
        mostrar un mensaje que diga: Respuesta invalida.


    PISTA: en algun momento necesitaras usar if-else y el operador AND/&&
    PISTA 2: Para los mensajes de retorno puedes usar alert() o console.log()
*/


let color = prompt(
    `Escribe un color para iniciar:
    1) verde 🟢
    2) amarillo 🟡
    3) rojo 🔴` 
).toLowerCase();

let accion;

if(color === "verde" || color === "amarillo" || color === "rojo"){    
    accion = +prompt(`El semaforo esta de color ${color}, ¿Que desea hacer?
    1) Pasar normalmente
    2) Acelerar
    3) Esperar`);

    if((accion >= 1) && (accion <= 3)){
        alert("Evaluando resultados...");
        switch(color){
            case "verde":
                if(accion === 1){
                    alert("Bien hecho!, pasaste en el momento adecuado ✅, ¡Has ganado! 😁");
                }else if (accion === 2){
                    alert("Oh no!, Aceleraste demasiado y chocaste 💥, ¡Has perdido! 😞");
                }else {
                    alert("Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! ❌");
                }
                break;
            case "amarillo":
                if(accion === 1){
                    alert("Oh no!, No aceleraste lo suficiente y te han chocado 💥, ¡Has perdido! ❌")
                }else if(accion === 2){
                    alert("Bien hecho!, pasaste en el momento justo ✅, ¡Has ganado! 😁")
                }else{
                    alert("Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! 😞")
                }
                break;
            case "rojo":
                if(accion === 1){
                    alert("Oh no!, Pasaste en el momento indebido ❌, ¡Has perdido! 😞")
                }else if(accion === 2){
                    alert("Oh no!, Crusaste mientras autos en otra direccion pasaban y chocaste 💥, ¡Has Perdido! ❌")
                }else{
                    alert("Bien hecho!, Esperaste en el momento adecuado ✅, ¡Has ganado! 😁")
                }
                break;
        }
    }else{
        alert("Respuesta Invalida");
    };
}else{
    alert("Respuesta Invalida");
};

