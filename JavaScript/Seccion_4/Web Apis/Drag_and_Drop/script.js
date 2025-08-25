/*
Archivo 38

    Una web API es una interfaz que permite a los desarrolladores interactuar con las funcionalidades del navegador web o del sistema operativo a través de JavaScript.

    ¿Que es la Web API de Drag & Drop?
    Es una API que nos permite mover elementos de una parte de la pantalla a otra, es decir, arrastrar y soltar (drag & drop).

    ¿Como funciona?
    La API de drag & drop se compone de 3 eventos principales:

    1. dragstart: Se dispara cuando el usuario comienza a arrastrar un elemento.
    2. drag: Se dispara cuando el usuario esta arrastrando un elemento.
    3. dragend: Se dispara cuando el usuario termina de arrastrar un elemento.
    
    ¿Que es un elemento dragable?
    Es un elemento que se puede arrastrar de un lugar a otro.

    ¿Como se hace un elemento dragable?
    Para hacer un elemento dragable se debe agregar el atributo draggable="true" al elemento que se quiere arrastrar.

    También emplea los siguientes eventos:
    - dragenter: Se dispara cuando un elemento arrastrado entra en un elemento válido.
    - dragover: Se dispara cuando un elemento arrastrado se mueve sobre un elemento válido.
    - dragleave: Se dispara cuando un elemento arrastrado sale de un elemento válido.
    - drop: Se dispara cuando un elemento arrastrado se suelta en un elemento válido.
*/

const personajes = Array.from(document.getElementsByClassName('caja'));
let personajeArrastrado;


// Iteramos sobre el array de personajes para agregarles los eventos de drag & drop (dragstart y dragend)

personajes.map(personaje => {
    // Añadir el evento dragstart a cada personaje
    personaje.addEventListener('dragstart', () => {
        personajeArrastrado = personaje;
        // personajeArrastrado.style.backgroundColor = 'green';

        console.log("Se comenzó a arrastrar el personaje")
        console.log(personajeArrastrado);
    });


    // Añadir el evento dragend a cada personaje
    personaje.addEventListener('dragend', () => {
        console.log("Se terminó de arrastrar el personaje");
        personajeArrastrado = null;
        // personajeArrastrado.style.backgroundColor = '';
    });
});



// Selección de las zonas donde se pueden soltar los personajes
const zonas = [document.getElementById('zonaA'), document.getElementById('zonaB'), document.getElementById('zonaC')];

// Iteramos sobre el array de zonas para agregarles los eventos de drag & drop (dragenter, dragover, dragleave y drop)
zonas.forEach(zona => {
    // Añadir el evento dragenter a cada zona
    // zona.addEventListener('dragenter', e => {
    //     e.preventDefault();
    //     if(e.target.id === 'zonaA') {
    //         console.log("Se entró en la zona A");
    //     } else if(e.target.id === 'zonaB') {
    //         console.log("Se entró en la zona B");
    //     } else if(e.target.id === 'zonaC') {
    //         console.log("Se entró en la zona C");
    //     }
    // });

    // Añadir el evento dragover a cada zona
    zona.addEventListener('dragover', e => {
        e.preventDefault();
        
        if(e.target.id === 'zonaA') {
            console.log("Se está moviendo sobre la zona A");
        } else if(e.target.id === 'zonaB') {
            console.log("Se está moviendo sobre la zona B");
        } else if(e.target.id === 'zonaC') {
            console.log("Se está moviendo sobre la zona C");
        }
    });

    // Añadir el evento dragleave a cada zona
    // zona.addEventListener('dragleave', (e) => {
    //     if(e.target.id === 'zonaA') {
    //         console.log("Se salió de la zona A");
    //     } else if(e.target.id === 'zonaB') {
    //         console.log("Se salió de la zona B");
    //     } else if(e.target.id === 'zonaC') {
    //         console.log("Se salió de la zona C");
    //     }
    // });

    // Añadir el evento drop a cada zona
    zona.addEventListener('drop', (e) => {
        console.log("Se soltó el personaje en la zona destino");
        
        if(e.target.id === 'zonaA') {
            zona.appendChild(personajeArrastrado);
        }else if(e.target.id === 'zonaB') {
            if(personajeArrastrado.id === "Peach") {
                alert("No puedes soltar a Peach en la zona B");
            }else{
                zona.appendChild(personajeArrastrado);
            }
        } else if(e.target.id === 'zonaC') {
            if(personajeArrastrado.id === "Peach") {
                zona.appendChild(personajeArrastrado);
            }else{
                console.log(personajeArrastrado)
                alert(`No puedes soltar a ${personajeArrastrado.id} en la zona C`);
            };
        }
    });
});