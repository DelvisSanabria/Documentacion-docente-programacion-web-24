/* 
//Archivo 24

    ¿Qué Son Expresiones Regulares?
    Las expresiones regulares(también conocida como regexp o regex) son una secuencia de caracteres que 
    forman un patrón de búsqueda, y se utilizan para hacer comparaciones con texto.
    Son una herramienta poderosa para manipular y validar texto, y se pueden utilizar en conjunto 
    con métodos de JavaScript como .match(), .replace() etc..

    Se utilizan en muchos lenguajes de programación, incluyendo JavaScript, para verificar si una cadena de 
    texto cumple con un determinado patrón o para reemplazar texto por un patrón determinado. 
    Las expresiones regulares están escritas entre barras(slash) / y pueden incluir una combinación de caracteres 
    literales y caracteres especiales que representan un conjunto de caracteres posibles. 
    
    Por ejemplo, la expresión regular /\d{3}-\d{3}-\d{2}-\d{2}/ busca un número de celular 
    en formato 111-111-11-11.

    Se pueden usar en una gran variedad de tareas, como validación de formularios, extracción de información 
    de un párrafo etc...


    Sintaxis:
    • const regexp = /.e.t./i;
    //                 texto
    //                 pesto
    //                 menta    
    //                 1e1t1

    Coincidencias Basicas
        .       - Cualquier Caracter, excepto nueva linea
        \       - Indica que el siguiente caracter se debe tratar de manera especial o "escaparse".
        \d      - Cualquier Digitos (0-9)
        \D      - No es un Digito (0-9)
        \w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
        \W      - No es un Caracter de Palabra.
        \s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
        \S      - No es un Espacio, Tab o nueva linea.

    Limites:
        \b      - Limite de Palabra
        \B      - No es un Limite de Palabra
        ^       - Inicio de una cadena de texto
        $       - Final de una cadena de texto

    Cuantificadores:
        *       - Coincide con 0 o más ocurrencias del patrón anterior.
        +       - Coincide con 1 o más ocurrencias del patrón anterior.
        ?       - Coincide con 0 o 1 ocurrencia del patrón anterior.
        {3}     - Numero Exacto
        {3,4}   - Rango de Numeros (Minimo, Maximo)
        {N, }   - desde N hasta el infinito

    Conjuntos de Caracteres:
        []      - Caracteres dentro de los brackets
        [^ ]    - Caracteres que NO ESTAN dentro de los brackets

    Grupos:
        ( )     - Grupo
        |       - Uno u otro


    probar en: http://regexr.com/77g8v

*/


let parrafo = 
`Con las expresiones regulares podemos realizar busquedas de secuencias o patrones de caracteres,
un ejemplo de su uso es al detectar palabras ofensivas en un chat, o al obtener todos los numeros
telefonicos que coincidan con UN patron establecido.

Ejemplo: 

Daniel Moran	
daniel_m@hotmail.com
934 123 45 67
www.dmoram.com

Migel Soto
934-234-56-78
miguel123@outlook.com
https://www.miguel.com.cl

Camila Duran
412 345 67 89
www.camila.shop
cami-duran@gmail.com`;


//Definiendo expresion regular 
// (g= buscar todas las coincidencias, i= sin distincion de mayusculas, m= busca en todas las lineas)
let miRegex = /un/ig;
const numeroVer1 = /\d\d\d\/\d\d\d\/\d\d\/\d\d/ig;
const numeroVer2 = /\d{3}-\d{3}-\d{2}-\d{2}/gi
const urlBasico = /https:\/\/w{3}\.miguel\.com/gi
const urlCompleto = /https:\/\/w{3}\.\w{4,}\.com\.\w{2,}/gi

//realizando busqueda

// .match(patron) buscas coincidencias entre una expresión regular y el texto que está siendo evaluado. 
// Devuelve un arreglo que contiene las coincidencias encontradas, 
// o null si no se encontraron coincidencias.

// patron.test(cadena) - busca una coincidencia en una cadena de texto. Devuelve true o false.
// replace(patron, reemplazo) - Reemplaza una coincidencia con una cadena de texto.

const coincidencias = parrafo.match(miRegex);
const coincidencias2 = parrafo.match(numeroVer1);
const coincidencias3 = parrafo.match(numeroVer2);
const coincidencias4 = parrafo.match(urlBasico);
const coincidencias5 = parrafo.match(urlCompleto);



// Desde aqui se crea la logica para manejar el formulario del archivo "regex.html"

// Obtenemos los elementos del formulario
const btnRegistro = document.getElementById('registrar');
const inputNombre = document.getElementById('nombre');
const inputCorreo = document.getElementById('correo');
const inputNacimiento = document.getElementById('nacimiento');
const inputTelefono = document.getElementById('telefono');
const inputClave = document.getElementById('clave');


// Validamos cada campo del formulario para ello creamos una funcion para cada campo

// Funciones de validacion
function validarNombre(nombre){
    const regex = /^[a-zA-ZäëïöüÄËÏÖÜ]{3,20}$/;
    const coincide = regex.test(nombre);
    
    if(coincide){
        document.getElementById('nombre').classList.remove('border-rose-500', 'border-2');
        document.getElementById('nombre').classList.add('border-green-500', 'border-2');
    }else{
        document.getElementById('nombre').classList.remove('border-green-500', 'border-2');
        document.getElementById('nombre').classList.add('border-rose-500', 'border-2');
    };
}


function validarEmail(email){
    const regex = /^\w{3,20}@[a-zA-Z]{3,15}\.[a-zA-Z]{2,15}$/;
    const coincide = regex.test(email);
    
    if(coincide){
        document.getElementById('correo').classList.remove('border-rose-500', 'border-2');
        document.getElementById('correo').classList.add('border-green-500', 'border-2');
    }else{
        document.getElementById('correo').classList.remove('border-green-500', 'border-2');
        document.getElementById('correo').classList.add('border-rose-500', 'border-2');
    };
}

function validarNacimiento(fecha){
    const regex = /^(202[0-4]|[0-1][0-9]{2}|[0-9]{1,2})-(0[1-9]|1[0-2]| [1-2]?[0-9]|3[0-1])-(0[1-9]|[1-2]?[0-9]|3[0-1])$/
    const coincide = regex.test(fecha);
    
    if(coincide){
        document.getElementById('nacimiento').classList.remove('border-rose-500', 'border-2');
        document.getElementById('nacimiento').classList.add('border-green-500', 'border-2');
    }else{
        document.getElementById('nacimiento').classList.remove('border-green-500', 'border-2');
        document.getElementById('nacimiento').classList.add('border-rose-500', 'border-2');
    };
}

function validarTelefono(telefono){
    // Actualizar esta regex y adaptarla a el proposito indicado.
    const regex = /^[a-zA-ZäëïöüÄËÏÖÜ]{3,20}$/;
    /* una solucion seria:
    const regex = /^\d{3}[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
    1. ^ - Inicio de la cadena.
    2. \d{3} - Dos cifras seguidas.
    3. [-\s]? - Un guion o espacio opcional.
    4. \d{3} - Tres cifras seguidas.
    5. [-\s]? - Un guion o espacio opcional.
    6. \d{2} - Dos cifras seguidas.
    7. [-\s]? - Un guion o espacio opcional.
    8. \d{2} - Dos cifras seguidas.
    9. $ - Fin de la cadena.    
    */
    const coincide = regex.test(telefono);
    
    if(coincide){
        document.getElementById('telefono').classList.remove('border-rose-500', 'border-2');
        document.getElementById('telefono').classList.add('border-green-500', 'border-2');
    }else{
        document.getElementById('telefono').classList.remove('border-green-500', 'border-2');
        document.getElementById('telefono').classList.add('border-rose-500', 'border-2');
    };
}

function validarClave(clave){
    // Actualizar esta regex y adaptarla a el proposito indicado.
    const regex = /^[a-zA-ZäëïöüÄËÏÖÜ]{3,20}$/;
    /* una solucion seria:
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    1. ^ - Inicio de la cadena.
    2. (?=.*[a-z]) - Al menos una letra minúscula.
    3. (?=.*[A-Z]) - Al menos una letra mayúscula.
    4. (?=.*\d) - Al menos un dígito.
    5. (?=.*[@$!%*?&]) - Al menos un carácter especial. (@, $, !, %, *, ?, &).
    6. [A-Za-z\d@$!%*?&]{8,} - Al menos 8 caracteres que pueden ser letras (mayúsculas y minúsculas), dígitos o caracteres especiales.
    7. $ - Fin de la cadena.
    */
    const coincide = regex.test(clave);
    
    if(coincide){
        document.getElementById('clave').classList.remove('border-rose-500', 'border-2');
        document.getElementById('clave').classList.add('border-green-500', 'border-2');
    }else{
        document.getElementById('clave').classList.remove('border-green-500', 'border-2');
        document.getElementById('clave').classList.add('border-rose-500', 'border-2');
    };
}



// Asignando eventos a los campos del formulario
inputNombre.addEventListener('keyup', (e) => {
    // validarNombre(evento.objetivo.valor);
    validarNombre(e.target.value);
});

inputCorreo.addEventListener('keyup', (e) => {
    validarEmail(e.target.value);
});

inputNacimiento.addEventListener('change', (e) => {
    validarNacimiento(e.target.value);
});

inputTelefono.addEventListener('keyup', (e) => {
    validarTelefono(e.target.value);
});

inputClave.addEventListener('keyup', (e) => {
    validarClave(e.target.value);
});



//Tarea: Si todos los campos estan bien se procede a realizar el registro, se limpian los campos y automaticamente
// se debe mostrar el usuario registrado en el "section-2"