/*
Archivo 12

    Los loops o bucles son estructuras de control de flujo en programación, que permiten repetir un bloque de código un número determinado de veces o mientras se cumpla una condición.
    Esto es útil cuando se necesita ejecutar una tarea repetitiva varias veces, por ejemplo, para recorrer una lista de elementos y realizar una acción en cada uno de ellos.
    JavaScript admite diferentes tipos de bucles.

    1. for - recorre un bloque de código varias veces
    2. for/in - recorre las propiedades de un objeto
    3. for/of - recorre los valores de un array
    4. while - recorre un bloque de código mientras se cumpla una condición
    5. do/while - también recorre un bloque de código mientras se cumpla una condición
*/

/* 

For:

Es un loop estructurado que se utiliza para repetir un bloque de código un número fijo de veces.

La estructura del bucle for es la siguiente:

for (inicialización; condición; incremento) {
    // bloque de código a ejecutar
}
*/

// Tabla de multiplicar con el bucle for
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
};

let variable = 0;


for(i=0;i<=500;i++){
    variable+=1;
}

console.log(variable);




// Bucle for para tablas de multiplicar del 1 al 10
// Se utiliza un bucle anidado, donde el bucle externo recorre los números
// del 1 al 10 y el bucle interno recorre los números del 1 al 10 para multiplicar con el número del bucle externo.
// El resultado se muestra en la consola con un formato específico.
// Al finalizar cada tabla, se imprime una línea de separación.
// Ejemplo: 1 x 1 = 1, 1 x 2 = 2, ..., 1 x 10 = 10, luego una línea de separación, y así sucesivamente para los números del 2 al 10.
// El resultado final es una tabla de multiplicar completa del 1 al 10, con cada multiplicación en una línea separada y una línea de separación al final de cada tabla.
// Ejemplo de salida:
// 1 x 1 = 1
// 1 x 2 = 2
// ...// 1 x 10 = 10
// -----------
// 2 x 1 = 2
// 2 x 2 = 4    

// Tablas de multiplicar del 1 al 10
for (let y=1; y<=10; y++){
    for (let i=1; i<=10; i++){
            console.log(`${y} X ${i} = ${i*y}`);
        if (i==10){
            console.log("-----------");
        }
    }    
};




// for/in: recorre las propiedades de un objeto

// Se utiliza para iterar sobre las propiedades de un objeto, permitiendo acceder a cada clave y su valor.
// En el ejemplo, se define un objeto llamado "persona" con varias propiedades (nombre, edad, ciudad, telefono, email).

let persona = {
    nombre: "Delvis",
    edad: 24,
    ciudad: "Css",
    telefono: "+584123456789",
    email:"delvisExample@gmail.com"
};

/* 

La estructura del bucle for/in es la siguiente:
for (let clave in objeto) {
    // bloque de código a ejecutar
}

*/
for (let clave in persona){
    console.log(`La propiedad actual es: ${clave} y su valor es = ${persona[clave]}`);
}

// Luego, se utiliza un bucle for/in para recorrer las propiedades del objeto "persona".
// En cada iteración, se imprime en la consola el nombre de la propiedad actual y su valor correspondiente.
// Esto permite acceder a cada propiedad del objeto de manera dinámica
// y realizar acciones con sus valores, como mostrarlos en la consola.
// Ejemplo de salida:
// La propiedad actual es: nombre y su valor es = Delvis
// La propiedad actual es: edad y su valor es = 24
// La propiedad actual es: ciudad y su valor es = Css
// La propiedad actual es: telefono y su valor es = +584123456789


// for/in: esta pensado para recorrer objetos, pero se puede usar para obtener indices de un array.
let nombres = ["Gabriel", "Santiago", "Manuel", "Daniel", "Nestor", "Mauricio"];

for(let indice in nombres){
    console.log(`indice: ${indice} - valor: ${nombres[indice]}`);
}





// for/of: recorre los valores de un array

// Se utiliza para iterar sobre los valores de un array, permitiendo acceder a cada elemento directamente.
/* Su estructura es la siguiente:
for (let elemento of array) {
    // bloque de código a ejecutar
}
*/

let productos = ["Smartphone", "TV", "Microfono", "Estereo", "Tablet", "Teclado"];

for(let elemento of productos){
    console.log(`Tengo un ${elemento}`);
}



// for/of: con objetos no funciona, por lo que si queremos usarlo con objetos se debe forzar un array con los datos del objeto
// que necesitemos, ya sean las claves o los valores. usando Object.keys() u Object.values()
let persona2 = {
    nombre: "Alejandro",
    edad: 28,
    ciudad: "Barinas",
    telefono: "+584123456489"
};

for(let valor of Object.keys(persona2)){
    console.log(valor);
}

for(let valor of Object.values(persona2)){
    console.log(valor);
}



// while: recorre un bloque de código mientras se cumpla una condición

/* 
es un loop condicional que se utiliza para repetir un bloque de código mientras se cumpla una condición. La condición se evalúa al principio de cada iteración y, si es verdadera, se ejecuta el bloque de código, luego la condición se vuelve a evaluar,  y el loop continúa repitiéndose hasta que la condición sea falsa

*/

// Se utiliza para ejecutar un bloque de código mientras una condición sea verdadera.
/* 
La estructura del bucle while es la siguiente:
while (condición) {
     // bloque de código a ejecutar
} 
*/

let respuesta = "si";

while(respuesta === "si"){
    console.log("se ejecula la aplicacion...");
    respuesta = prompt("Desea continuar? si/no");
};




// do/while: también recorre un bloque de código mientras se cumpla una condición, pero lo ejecuta
// al menos una vez, sin importar si la condición se cumple o no.

/* 

La estructura del bucle do/while es la siguiente:
do {
    // bloque de código a ejecutar
} while (condición);

*/

do{
    console.log("se ejecula la aplicacion...");
    respuesta2 = prompt("Desea continuar? si/no");
}while(respuesta2 === "si");



// calculadora con bucle do/while
do{
    alert(`total: ${(+prompt("Ingrese el primer número:") + (+prompt("Ingrese el segundo número:")))}`);
    repetir = prompt("Desea realizar otra operación? si/no");
}while(repetir ===  "si");




// Ejercicio para realizar en casa

// 1- Crear un programa que permita al usuario ingresar un número, y luego muestre la tabla de multiplicar de ese número.

//2- Crear un programa que permita al usuario ingresar un número, y luego muestre la suma de todos los números del 1 al número ingresado.