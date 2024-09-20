/*
    ¿Que son Promesas?
    Las promesas son la forma mas sencilla de manejar la asincronía.
    
    Pueden tener tres estados: 
        - Pendiente (pending): Cuando se esta ejecutando, es el estado inicial, ni cumplido ni rechazado.
        - Cumplida (fulfilled): Cuando la operacion se realiza satisaftoriamente.
        - Rechazada (rejected): Cuando la operacion fallo.

    Una promesa representa el resultado de una operación que aún no ha finalizado, pero que eventualmente 
    producirá un resultado o un error. Tal como en la vida cotidiana, una promesa es un hecho que estara
    pendiente y que puede cumplirse o no.

    Una vez que una promesa cambia a un estado cumplido o rechazado, su valor se mantiene y NO puede cambiar.

    Una promesa se crea usando la palabra clave new y la función constructora Promise ( new Promise() ).
    La función constructora recibe como argumento una función que acepta dos callbacks, resolve y reject. 
        - resolve: nombre que se utiliza por convenio, y que se dedica a almacenar una respuesta satisfactoria.
        - reject: nombre que se utiliza por convenio, y que se dedica a almacenar una respuesta de error.

    La función que se pasa a la promesa debe realizar la operación asíncrona y, una vez terminada, 
    llamara a resolve si todo fue bien o a reject si ocurrió algún error.



    Sintaxis: 

    - Con funcion de flecha:
    const miPromesa = new Promise( (resolve, reject)=> { ... } );

    - Con funcion anonima:
    const miPromesa =  new Promise( function(resolve, reject){ ... } ); 



    Una vez creada la promesa, se pueden suscribir a ella los métodos .then, .catch y .finally.

    .then: es un metodo que recibe como argumento una función que será llamada cuando la 
    promesa se resuelva (es decir, cuando se llame a resolve) y se le pasará como argumento el resultado 
    de la operación asíncrona. 

    .catch: es un metodo que recibe como argumento una función que será llamada cuando la promesa sea 
    rechazada (es decir, cuando se llame a reject) y se le pasará como argumento el error producido.

    .finally: es un metodo OPCIONAL que recibe como argumento una función que será llamada cuando la promesa se
    resuelva o se rechace, es decir, siempre se ejecutara al final de la promesa.
    Se suele usar para realizar tareas de limpieza o para realizar acciones que deben ejecutarse tanto si la
    promesa se resuelve como si se rechaza.

    Las promesas permiten manejar de forma elegante y sencilla la asincronía en JavaScript, 
    permitiendo encadenar operaciones y controlar los errores de manera eficiente.
*/


// Ejemplo 1 (Promesa sincrona (NO Asincrona) que evalua igualdad de tipo de datos y retorna una respuesta).

// Definicion de una promesa.
// NOTA: Se guarda en una variable para poder usar metodos al realizar el manejo.
// NOTA-2: estar atento con los resultados que arroja QUOKKA, existen bugs, (Mejor usar la consola del navegador).

let EvaluarIgualdad = new Promise( (resolve, reject) => {
    let resultado = 5 === 5;
    if(resultado){
        resolve('La promesa se cumplio\nLos numeros son iguales');
    }else{
        reject('La promesa se rechazo\nLos numeros son diferentes');
    }
});


// Manejo de la promesa.

// Con funcion de flecha.

/*
EvaluarIgualdad
// Se encadena el metodo .then para manejar la respuesta satisfactoria de la promesa (resolve). 
    .then( respuesta => console.log(respuesta) )
    // Se encadena el metodo .catch para manejar la respuesta de error de la promesa (reject).
    .catch( error => console.log(error) );

// NOTA: no colocar ; antes del catch, ya que se considera como un error de sintaxis.


// Con funcion anonima.
EvaluarIgualdad
    .then( function(respuesta){console.log(respuesta)} )
    .catch( function(error){console.log(error)} );
*/





// Ejemplo 2 (Promesa asincrona, usando setTimeout()).
// Es la misma promesa del ejemplo anterior solo que se ejecuta asincronamente.

let EvaluarIgualdadAsincrona = new Promise( (resolve, reject) => {
    setTimeout(function(){
        let resultado = 5 === 5;
        if(resultado){
            resolve('La promesa se cumplio\nLos numeros son iguales');
        }else{
            reject('La promesa se rechazo\nLos numeros son diferentes');
        }
    }, 5000);
});


EvaluarIgualdadAsincrona
    .then(
        function(respuesta){
            console.log(respuesta);
        }
    )
    .catch(
        function(error){
            console.error(error);
        }
    )
    .finally(
        function(){
            console.log('La promesa ha finalizado');
        }
    );



// Ejemplo 3 (Objeto y setTimeout) .
// De un un array de objetos llamado "peliculas", donde cada objeto es una pelicula, 
// extráe asincronamente con una promesa llamada "tomarPeliculas" los ID´s y titulos y guardalos 
// en un nuevo array llamado "peliculas2".

let peliculas = [
    {
        id: 1,
        titulo:"Dr. Strange 2",
        fecha: 2022
    },
    {
        id: 2,
        titulo:"Black Adam",
        fecha: 2022
    },
    {
        id: 3,
        titulo:"Eternals",
        fecha: 2021
    },
    {
        id: 4,
        titulo:"¡Shazam!",
        fecha: 2019
    },
    {
        id: 5,
        titulo:"Venom",
        fecha: 2018
    },
    {
        id: 6,
        titulo: "Iron Man",
        fecha: 2008,
    }
    ,{
        id: 7,
        titulo: "Spider Man",
        fecha: 2002,
    }
];

let peliculas2 = [];

class Pelicula{
    constructor(id, titulo){
        this.id = id;
        this.titulo = titulo;
    }
};

const tomarPeliculas = new Promise( (resolve, reject) => {
    setTimeout(function(){
        peliculas.map( pelicula => {
            const cuerpoTabla = document.getElementById('tbody');
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td class="text-center border-2 border-solid border-black">${pelicula.id}</td>
                <td class="text-center border-2 border-solid border-black">${pelicula.titulo}</td>
            `;

            cuerpoTabla.appendChild(fila);

            peliculas2.push(new Pelicula(pelicula.id, pelicula.titulo));
        });
        resolve(peliculas2);
    }, 8000);
});




// Ejercicio para realizar en casa.
// Crear una promesa que simule la obtencion de datos de un servidor,
// la promesa debe tener un tiempo de espera de 5 segundos.

// La promesa debe iterar sobre un array de objetos llamado "empleados",
// donde cada objeto es un empleado, que tiene las siguientes propiedades:

// - Nombre
// - Apellido
// - Edad
// - Pais
// - Ciudad
// - Profesion
// - Salario
// - Estado civil
// - Hobbies
// - Fecha de nacimiento
// - Genero
// - Codigo de empleado

// Se deben extraer los datos: nombre, apellido, edad, pais y ciudad.

// La promesa debe retornar un array de objetos con la siguiente estructura:
// - Nombre
// - Apellido
// - Edad
// - Pais
// - Ciudad

// Cada objeto se debe crear en base a una clase llamada "Persona"
// y ser guardado en un array llamado "personas".
// Luego de obtener los datos, mostrarlos en una tabla en el DOM.

// Todo esto debe suceder al momento de persionar un boton en la web que diga
// "Obtener datos de empleados".


// Todo debe estar estilizado con CSS, TailwindCSS o SASS.