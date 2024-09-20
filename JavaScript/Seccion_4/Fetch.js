/*
    ¿Que es una API?
    Una API (Interfaz de Programación de Aplicaciones) es un conjunto de reglas y definiciones que permiten 
    que diferentes aplicaciones se comuniquen entre sí. 
    
    Las API permiten que la comunicacion entre apps sin necesidad de que los usuarios sepan cómo están programadas.


    ¿Que es JSON?
    JSON (JavaScript Object Notation - Notación de Objetos de JavaScript) es un formato ligero de intercambio de datos
    que es fácil de leer y escribir para los humanos y fácil de analizar y generar para las máquinas.

    JSON es un formato de texto que es completamente independiente del lenguaje pero utiliza convenciones que son
    familiares para los programadores de la familia de lenguajes C, incluidos C, C++, C#, Java, JavaScript, TypeScript, 
    Perl, Python y muchos otros.




    ¿Que es Fetch?
    Fetch es una API de JavaScript que proporciona una interfaz para acceder y manipular partes del canal HTTP, como
    peticiones y respuestas. También provee un método global fetch() que proporciona una forma fácil y lógica de obtener
    recursos de forma asíncrona por la red.

    Metodos de Fetch():
    - fetch() : Permite hacer peticiones a un servidor.
        * Recibe como parametro la URL a la que se va a hacer la petición.
        * Devuelve una promesa que resuelve a la respuesta de la petición.
        * La promesa sera retornada como cumplida si la petición fue exitosa o como rechazada si hubo un error.

    - then() : Permite encadenar promesas.
        * Recibe como parametro una función callback que se ejecutará cuando la promesa se cumpla.
    
    - catch() : Permite capturar errores.
        * Recibe como parametro una función callback que se ejecutará cuando la promesa sea rechazada.

    - finally() : Permite ejecutar código despues de que la promesa se haya cumplido o rechazado.
        * No recibe parametros.
*/


// Ejemplo de Fetch con la api de rick and morty

function consumirAPI(){
    const respuesta = fetch('https://rickandmortyapi.com/api/character');

    console.log(respuesta);

    respuesta
    // fetch devuelve una promesa, sin embargo los datos que queremos se encuentran en la propiedad .json() de la respuesta.
    // por lo que necesitamos encadenar otra promesa con el metodo .then() para obtener los datos
    // y convertirlos a un objeto de JavaScript.
        .then( res => res.json())
        .then( res => {
            const contenedor = document.getElementById("personajes");
            const personajes = res.results;

            personajes.map(
                (personaje)=>{
                    let divPersonaje = document.createElement("div");
                    divPersonaje.classList.add(
                        "flex",
                        "w-[600px]",
                        "h-[270px]",
                        "rounded-xl",
                        "bg-[#3D3F44]",
                        "gap-3"
                    );

                    divPersonaje.innerHTML = `
                        <img class="rounded-xl" src="${personaje.image}" alt="${personaje.name}">
                        <div class="flex flex-col">
                            <h2 class="font-bold text-white text-3xl hover:text-[#FE9900]">${personaje.name}</h2>
                            <p class="font-bold text-white mb-10 hover:text-[#FE9900] before:content-['---'] before:text-[transparent] before:text-[8px] before:rounded-full  ${personaje.status === "Alive" ? "before:bg-green-500" : personaje.status === "Dead" ? "before:bg-red-500" : "before:bg-gray-400"}"> ${personaje.status} - ${personaje.species}</p>
                            <p class="font-bold text-stone-400">Ultima ubicacion conocida:</p>
                            <p class="font-bold text-white hover:text-[#FE9900]">${personaje.location.name}</p>
                            <p class="font-bold text-stone-400 mt-4">Origen:</p>
                            <p class="font-bold text-white hover:text-[#FE9900]">${personaje.origin.name}</p>
                        </div>
                    `;

                    contenedor.appendChild(divPersonaje);
                }
            );
        })
    .catch( error => console.log(error));
};


// Seleccionamos el boton que ejecutara la funcion
document.getElementById("btn-buscar").addEventListener("click", consumirAPI);