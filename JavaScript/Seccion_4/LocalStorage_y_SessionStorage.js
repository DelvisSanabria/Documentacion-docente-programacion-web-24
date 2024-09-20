/*
    ¿Que es LocalStorage?
    localStorage es una forma de almacenamiento que permite a una aplicación web guardar datos de 
    manera PERSISTENTE en el navegador del usuario. 
    
    Los datos almacenados en localStorage persisten incluso después de que el usuario cierre la ventana del navegador 
    o se apague la computadora.


    Conceptos Importantes
    
    - Límite de Almacenamiento: localStorage proporciona aproximadamente 5MB de almacenamiento por dominio. 
    Exceder este límite puede lanzar excepciones de cuota de almacenamiento.

    - Alcance de Dominio: Los datos almacenados en localStorage son específicos para un dominio y un protocolo. 
    Por ejemplo, los datos almacenados en http://mipagina.com NO serán accesibles desde https://mipagina.com debido
    a que el protocolo no es el mismo.


    Medotos Importantes

    - setItem(key, value): Agrega un nuevo par clave-valor al almacenamiento local.
        NOTA: Es importante saber que si se almacena una variable con el mismo nombre 2 o mas veces,
        se sobreescribira el valor anterior, y perderemos la informacion previa de manera permanente.
    - getItem(key): Obtiene el valor asociado con la clave especificada.
    - removeItem(key): Elimina el par clave-valor asociado con la clave especificada.
    - clear(): Elimina todos los pares clave-valor del almacenamiento local.
*/


// Guardar datos

// Ejemplo 1: Guardar un valor simple
localStorage.setItem("Nombre", "Diego");


// Ejemplo 2: Obtener un valor simple
let nombreUsuario = localStorage.getItem("Nombre");

console.log(nombreUsuario); // Diego

// Ejemplo 3: Eliminar un valor simple
localStorage.removeItem("Nombre");



// Guardar un objeto
let persona = {
    nombre: "Diego",
    edad: 28,
    correo: "diego@gmail.com",
    telefono: "1234567890",
    direccion: "Calle 123",
    ciudad: "Bogota",
    pais: "Colombia",
    online: true,
    profesion: "Desarrollador"
};

// Para convertir un objeto a JSON, usamos JSON.stringify(objeto).
localStorage.setItem("Persona", JSON.stringify(persona));


// Para convertir un JSON a un objeto, usamos JSON.parse(json).
let personaGuardada = JSON.parse(localStorage.getItem("Persona"));

console.table(personaGuardada);



// Guardar un arreglo
let frutas = ["Manzana", "Pera", "Banano", "Fresa", "Uva"];

// Para convertir un arreglo a JSON, usamos JSON.stringify(arreglo).
localStorage.setItem("Frutas", JSON.stringify(frutas));

// Para convertir un JSON a un arreglo, usamos JSON.parse(json).
let frutasGuardadas = JSON.parse(localStorage.getItem("Frutas"));



/*
    Hasta ahora hemos Almacenado y Obtenido datos en localStorage.
    Ahora vamos a aprender como limpiar el almacenamiento para liberar espacio
    y evitar brechas de seguridad. 
*/
// Vaciar el localStorage
// localStorage.clear();






/*
    ¿Que es sessionStorage?
    sessionStorage es similar a localStorage en términos de API y uso, 
    pero con una diferencia fundamental: 

    los datos almacenados en sessionStorage tienen un tiempo de vida LIMITADO
    y están disponibles solo durante la sesión del navegador. 
    Cuando el usuario cierra la ventana o pestaña del navegador, los datos 
    almacenados en sessionStorage se eliminan.

    Los metodos de sessionStorage son los mismos que localStorage.
*/


// Guardar datos
sessionStorage.setItem("Nombre", "Diego 2");

// Obtener datos
let nombreSession = sessionStorage.getItem("Nombre");

console.log(nombreSession); // Diego 2

// Eliminar datos
sessionStorage.removeItem("Nombre");

// Vaciar el sessionStorage
// sessionStorage.clear();






// Ejercicio para realizar en clase:

/*
    Elabora un login (sin registro) que permita en base a 3 usuario almacenados en un arreglo de objetos,
    validar si el usuario y la contraseña son correctos.

    posteriormente, si el usuario y la contraseña son correctos, almacenar el usuario en el localStorage
    para que al recargar la pagina, el usuario siga logueado y se muestre su nombre en el navbar.

*/



// Arreglo de usuarios
let usuarios = [
    {
        usuario: "diego",
        clave: "dar321"
    },
    {
        usuario: "victor",
        clave: "vic123"
    },
    {
        usuario: "daniel",
        clave: "dan789"
    },
    {
        usuario: "admin",
        clave: "admin"
    }
];



// Elementos del DOM

// boton de login
const btnLogin = document.getElementById("btnLogin");

// Span donde se mostrara el nombre del usuario y el contenedor del formulario
const spanUsuario = document.getElementById("usuarioNombre");
const contenedor = document.getElementById("contenedor");


// Almacenamos el nombre del usuario en una variable
let usuarioLogueado = localStorage.getItem("Usuario") || "Usuario";
spanUsuario.innerText = usuarioLogueado;


btnLogin.addEventListener("click", () => {
    // alert(document.getElementById("usuario").value.trim().toLowerCase());
    // alert(document.getElementById("clave").value);

    // Buscar el usuario en el arreglo
    let usuarioEncontrado = usuarios.find( (user) => {
        return user.usuario === document.getElementById("usuario").value.trim().toLowerCase() && user.clave === document.getElementById("clave").value;
    });

    // Si el usuario es correcto
    if (usuarioEncontrado) {
        // Guardar el usuario en el localStorage
        localStorage.setItem("Usuario", usuarioEncontrado.usuario);

        // Mostrar el nombre del usuario en el navbar
        spanUsuario.innerText = usuarioEncontrado.usuario;

        contenedor.innerHTML = `
            <h2 class="font-bold text-3xl text-center mb-6">Perfil de ${usuarioEncontrado.usuario}</h2>
            <button class="rounded-full font-bold px-4 py-2 w-[150px] h-[40px] bg-gray-400 hover:bg-gray-500" id="btnCerrar">Cerrar Sesion</button>
        `;

        const btnCerrar = document.getElementById("btnCerrar");
        
        btnCerrar.addEventListener("click", () => {
            // Eliminar el usuario del localStorage
            localStorage.removeItem("Usuario");
        
            // Recargar la pagina
            location.reload();

            // Ejemplo redireccionar a otra pagina
            // window.location.href = "https://www.google.com";
        });
    }else{
        alert("Usuario o contraseña incorrectos");
    }
});

