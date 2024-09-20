import { useState, createContext } from "react";

/*  
    createContext: Es una función que nos permite crear un contexto de React.

    ¿Qué es un contexto de React?
    Un contexto de React es una forma de compartir datos entre componentes sin tener que pasar
    props manualmente a través de cada nivel.
*/

export const MiContexto = createContext();


const Provider = ({children}) => {

    // Creamos un estado para almacenar un mensaje y poder pasarlo a los componentes hijos.
    const [mensaje, setMensaje] = useState("Hola desde el Provider");

    return (
        // Enviamos el estado y la función para modificarlo a los componentes hijos.
        // En este caso se usa el la etiqueta MiContexto (Que es el contexto creado) y usando el operador de miembro "." indicamos
        // el provider y el valor que se enviara a los componentes hijos mediante el propiedad value.
        <MiContexto.Provider value={{mensaje, setMensaje}}>
            {children}
        </MiContexto.Provider>
    );
}

export default Provider;