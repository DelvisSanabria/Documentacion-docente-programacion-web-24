/******  TIPOS DE DATOS  ******/

/*
    console.log(parametro): es una funcion que nos permite imprimir lo que sea que se envie como parametro.
    typeof: es una funcion que nos permite saber el tipo de dato del elemento que se encuentra a la derecha de esta palabra. 
*/


//Number (entero, decimal)
console.log(typeof(100))
console.log(typeof(100.0))

//String (CADENA DE CARACTERES)
console.log(typeof("Diego Rodriguez"));
console.log(typeof('Diego Rodriguez'));
console.log(typeof(`Diego Rodriguez`));

//Boolean (Binary)
console.log(typeof(true))
console.log(typeof(false))

//Array (vectores, listas)
console.log(typeof([1,2,3]))
console.log(typeof(["aguila","buitre","condor"]))
console.log(typeof([1,2,3,"aguila","buitre","condor", true, false, [1,2,3]]))

//Objeto
console.log(typeof({ "nombre" : "Diego" ,  "apellido" : "Rodriguez", "edad" : 30, "pais" : "Colombia" }))

//undefined
console.log(typeof(diego))
