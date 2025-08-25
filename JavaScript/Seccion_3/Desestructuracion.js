/* 
Archivo 19

    ¿Que es la desestructuración?
    Es una forma de extraer o desempaquetar datos de un array o un objeto y asignarlos a variables.
    Esto facilita la manipulación de los datos y permite lograr un código más limpio y legible.

    Otra ventaja es que se pueden extraer solamente los datos requeridos para una u otra tarea, 
    sin necesidad de manipular el array o el objeto original.
*/

// Desestructuración de arrays
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Forma tradicional
const uno = numeros[0];
const dos = numeros[1];
const tres = numeros[2];
const cuatro = numeros[3];
const cinco = numeros[4];

console.log(uno);
console.log(dos);
console.log(tres);
console.log(cuatro);



// Con desestructuración
const [var1, var2, var3, var4] = numeros;

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);






// Desestructuración de objetos

const persona = {
    nombre: 'Delvis',
    apellido: 'Sanabria',
    edad: 23,
    ciudad: 'Css',
    sexo: 'Masculino',
    correo: 'delvis@gmail.com'
};



// Forma tradicional
const nombrePersona = persona.nombre;
const apellidoPersona = persona.apellido;
const ciudadPersona = persona.ciudad;
const correoPersona = persona.correo;

console.log(`Hola soy ${nombrePersona} ${apellidoPersona}, vivo en ${ciudadPersona} y mi correo es ${correoPersona}`);



// Con desestructuración
const {nombre, apellido, ciudad, correo} = persona;

console.log(`Hola soy ${nombre} ${apellido}, vivo en ${ciudad} y mi correo es ${correo}`);





// Desestructurar objetos anidados
const persona2 = {
    nombre2: 'Delvis',
    apellido2: 'Sanabria',
    edad: 23,
    ubicacion: {
        ciudad2: 'Css',
        pais: 'Venezuela',
        direccion: 'En algun lugar muy muy lejano'
    }
};


// Forma tradicional
const nombrePersona2 = persona2.nombre2;
const apellidoPersona2 = persona2.apellido2;
const ciudadPersona2 = persona2.ubicacion.ciudad2;
const paisPersona2 = persona2.ubicacion.pais;

console.log(`Hola soy ${nombrePersona2} ${apellidoPersona2}, vivo en ${ciudadPersona2}, ${paisPersona2}`);



// Con desestructuración
const {nombre2, apellido2, ubicacion:{ciudad2, pais}} = persona2;

/* Cuando quiero desestructurar objetos anidadas debo
    especificar el nombre del objeto y luego el nombre de la propiedad que quiero extraer.
    En este caso, "ubicacion" es el objeto anidado dentro de "persona2", y "ciudad2" y "pais" son sus propiedades.
*/

console.log(`Hola soy ${nombre2} ${apellido2}, vivo en ${ciudad2}, ${pais}`);