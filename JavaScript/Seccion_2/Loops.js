/*
    Los bucles pueden ejecutar un bloque de código varias veces. 
    JavaScript admite diferentes tipos de bucles.

    1. for - recorre un bloque de código varias veces
    2. for/in - recorre las propiedades de un objeto
    3. for/of - recorre los valores de un array
    4. while - recorre un bloque de código mientras se cumpla una condición
    5. do/while - también recorre un bloque de código mientras se cumpla una condición
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




// Aporte de Luis Tarifa

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
let persona = {
    nombre: "Samuel",
    edad: 20,
    ciudad: "Santiago",
    telefono: "+56934887123",
    email:"samuel@gmail.com"
};

for (let clave in persona){
    console.log(`La propiedad actual es: ${clave} y su valor es = ${persona[clave]}`);
}


// for/in: esta pensado para recorrer objetos, pero se puede usar para obtener indices de un array.
let nombres = ["Gabriel", "Roger", "Alexnis", "Daniel", "Nestor", "Douglas"];

for(let indice in nombres){
    console.log(`indice: ${indice} - valor: ${nombres[indice]}`);
}





// for/of: recorre los valores de un array
let productos = ["Celular", "TV", "Microfono", "Estereo", "Proyector", "Teclado"];

for(let elemento of productos){
    console.log(`Tengo un ${elemento}`);
}



// for/of: con objetos no funciona, por lo que se debe forzar un array con los datos del objeto
// que necesitemos, ya sean las claves o los valores. usando Object.keys() u Object.values()
let persona2 = {
    nombre: "Daniel",
    edad: 25,
    ciudad: "Tachira",
    telefono: "+584123456789"
};

for(let valor of Object.keys(persona2)){
    console.log(valor);
}

for(let valor of Object.values(persona2)){
    console.log(valor);
}



// while: recorre un bloque de código mientras se cumpla una condición

let respuesta = "si";

while(respuesta === "si"){
    console.log("se ejecula la aplicacion...");
    respuesta = prompt("Desea continuar? si/no");
};




// do/while: también recorre un bloque de código mientras se cumpla una condición, pero lo ejecuta
// al menos una vez, sin importar si la condición se cumple o no.


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

// 2- Crea un programa que permita ver todos los productos (del ejercicio de objetos.js)
// Primero debe mostrar el departamento (tecnologia, hogar, alimentos, salud, ropa)
// Luego debe mostrar las categorias y permitir elegir una
// Luego mostras las subcategorias y permitir elegir una
// Por ultimo mostrar todos los productos de esa subcategoria.
// Al finalizar debe preguntar si desea ver otro producto, si la respuesta es si, debe volver a mostrar el menu, 
// si la respuesta es no, debe terminar el programa.