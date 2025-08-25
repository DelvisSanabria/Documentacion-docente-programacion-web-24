/*
Archivo 17

    Funcion Constructora: 
    Estas funciones permiten la creacion de nuevos objetos en base de una estructura predefinida(plantilla)

    las funciones constructoras son la forma más antigua de crear objetos en JavaScript. 
    Se definen utilizando la palabra clave "function" seguida del nombre de la función.

    Una vez definidas se inicializan con la palabra clave "new" para crear un nuevo objeto o instancia. 
    Dentro de la función, se asignan valores a las propiedades del objeto instanciado utilizando "this".

    ¿Que es una instancia?
    Una instancia es un objeto que se crea a partir de una función constructora o clase, en pocas palabras es un elemento creado
    en base a un molde.

    Es una convencion que el nombre de las funciones constructoras comiencen con mayuscula.
    ¿Por que?, para diferenciarlas de las funciones comunes y variables.
*/

// Ejemplo de una funcion constructora

function Usuario(nombre, apellido, correo, clave){
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.clave = clave;
};

const usuario1 = new Usuario("Delvis", "Sanabria", "delvisdev@gmail.com", "delvis123");
const santiago = new Usuario("Santiago", "Gonzalez", "santiago@gmail.com", "santiago123");

// console.log(usuario1);
// console.log(santiago);





// Ejemplo 2
function Producto(nombre, precio, stock, descripcion, imagen, marca){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.marca = marca;
};


const tv = new Producto("TV", 1000, 10, 'TV 4k de 43"', "http://imagenes.com/tv.jpg", "LG");
const laptop = new Producto("Laptop", 800, 5, 'Laptop de 15"', "http://imagenes.com/laptop.jpg", "HP");
const celular = new Producto("Celular", 500, 20, 'Galaxy S24 Pro', "http://imagenes.com/celular.jpg", "Samsung");
const tablet = new Producto("Tablet", 300, 15, 'Galaxy Tab 5', "http://imagenes.com/tablet.jpg", "Samsung");



// console.log(tv);
// console.log(laptop);
// console.log(celular);
// console.log(tablet);




// Ejercicio realizado en vivo (durante la clase)
// Crea la logica de un register que almacene la informacion de los usuarios en un array de objetos que a su vez sean instancia
// de una funcion constructora llama "Cliente".


function Clientes(nombre, apellido, correo, clave){
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.clave = clave;
};

const listaDeClientes = [];


do{
    const cliente = new Clientes(
        prompt("Ingresa tu nombre"), 
        prompt("Ingresa tu apellido"), 
        prompt("Ingresa tu correo"), 
        prompt("Ingresa tu clave")
    );

    listaDeClientes.push(cliente);
    respuesta = prompt("Desea agregar otro cliente? si/no");
}while(respuesta === "si");


alert("Se finalizo el registro de clientes");
console.log(listaDeClientes);