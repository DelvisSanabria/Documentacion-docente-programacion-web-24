// Podemos Crear un componente de tipo funcion que retorne un h1 con el titulo de la App
// Luego exportamos el componente para poder utilizarlo en otros componentes o vistas

// function Titulo(){
//     return <h1>Titulo de la App</h1>
// };

// export default Titulo;


// En este caso mantenemos el standart de crear un componente con una funcion de tipo flecha.
// NOTA: El comando para crear un stateless function component es: sfc


// Los componentes tambien pueden recibir propiedades, en este caso el componente Titulo recibe una propiedad 
// llamada contenido y otra propiedad llamada estilos, ademas de tener un valor por defecto en caso de que no se 
// le pase un valor a cualquiera de las propiedades.
const Titulo = ({estilos, contenido}) => {
    return ( 
        <h1 className={estilos || "font-bolt text-2xl text-green-500 bg-yellow-400"}>{contenido || "Texto por defecto"}</h1>
    );
}

export default Titulo;
