/*
    Funciones en TypeScript
    Las funciones en TypeScript son similares a las funciones en JavaScript, pero con la adición de tipado estático. 
    Las funciones en TypeScript pueden tener parámetros tipados, valores de retorno tipados.
*/

// ¿Como es la sintaxis de una funcion declarada en TypeScript?

function saludar(nombre: string): string {
    return `Hola, ${nombre}!`;
};

// ¿Como se llama a una funcion en TypeScript?
console.log(saludar("Diego"));




// ¿Como es la sintaxis de una funcion expresada en TypeScript?
let saludar2 = function(nombre: string): string {
    return `Hola, ${nombre}!`;
};

// ¿Como se llama a una funcion expresada en TypeScript?
console.log(saludar2("Guillermo"));



// ¿Como es la sintaxis de una funcion flecha en TypeScript?
let saludar3 = (nombre: string): string => {
    return `Hola, ${nombre}!`;
};

// ¿Como se llama a una funcion flecha en TypeScript?
console.log(saludar3("Juan"));



// ¿Como se define una funcion autoinvocada en TypeScript?
(function(nombre:string):string{return `Hola, ${nombre}!`;})("Diego");

// ¿Como se define una funcion autoinvocada en TypeScript?
// NO se ejecutar manualmente, ya que se ejecuta automaticamente al cargar el script.