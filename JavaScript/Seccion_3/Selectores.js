/*
    Los selectores permiten seleccionar elementos del DOM (elementos HTML) para manipularlos en una página web.
    los selectores comunes son:

    Seleccion individual
    .getElementById("id"): selecciona un elemento con un id específico.

    Seleccion multiple
    .getElementsByName("name"): selecciona todos los elementos que contengan un name especifico.
    .getElementsByClassName("class"): selecciona todos los elementos con una clase específica.
    .getElementsByTagName("div"): selecciona todos los elementos con un nombre de etiqueta específico.



    Sintaxis:
    "document" es el objeto principal del DOM(Modelo de Objeto del Documento) que representa el 
    documento HTML actual en una página.


    Seleccion individual
    document.getElementById("id");

    Seleccion multiple
    document.getElementsByName("name");
    document.getElementsByClassName("class");
    document.getElementsByTagName("div");


    Los selectores se emplean junto a metodos para realizar diferentes acciones.


    Tambien se puede usar el selector querySelector() para seleccionar elementos del DOM.
    y querySelectorAll() para seleccionar todos los elementos que cumplan con el selector especificado.

    Sintaxis:
    document.querySelector(#id); o document.querySelector(".class"); o document.querySelector("div");
    document.querySelectorAll("div"); o document.querySelectorAll(".class");
*/


// Seleccionamos y guardamos el elemento con el id "titulo" en la variable "titulo".

const titulo = document.getElementById("titulo");





//Medotos usados con selectores:


// elemento.getAttribute: obtiene el(los) valor(es) del atributo indicado en el elemento seleccionado.
const claseDelelemento = titulo.getAttribute("class");
// alert(`El valor de la propiedad es: ${claseDelelemento}`);




// elemento.setAttribute: establece un atributo con su valor en el elemento seleccionado.
titulo.setAttribute("style", "font-size: 50px; color: blue;");




// elemento.innerHTML: obtiene o establece el contenido HTML de un elemento seleccionado.
const caja = document.getElementById("caja-prueba");

// Esto reemplaza el contenido de la caja.
// caja.innerHTML = "<h2>Titulo añadido con JS</h2>";

// Esto agrega el contenido a la caja.
caja.innerHTML += "<h2>Titulo añadido con JS</h2>";





// elemento.innerText: obtiene o establece el contenido de texto de un elemento seleccionado.
titulo.innerText = "Editado con JS";




// elemento.style: permite acceder y manipular las propiedades CSS del elemento seleccionado.
titulo.style.color = "red";
titulo.style.backgroundColor = "black";
titulo.style.borderRadius = "20px";
titulo.style.textAlign = "center";
titulo.style.paddingBlock = "20px";





// elemento.classList: permite agregar(add), eliminar(remove), verificar(contains), 
// alternar(toggle) y reemplazar(replace) clases de un elemento seleccionado.

const parrafo1 = document.getElementById("parrafo-1");
const parrafo2 = document.getElementById("parrafo-2");
const parrafo3 = document.getElementById("parrafo-3");
const parrafo4 = document.getElementById("parrafo-4");
const parrafo5 = document.getElementById("parrafo-5");


// Verificamos las clases de los elementos seleccionados.
// constaint retorna un valor booleano, es decir, true si el elemento tiene la clase indicada y false si no la tiene.
console.log(parrafo1.classList.contains("text-lg")); // true
console.log(parrafo2.classList.contains("font-['Arial']")); // true
console.log(parrafo3.classList.contains("font-bold")); // true
console.log(parrafo4.classList.contains("text-green-600")); // false, por que es text-green-700



// Eliminamos la clase "text-green-700" de los elementos seleccionados.
parrafo1.classList.remove("text-green-700");
parrafo2.classList.remove("text-green-700");
parrafo3.classList.remove("text-green-700");
parrafo4.classList.remove("text-green-700");
parrafo5.classList.remove("text-green-700");



// Agregamos la clase color a los textos seleccionados.
parrafo1.classList.add("text-blue-700");
parrafo2.classList.add("text-red-700");
parrafo3.classList.add("text-yellow-700");
parrafo4.classList.add("text-cyan-700");
parrafo5.classList.add("text-purple-700");



// createElement: crea un nuevo/nodo elemento HTML con el nombre de la etiqueta especificada.

// Creamos 2 elementos de tipo parrafo
const nuevoParrafo = document.createElement("p");
const nuevoParrafo2 = document.createElement("p");

// Creamos un elemento de tipo img
const nuevaImagen = document.createElement("img");

// Cargamos los elementos/nodos con contenido.
nuevoParrafo.innerText = "Este es un nuevo parrafo creado con JS.";
nuevoParrafo2.innerText = "Este es otro nuevo parrafo creado con JS.";
nuevaImagen.src = "https://lexpin.online/static/media/logo.4d987ab805c18e9db0c7.png";


// Damos estilos a los elementos/nodos agregando clase de tailwind (en este caso).
nuevoParrafo.classList.add("text-lg", "text-slate-600", "font-bold");
nuevoParrafo2.classList.add("text-lg", "text-rose-700", "font-bold");
nuevaImagen.classList.add("w-[350px]", "bg-gray-200", "rounded-md", "p-8");





// appendChild: agrega un elemento hijo/nodo al final del elemento seleccionado.
caja.appendChild(nuevoParrafo);
caja.appendChild(nuevoParrafo2);
caja.appendChild(nuevaImagen);






// Ejercicios para realizar en casa:

// 1- Crear un contenedor con un id "contenedor" y agregarlo al body.

// 2- Crear un nuevo parrafo con el texto "TuNombre TuApellido - Grupo XVI - Lexpin",
//    darle estilos con CSS y agregarlo al contenedor creado en el punto 1.

// 3- Crear una nueva imagen, asignarle un src con una imagen de tu elección, dale estilos con Tailwind
//    y agregarla al contenedor creado en el punto 1.

// 4- Edita los estilos del parrafo creado en el punto 2 con JavaScript y el metodo classList.

// 5- Crea un alert que indique si un elemento tiene una clase especifica o no.