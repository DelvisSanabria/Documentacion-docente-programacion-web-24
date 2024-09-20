/*
    Crea un formulario basico que solicite nombre, apellido y edad, tambien debe contar con un boton(basico) 
    para registrar. 
    
    - Crea una funcion que obtenga los datos del formulario y cree nuevas instancias 
    de una clase llamada "Usuarios" y las aloje en un array llamado "instancias".

    - Tambien crea un boto pn queermita ver los usuarios registrados en la pagina web.
*/

// Primero definimos la clase "Usuarios" con un constructor que recibe los parametros "nombre", "apellido" y "edad".

class Usuario{
    constructor(nombre,apellido,edad){
        this.nombre= nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
}

let instancias = [];
let i = 0;


const botonEnviar = document.getElementById("enviar");
const botonVerRegistros = document.getElementById("verRegistros");
const divRegistro = document.getElementById("registros");

function crearUsuario(){
    i++;
    instancias[`usuario-${i}`] = new Usuario(
        document.getElementById("nombre").value,
        document.getElementById("apellido").value,
        document.getElementById("edad").value
    );
    console.log(instancias);
}

function mostrarUsuarios(){
    divRegistro.innerHTML = "<h2 class='font-bolt text-2xl text-white text-center bg-black/50 px-3 py-2 mb-6 rounded-full'>Registros</h2>";
    for (let usuario in instancias) {
        let parrafo = document.createElement("p");
        parrafo.classList.add("text-white", "bg-black/50", "rounded-full", "p-2", "text-center");
        parrafo.innerText = `Nombre: ${instancias[usuario].nombre} | Apellido: ${instancias[usuario].apellido} | Edad: ${instancias[usuario].edad}`;
        divRegistro.appendChild(parrafo);
    }
};

botonEnviar.addEventListener("click", crearUsuario);
botonVerRegistros.addEventListener("click", mostrarUsuarios);