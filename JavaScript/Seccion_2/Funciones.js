/******  FUNCIONES  ******/

/*
    ¿Que son las Funciones?
    Las funciones son bloques de código que se pueden reutilizar en multiples partes del programa.
    estos bloques de codigo se pueden definir con parametros y sin ellos.

    Sintaxis:
        Palabra reservada function para definir una funcion.
        Nombre de Funcion: Ejemplo function sumar
        Parentesis () donde se indican los parametros: Ejemplo function sumar()
        Llaves {} que contienen el proceso a realizar: Ejemplo function sumar(){}
        
        IMPORTANTE: cada sentencia dentro de una funcion debe finalizar con ;


    Tipos de funciones:

    - Funciones declaradas
    - Funciones de expresion o anonimas
    - Funciones de flecha o arrow function
    - Funciones autoinvocadas

    Subtipos de funciones:
    - Funciones con retorno explicito
    - Funciones con retorno implicito (Funciones de flecha o arrow function)
    - Funciones sin retorno
*/


// Funciones declarativas

// Esta es una funcion declarada sin parametrs con retorno explicito.
function saludar() {
    return "Hola Diego";
};

// ¿Como se ejecuta una funcion?
// Para ejecutar una funcion puedes cololar el nombre de la misma seguido de parentesis ().
// NOTA: Los parentesis inicializan la funcion, si no se colocan esta no se ejecutara.

let saludo = saludar();
console.log( saludo );

let saludoDoble = saludo + " Esto esta dos veces " + saludo;
console.log( saludoDoble )



// Esto es una funcion declarada sin parametros sin retorno.
function sumar(){
    total = 50 + 50;
    console.log(total);
};

let total = 0;
console.log(total);

sumar();
console.log(total);





// Funciones de expresion o anonimas

// Funcion anonima sin parametros con retorno explicito.
const multiplicar = function(){
    return 10 * 15;
}

const total2 = multiplicar() + multiplicar();
console.log(total2);




const iniciarSesion = function(){
    const usuario = "admin";
    const clave = "admin1234";

    if( usuario == "admin" && clave == "admin1234"){
        alert("Se ha iniciado sesion, bienvenido");
    }else{
        alert("Usuario o contraseña incorrectos");
    };
};





// Funciones con parametros
// ¿Que son parametros?: Son variables temporales que se utilizan para movilizar datos.
// Se colocan dentro de los parentesis de la funcion y pueden ser utilizados en el interior de las llaves de la misma.

// Funcion declarada con parametros con retorno.

// const numero1 = +prompt("Ingresa un numero");
// const numero2 = +prompt("Ingresa otro numero");
// const resultado = restar(numero1, numero2);
// alert(`La resta de ${numero1} - ${numero2} es: ${resultado}`);

// function restar(num1, num2){
//     return num1 - num2;
// };





/* 
    Ejercicios para realizar en casa

    1) Elabora un convertidor de unidades de temperatura.

    Escribe un programa que muestre un menu con varias opciones de conversion
    1- Celcius - Fahrenheit
    2- Fahrenheit - Celcius
    3- Kelvin - Celcius
    4- Celcius - Kelvin
    
    Posteriormente, el programa debe pedir al usuario cuantos grados desea convertir,
    y por ultimo mostrar el resultado en un alert indicando...

    "NumeroBase grados unidadBase son NumeroConvertido grados unidadConvertida"

    Formular para Convertir Temperaturas:
        Para convertir de ºC a ºF use la fórmula: temp ºF = temp ºC x 1.8 + 32.
        Para convertir de ºF a ºC use la fórmula: temp ºC = (temp ºF - 32) ÷ 1.8.
        Para convertir de K a ºC use la fórmula: temp ºC = temp K – 273.15.
        Para convertir de ºC a K use la fórmula: temp K = temp ºC + 273.15.



    2) Elabora una calculadora de índice de masa corporal (IMC)
    Escribe un programa que le pida al usuario su peso (en kilogramos) y su altura (en metros) 
    este programa debe calcular su índice de masa corporal (IMC). 
    
    Luego, el programa debe mostrar el resultado en un alert, junto con una indicación del estado del IMC 
    del usuario (por ejemplo, "bajo peso", "peso normal", "sobrepeso", "obesidad").

    La respuesta debe ser: "Tu IMC es: IMC, y tu estado es: estado"

    Formula del IMC: peso / (altura * altura)

    Rangos:
    - bajo peso: <18.5
    - peso normal: 18.5 - 24.9
    - sobrepeso: 25 - 29.9
    - obesidad: >30

    Nota: Utiliza el metodo toFixed() para redondear el resultado con 2 decimales.
*/




// Funciones de flecha o arrow function


// Funcion de flecha sin parametros y con retorno implicito
const resta = () => 10 - 5;

console.log( resta());


// Ejemplo 2: funcion de flecha con parametros y retorno implcito
const suma = (num1, num2) => num1 + num2;
console.log(suma(5, 5));



// Ejemplo 3: funcion de flecha con parametros y retorno explicito
const multiplicacion = (param1,param2)=>{
    return param1 * param2
};

console.log(multiplicacion(50,3));