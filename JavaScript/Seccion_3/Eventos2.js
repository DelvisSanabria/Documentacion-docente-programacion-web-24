//Archivo 22.2

// Seleccionamos los elementos del DOM que vamos a utilizar


const parrafo = document.getElementById('parrafo');
const boton = document.getElementById('boton');
const boton2 = document.getElementById('boton2');


parrafo.addEventListener('mouseover', (e) => {
    e.target.innerText = 'Se activo el evento mouseover';
});

parrafo.addEventListener('mouseout', (e) => {
    e.target.innerText = 'Se activo el evento mouseout';
});


boton.addEventListener('click', () => {
    let parrafoActualizado = document.getElementById('parrafo');

    if(parrafoActualizado.innerText !== "Hola, estas aprendiendo JavaScript."){
        document.getElementById('parrafo').innerText =  "Hola, estas aprendiendo JavaScript."
    }else{
        alert("El parrafo ya tiene su valor original");
    }
});



// Metodo con contains, add y remove

/* 
classList es una propiedad que nos permite acceder a las clases de un elemento HTML.

contains: verifica si un elemento tiene una clase especifica y devuelve true o false.
add: agrega una clase a un elemento.
remove: elimina una clase de un elemento.

*/
boton2.addEventListener('click', () => {
     let body = document.body;
     if(body.classList.contains('from-green-400') && body.classList.contains('to-green-900')){
         body.classList.remove('from-green-400');
         body.classList.remove('to-green-900');
         body.classList.add('from-yellow-400');
         body.classList.add('to-yellow-900');
     }else{
        body.classList.remove('from-yellow-400');
         body.classList.remove('to-yellow-900');
         body.classList.add('from-green-400');
         body.classList.add('to-green-900');
     }
});




// Metodo con contains y replace

/* 
replace: reemplaza una clase por otra en un elemento.
*/

boton2.addEventListener('click', () => {
    let body = document.body;
    if(body.classList.contains('from-green-400') && body.classList.contains('to-green-900')){
         body.classList.replace('from-green-400', 'from-yellow-400');
         body.classList.replace('to-green-900', 'to-yellow-900');
     }else{
         body.classList.replace('from-yellow-400', 'from-green-400');
         body.classList.replace('to-yellow-900', 'to-green-900');
     }
});



// Metodo con toggle

/* toggle: agrega o elimina una clase en un elemento */

boton2.addEventListener('click', () => {
    document.body.classList.toggle('from-green-400');
    document.body.classList.toggle('to-green-900');
});