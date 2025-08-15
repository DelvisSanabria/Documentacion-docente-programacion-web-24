/******  TIPOS DE DATOS Archivo 1  ******/

//📜 Comentarios en JavaScript

/* En programación, los comentarios son líneas de texto que el intérprete o compilador ignora y no ejecuta. Su propósito principal es hacer el código más comprensible para los desarrolladores. Permiten dejar notas, explicaciones o desactivar temporalmente partes del código.

En JavaScript, existen dos tipos principales de comentarios: */

//1. Comentarios de una sola línea: Comienzan con "//". Todo lo que sigue a "//" en esa misma línea es considerado un comentario.

    // Esta es una explicación para la siguiente línea de código.
    console.log("Hola, Mundo");


//2.  Comentarios multilínea: Comienzan con "/*" y terminan con "*/". Todo lo que se encuentre entre estos dos símbolos será ignorado, sin importar si abarca varias líneas. El código que proporcionaste utiliza este tipo de comentario al inicio.

    /*
       Esta es una explicación
       que puede extenderse
       a varias líneas.
    */
    console.log("Hola de nuevo");



//💻 Cómo ver la salida de JavaScript en Visual Studio Code

/* Para ver el resultado de tu código JavaScript, como las salidas de "console.log()", directamente en Visual Studio Code, puedes usar la terminal integrada. La forma sencilla es utilizando Node.js, un entorno que permite ejecutar JavaScript fuera del navegador. */

//Tambien podemos usar extensiones como console ninja o better console Code Runner.

// DataTypes en Programación

/* Un tipo de dato es una clasificación que le dice al intérprete o al compilador cómo el programador pretende utilizar un dato. Determina qué tipo de valores puede tomar una variable y qué operaciones se pueden realizar con ella. Piénsalo como las categorías en las que agrupamos la información del mundo real: números, texto, listas, etc.

JavaScript es un lenguaje de tipado dinámico, lo que significa que no necesitas declarar el tipo de dato de una variable; el intérprete lo determina automáticamente en tiempo de ejecución. */


/*
    console.log(parametro): es una funcion que nos permite imprimir lo que sea que se envie como parametro.
    typeof: es una funcion que nos permite saber el tipo de dato del elemento que se encuentra a la derecha de esta palabra. 
*/


//Number (entero, decimal) 

//Representa tanto números enteros como de punto flotante (decimales).

console.log(typeof(100))
console.log(typeof(100.0))

//String (CADENA DE CARACTERES)

/* Se utiliza para representar texto. En JavaScript, puedes usar comillas dobles (`"`), comillas simples (`'`) o comillas invertidas (`` ` ``) para definirlas. */

console.log(typeof("Delvis Sanabria"));
console.log(typeof('Delvis Sanabria'));
console.log(typeof(`Delvis Sanabria`));

//Boolean (Binary)

/* 

Representa un valor lógico y solo puede tener dos valores: "true" (verdadero) o "false" (falso). Es fundamental para la toma de decisiones en el código.

*/

console.log(typeof(true))
console.log(typeof(false))

//En JavaScript, los arrays y los objetos literales son tipos de objetos.

//Array (vectores, listas)

/* 
Array: Es una estructura de datos tipo lista que permite almacenar una colección de múltiples elementos de cualquier tipo en una sola variable. */

console.log(typeof([1,2,3]))
console.log(typeof(["aguila","buitre","condor"]))
console.log(typeof([1,2,3,"aguila","buitre","condor", true, false, [1,2,3]]))

//Objeto

/* 

Objeto Literal: Es una colección de propiedades, donde cada propiedad es una asociación entre un nombre (o clave) y un valor.

*/

console.log(typeof({ "nombre" : "Delvis" ,  "apellido" : "Sanabria", "edad" : 24, "pais" : "Venezuela" }))

//undefined

/* 

Una variable que ha sido declarada pero no se le ha asignado un valor tiene el valor "undefined", y su tipo es "undefined". En nuestro ejemplo, como la variable "delvis" no ha sido declarada en ninguna parte, al intentar acceder a ella se produce un error "undefined", pero si la declararas sin asignarle valor, su tipo sería "undefined".

*/

console.log(typeof(delvis))