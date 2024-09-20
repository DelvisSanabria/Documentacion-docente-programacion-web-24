/* CLASES:
    Una clase es una plantilla o molde para crear objetos(instancias), 
    que tienen propiedades y métodos en común. 

    Una clase se define utilizando la palabra clave "class" seguida del nombre de la clase, por ejemplo: class Persona{...} 
    Dentro de las llaves se definen las propiedades y métodos de la clase.

    - Constructor: es un método especial de la clase que se ejecuta automáticamente cuando 
    se crea una nueva instancia, su rol principal es inicializar los atributos de la clase con los 
    valores pasados como argumentos(parametros) al crear una nueva instancia, usando la palabra reservada new.

    - Metodo: es una funcion(puede ser opcional) que retorna(con retun) logica.
    En el ejemplo que veremos mas adelante, el método Saludo está fuera del scope del constructor, pero puede acceder a 
    los atributos de la clase que se han declarado en el constructor a través de 
    la palabra clave "this". Esto es posible porque this se refiere a la instancia actual de la clase.

    - this: hace referencia al elemento padre, es decir al objeto instanciado.

    NOTA:
        Es una convención común en JavaScript declarar las clases con la 
        primera letra de cada palabra en mayúscula. Ejemplo "Persona" o "Usuario",
        sin embargo es solo una buena practica, no evita el buen funcionamiento de las clases.
        
        Esto se realiza con la finalidad de diferenciar de manera mas facil cuando
        se emplea una clase, una variable o una funcion.
*/


// En este ejemplo, la clase "Persona" tiene un constructor que se utiliza para asignar valores a las 
// propiedades "nombre" y "edad" al crear una nueva instancia de la clase, esto quiere decir al 
// crear un nuevo objeto. 
// También tiene un método que es una funcion llamada "saludoNormal" que retorna un mensaje.


class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludoNormal() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }

    saludoTriste() {
        return `Hola, que tal?... mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }

    saludoAnimado() {
        return `Hola, mi querid@ amig@, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}


// Loop para crear instancias de la clase Persona
do{
    // Crear una nueva instancia de la clase Persona
    const instancia = new Persona(prompt("Ingresa tu nombre"), +prompt("Ingresa tu edad"));

    // Mostrar los valores de la instancia en la consola
    console.log(`La instancia es:`)
    console.log(instancia);
    alert(`Nombre: ${instancia.nombre}`);
    alert(`Edad: ${instancia.edad}`);
    alert(`Saludo normal: ${instancia.saludoNormal()}`);
    alert(`Saludo triste: ${instancia.saludoTriste()}`);
    alert(`Saludo animado: ${instancia.saludoAnimado()}`);

    // Preguntar si se desea crear otra instancia
    // En caso de que la respuesta sea "si", el loop se repetirá.
    respuesta = prompt("Desea crear otra instancia? si/no");
}while(respuesta.toLowerCase() === "si");



/*
    La principal diferencia entre clases y funciones constructoras es: 
    - la sintaxis utilizada para crearlas y utilizarlas.
    - la creacion de metodos.

    Las clases se introdujeron en ECMAScript 6 (ES6 - ES2015), y proporcionan una sintaxis más clara y legible para crear objetos 
    y definir sus propiedades y métodos. 

    En resumen, las clases y las funciones constructoras son dos formas diferentes de crear objetos en 
    JavaScript, siendo la principal diferencia entre ellas la sintaxis más limpia y legible y la creacion de metodos,
    por parte de las clases.
*/