/* 
    Funciones de Tipo: Las funciones de tipo se utilizan para definir la forma de una función, 
    especificando los tipos de los argumentos que espera y el tipo de valor que devuelve.
*/

// Ejemplo: 

// Definimos un tipo de función personalizado para una función que toma dos números y devuelve un número.
type OperacionMatematica = (num1: number, num2: number) => number;
// NOTA: La palabra clave type se utiliza para crear un alias de tipo. 
// Un alias de tipo es un nuevo nombre para un tipo existente, que puede ser una estructura de datos, 
// un tipo de datos primitivo o incluso otro alias de tipo.



// Definimos una función que utiliza el tipo de función personalizado
function realizarOperacion(operacion: OperacionMatematica, num1: number, num2: number): number {
    return operacion(num1, num2);
};


// Definimos dos funciones que coinciden con el tipo de función personalizado
function suma(num1: number, num2: number): number {
    return num1 + num2;
};  


function resta(num1: number, num2: number): number {
    return num1 - num2;
};  



// Llamamos a la función "realizarOperacion" con las funciones "suma" y "resta" como argumentos
console.log( realizarOperacion(suma, 5, 3) ); // Salida: 8
console.log( realizarOperacion(resta, 5, 3) ); // Salida: 2




// Ejemplo 2: Definir un tipo de dato personalizado y una funcion que lo utilice.

// Tipo de dato personalizado.
type Usuario = {
    nombre: string;
    edad: number;
    email: string;
};


// Funcion que recibe parametros para crear un usuario de tipo "Usuario"
function crearUsuario(nombre: string, edad: number, email: string): Usuario {
    return {
        nombre: nombre,
        edad: edad,
        email: email
    };
};

// Creando 1 usuario con la funcion crearUsuario
let usuario1: Usuario = crearUsuario("Pedro", 25, "pedro@mail.com");
let usuario2: Usuario = crearUsuario("Victor", 19, "victor@mail.com");




// ¿En que situaciones es necesatio usar funciones de tipo?
// Las funciones de tipo son útiles cuando se desea definir la forma de una función,
// especificando los tipos de los argumentos que espera y el tipo de valor que devuelve.

// Por ejemplo, si se desea crear una función que realice una operación matemática genérica,
// se puede definir un tipo de función personalizado que tome dos números y devuelva un número,
// y luego utilizar este tipo de función personalizado en la definición de la función genérica.

// Otra situación en la que las funciones de tipo son útiles es cuando se desea definir una interfaz
// para un objeto que tiene una función como propiedad, especificando los tipos de los argumentos
// que espera y el tipo de valor que devuelve la función.