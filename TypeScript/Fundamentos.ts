/*
    ¿Que es TypeScrip?
    Es un lenguaje de programación libre y de código abierto desarrollado por Microsoft,
    se clasifica como un superset de JavaScript. Es decir, TypeScript es una extensión de JavaScript
    que agrega nuevas características y capacidades al lenguaje, como tipado estático, funciones de tipo 
    e interfaces.

    Ademas, se puede compilar a JavaScript, lo que significa que el código TypeScript que escribimos
    se puede ejecutar en cualquier navegador web o plataforma que admita JavaScript. 
*/


// Tipado de datos basico

// String
let nombre:string = "Diego";

// Numero
let fecha:number = 2023;

// Booleano
let estaConectado:boolean = true;

// Null
let esNulo:null = null;

// Undefined
let salario:undefined;

// Object
let persona:object = {
    nombre:"Diego",
    edad:23
};

// Any
let loqueSea:any = ["Lo",{que:["sea","aqui"]},123,true, null, undefined];

// Array de string
let lista:Array<string> = ["hola","mundo"];

// Array de number
let listaNumeros:Array<number> = [1,2,3,4,5];

// Array de any
let listaCualquiera:Array<any> = ["hola",1,true];

// Array de boolean
let listaBoolean:Array<boolean> = [true,false,true];

// Array de Array de string
let listaListas:Array<Array<string>> = [["hola","mundo"],["adios","mundo"]];

// Array de Array de Objetos
let listaObjetos:Array<Array<object>> = [
    [{nombre:"Diego",edad:23},{nombre:"Juan",edad:24}],
    [{nombre:"Pedro",edad:25},{nombre:"Guillermo",edad:26}]
];

// Tuplas
// Las tuplas son un tipo de datos que permite almacenar un conjunto de valores de diferentes tipos, 
// es decir, es un array de elementos que pueden ser de diferentes tipos, con un número fijo de elementos
// y cuyos tipos están definidos en un orden específico.
let tupla:[string,number, string, boolean] = ["hola", 1, "Diego", true];



// Enumerar lista de valores

/* 
    En TypeScript, un enum es una forma de definir un conjunto de constantes con nombres. 
    Las constantes de un enum se pueden usar para representar un conjunto de valores discretos, 
    como los colores del semáforo o los días de la semana.
*/


// Ejemplo 1
// enum Semana {Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo};

// // Definimos una variable de tipo Semana.
// let dia1:Semana = Semana.Lunes;
// let dia2:Semana = Semana.Martes;
// let dia3:Semana = Semana.Miercoles;
// let dia4:Semana = Semana.Jueves;
// let dia5:Semana = Semana.Viernes;
// let dia6:Semana = Semana.Sabado;
// let dia7:Semana = Semana.Domingo;


// if( dia1 === Semana.Sabado || dia1 === Semana.Domingo){
//     console.log(`Es fin de semana por que el dia es: ${dia1}`);
// }else{
//     console.log("No es fin de semana");
// }