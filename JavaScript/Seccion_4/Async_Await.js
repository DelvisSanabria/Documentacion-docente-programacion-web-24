/* 
Archivo 31

    Async-Await es en escencia lo mismo que las promesas, azucar sintactica, es decir es una manera
    mas facil de interpretar las promesas, sin dejar de ser un proceso asincronico.

    la palabra async se coloca antes de una funcion para que esta retorne una promesa,
    es decir, una funcion se puede convertir en una funcion asincrona si se le agrega
    la palabra async antes de la palabra function.

    la palabra await se coloca antes de una promesa para que esta espere a que la promesa se resuelva
    para continuar con el codigo.
*/


// Ejemplo 1:

// Creamos una variable que contenga un array de objetos, donde cada objeto es un usuario
//  que contiene id, nombre, apellido, sexo y edad.

let usuarios = [
    {
        id: 1,
        nombre: "Santiago",
        apellido: "Gonzalez",
        sexo: "Masculino",
        edad: 25,
        foto: "https://covalto.com/static/78498ccda70933a5f1e3edc3e40d3cbe/34aca/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp"
    },{
        id: 2,
        nombre: "Alejandro",
        apellido: "Hernandez",
        sexo: "Masculino",
        edad: 19,
        foto: "https://covalto-production-website.s3.amazonaws.com/Hero_Desktop_Acerca_De_Covalto_V1_79ce51b800.webp"
    },{
        id: 3,
        nombre: "Edward",
        apellido: "Ventura",
        sexo: "Masculino",
        edad: 24,
        foto: "https://covalto-production-website.s3.amazonaws.com/Hero_Mobile_Invierte_Ahora_V4_3e5c745c7d.webp"
    },{
        id: 4,
        nombre: "Luis",
        apellido: "Hernandez",
        sexo: "Masculino",
        edad: 20,
        foto: "https://covalto-production-website.s3.amazonaws.com/Hero_Mobile_Pagare_Lealtad_V2_4c1bb0820b.jpg"
    },
    {
        id: 5,
        nombre: "Ana",
        apellido: "Lopez",
        sexo: "Femenino",
        edad: 22,
        foto: "https://www.mundopsicologos.com/site/article/62173/52366/13-habitos-que-te-ayudaran-a-ser-una-persona-mas-feliz-0_ai1.jpg"
    },
    {
        id: 6,
        nombre: "Luisa",
        apellido: "Gomez",
        sexo: "Femenino",
        edad: 18,
        foto: "https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg"
    }
]


// Creamos una funcion asincrona que retorne una promesa, la cual se resuelve si el array de usuarios
// tiene menos de 11 usuarios, en caso contrario se rechaza la promesa.

// Si el array de usuarios tiene menos de 11 usuarios, se recorre el array de usuarios y se almacena
// el nombre de cada usuario en un array llamado misDatos, luego se resuelve la promesa con un mensaje
const obtenerUsuarios = ()=>{
    let misDatos = [];
    return new Promise((resolve, reject)=>{
        if(usuarios.length < 7){
            setTimeout(()=>{
                usuarios.map((usuario)=>{
                    let {nombre, apellido, foto} = usuario;
                    misDatos.push(
                        {
                            nombre: nombre,
                            apellido: apellido,
                            foto: foto
                        }
                    );
                })
                resolve(misDatos);
            }, 2500);
        }else{
            reject("No se cumplio la promesa");
        }
    })
};


// Esta funcion buscarDatos() utiliza async-await para esperar a que la promesa se resuelva para continuar con el codigo
// en caso de que la promesa se resuelva, se imprime el mensaje que retorna la promesa, en caso contrario
// se imprime un mensaje de error.

async function buscarDatos(){
    const datosObtenidos = await obtenerUsuarios();
    
    if(datosObtenidos){
        datosObtenidos.map((dato)=>{
            let divPersona = document.createElement("div");
            divPersona.innerHTML = `
                <h2 class="text-center font-bold text-2xl">${dato.nombre} ${dato.apellido}</h2>
                <img class="w-[300px] rounded" src="${dato.foto}" alt="${dato.nombre}">
            `;
            document.getElementById("grilla").appendChild(divPersona);
        })
    }

    console.log(datosObtenidos);
};

buscarDatos();