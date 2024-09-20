// Los métodos de objetos son funciones que se pueden llamar en un objeto específico. 
// En JavaScript, los métodos son propiedades de un objeto que tienen como valor una función.


let persona = {
    nombre: "Daniela",
    edad: 27,
    pais: "Venezuela",
    correo: "daniela@gmail.com",
    telefono: "0414-1234567",
    ciudad: "Caracas",
    direccion: "Calle 123, Edificio 123, Piso 12, Apto 123, Urbanización Las Palmas"
};



// Object.keys(objeto): Devuelve un arreglo de las propiedades enumerables de un objeto.
const propiedades = Object.keys(persona);

console.log(propiedades);



// Object.values(objeto): Devuelve un arreglo de los valores de las propiedades enumerables de un objeto.
const valores = Object.values(persona);

console.log(valores);





// Object.assign(objeto-destino, objeto-a-copiar1, objeto-a-copiar2, ...etc): 
// Copia las propiedades de uno o más objetos a un objeto destino.
// Si encuentra propiedades que coincidan, estas seran sobreescritas.
const masDatos = {
    genero: "Femenino",
    estatura: "1.70 m",
    peso: "60 kg"
};

const masDatos2 = {
    nivelAcademico: "Universitario",
    profesion: "Ingeniera de Sistemas",
    experienciaLaboral: "5 años"
};

//            destino, objeto1, objeto2,...etc
Object.assign(persona, masDatos, masDatos2);

console.log(persona);




// .hasOwnProperty("nombre"): Devuelve un valor booleano (true/false) 
// Si un objeto tiene una propiedad específica.
console.log(persona.hasOwnProperty("nombre"));

console.log(persona.hasOwnProperty("salario"));
persona.salario = 1000;
console.log(persona.hasOwnProperty("salario"));



// .toString(): Este metodo devuelve una cadena que representa al objeto.
const objetoEnString = persona.toString();
console.log(objetoEnString);

