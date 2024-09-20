/*
    los objetos son una de las estructuras de datos fundamentales. 
    Un objeto es un conjunto de pares clave-valor que representan una entidad o un concepto. 
    Las claves son cadenas de texto y los valores pueden ser cualquier tipo de dato.


    Cada objeto puede tener un numero infinito de propiedades, pero tambien pueden poseer metodos.

    ¿Que son los metodos?
    Los metodos son funciones que se pueden asignar a un objeto y que pueden ser llamadas en cualquier momento.
*/


let auto = {
    marca: "Chevrolet",
    modelo: "Camaro SS",
    colores: ["azul", "gris", "plateado"],
    fecha: 1967,
    motor: "6 en Linea",
    transmision: "Manual",

    // Metodos
    avanzar: function(){
        return "El auto esta avanzando";
    },
    retroceder: function(){
        return "El auto esta retrocediendo";
    },
    frenar: function(){
        return "El auto ha frenado";
    }
};





// Para ver los valores de las propiedades de un objeto se utiliza el operador de miembro "."
console.log( auto.marca );
console.log( auto.modelo );
console.log( auto.colores );
console.log( auto.fecha );
console.log( auto.motor );
console.log( auto.transmision );

console.log( auto.avanzar() );
console.log( auto.frenar() );
console.log( auto.retroceder() );



// Reasignar el valor de una clave o propiedad de un objeto
auto.fecha = 2024;

console.log(auto)



/*
    Crea un objeto llamado productos, que contenga 5 propiedades, tecnologia,hogar,alimentos,salud,ropa.

    - tecnologia, debe ser un objeto con 2 propiedades:
        * computadoras: debe tener un objeto con 4 propiedades: tipo:[laptop,escritorio], ram:[4gb,8gb,16gb], almacenamiento:[128gb,256gb,512gb,1tb], procesador:[Intel,AMD].
        * celulares: debe tener un objeto con 3 propiedades: marca:[samsumg,lg,xiaomi,poco], ram[4gb,6gb,8gb,12gb,16gb], almacenamiento(32gb,64gb,128gb,256gb),
    
    - hogar, debe ser un objeto con 2 propiedades:
        * electrodomesticos: debe tener un objeto con 2 propiedades: tipo:[tv,parlante,licuadora,lavadora], color:[blanco,gris,negro]
        * muebles: debe tener un objeto con 3 propiedades: tipo:[silla,mesa,gabetero], material:[madera,plastico,metal], color:[blanco,beige,gris,negro]

    - alimentos, debe tener un objeto con 4 propiedadess:
        * carnes: debe tener un objeto con 1 propiedad: animal:[pollo,res,cerdo]
        * viveres: debe tener un objeto con 3 propiedades: harina:[trigo,maiz], aceite:[girasol,oliva,maiz], leche:[completa,soya,almendra,descremada]
        * fruver: debe tener un objeto con 2 propiedades: frutas:[manzana,pera,uva,fresa,piña], vegetales:[lechuga,zanahoria,cebolla,rabano,calabaza]
        * aseo: debe tener un objeto con 2 propiedades: personal:[shampoo,acondicionador,jabon,crema dental,desodorante], hogar[cloro,desinfectante,jabon,paños]


    - salud, debe tener un objeto con 2 propiedades:
        * medicamentos: debe tener un objeto con 2 propiedades:
            ° con_prescripcion: debe tener un objeto con 2 propiedades: jarabe:[Clonazepan, Tramadol, Cloperastina, Terbutalina], comprimidos:[Losartan, Enalapril, Ácido valproico, Metformina]
            ° de_venta_libre: debe tener un objeto con 2 propiedades: jarabe:[Acetaminofén, Loratadina, Nitazoxanida, Ambroxol], comprimidos:[Cetirizina, Albendazol, Trimebutina, Omeprazol]
        * primeros_auxilios: debe tener un objeto con 3 propiedades: proteccion_personal:[mascarillas,lentes protectores], curas_y_vendajes:[vendas,tijeras,curitas], suministros_para_heridas:[algodon,compresas]


    - ropa, debe tener un objeto con 3 propiedades:
        * damas: debe tener un objeto con 3 propiedades: prenda:[vestido,jean,blusa,ropa interior,calzado], temporada:[invierno,primavera,verano,otoño], importado:[true,false]
        * caballeros: debe tener un objeto con 3 propiedades: prenda:[short,jean,camisa,ropa interior,calzado], temporada:[invierno,primavera,verano,otoño], importado:[true,false]
        * niños: debe tener un objeto con 3 propiedades: prenda:[vestido,short,jean,camisa,blusa,ropa interior,calzado], temporada:[invierno,primavera,verano,otoño], importado:[true,false]

    Resultados estimados:
        console.log(productos.tecnologia.computadoras.procesador[0]); //intel
        console.log(productos.alimentos.viveres.leche[2]); //almendra
        console.log(productos.salud.medicamentos.con_prescripcion.comprimidos[0]); //Losartan
        console.log(productos.hogar.electrodomesticos.tipo[2]); //licuadora
        console.log(productos.ropa.damas.temporada[0]); //invierno
*/
let

// tecnologia,hogar,alimentos,salud,ropa.
const productos = {
    tecnologia:{
        computadoras: {
            tipo:["laptop","escritorio"], 
            ram:["4gb","8gb","16gb"], 
            almacenamiento:["128gb","256gb","512gb","1tb"], 
            procesador:["Intel","AMD"]
        },
        celulares: {
            marca:["samsumg","lg","xiaomi","poco"], 
            ram:["4gb","6gb","8gb","12gb","16gb"], 
            almacenamiento:["32gb","64gb","128gb","256gb"]
        }
    },
    hogar:{
        
    },
    alimentos:{
        
    },
    salud:{
        
    },
    ropa:{
        
    }
};


console.log(productos.tecnologia.computadoras.procesador[0]);




// Propiedad this: esta propiedad hace referencia a la instancia del objeto que se esta utilizando.


let auto2 = {
    marca: "Chevrolet",
    modelo: "Camaro SS",
    colores: ["azul", "gris", "plateado"],
    fecha: 1967,
    motor: "6 en Linea",
    transmision: "Manual",

    // Metodos
    avanzar: function(){
        return `El auto ${this.marca} ${this.modelo} esta avanzando`;
    },
    retroceder: function(){
        return "El auto esta retrocediendo";
    },
    frenar: function(){
        return "El auto ha frenado";
    }
};

let auto3 = {
    marca: "Ford",
    modelo: "Mustang GT",
    colores: ["azul", "gris", "plateado"],
    fecha: 2012,
    motor: "6 en Linea",
    transmision: "Manual",

    // Metodos
    avanzar: function(){
        return `El auto ${this.marca} ${this.modelo} esta avanzando`;
    },
    retroceder: function(){
        return `El auto ${this.marca} ${this.modelo} esta retrocediendo`;
    },
    frenar: function(){
        return `El auto ${this.marca} ${this.modelo} ha frenado`;
    }
};


// Añadiendo un metodo despues de que el objeto ya exista.
auto3.acelerar = function(){
    return `El auto ${this.marca} ${this.modelo} esta acelerando`;
}


console.log( auto2.avanzar() );
console.log( auto3.avanzar() );
console.log( auto3.acelerar() );





// Juego de manejar un auto con metodos
/* 
    Elabora un juego que te permita seleccionar entre 3 autos diferentes, cada auto debe tener 3 metodos:
    - avanzar normalmente: debe retornar un mensaje que diga "El auto (marca) (modelo) esta avanzando con normalidad"
    - acelerar: debe retornar un mensaje que diga "El auto (marca) (modelo) esta acelerando"
    - retroceder: debe retornar un mensaje que diga "El auto (marca) (modelo) esta retrocediendo"
    - frenar: debe retornar un mensaje que diga "El auto (marca) (modelo) ha frenado"

    Adicionalmente debes mostrar una situacion de semaforo, donde el semaforo puede estar en 3 estados:
    - verde
    - amarillo
    - rojo

    En base a esta situacion el usuario debe elegir que desea hacer con el auto, si avanzar, acelerar, retroceder o frenar.
    Los resultados deberan ser consecuentes a cada accion.
*/
